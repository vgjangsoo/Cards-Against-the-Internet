import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";
import "./css/Loader.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Chat from "./Chat.jsx";
import AnswererDeck from "./AnswererDeck.jsx";
import QuestionerDeck from "./QuestionerDeck.jsx";
import History from "./History";
import QuestionSection from "./QuestionSection.jsx";
import AnswerSection from "./AnswerSection.jsx";
import { API_ROOT, API_WS_ROOT, HEADERS, loadingGameState } from "./constants";
import actioncable from "actioncable";

//pass this cable prop down to any component that needs socket connections
const cable = actioncable.createConsumer(API_WS_ROOT);

const style = {
  marginTop: "5px",
  border: "1px solid",
  padding: "15px",
  borderRadius: "5px"
};

class Game extends Component {
  constructor(props) {
    super(props);
    ///use loadingGameState to fake loading data until real data comes
    this.state = {
      loadingGameState: loadingGameState,
      gameTable: {},
      selectedAnswer: "",
      selectedQuestion: ""
    };
    // being passed down from parent component, will setup the sockect connection
    // Cable is working for now, but wrong channel
    // room: `${this.props.match.params.id}`
    cable.subscriptions.create(
      { channel: "GamesChannel" },
      {
        received: data => {
          // console.log('CABLE PROP DATA', data)
          console.log("INSIDE WS cable.subscription", data);
          this.handleRecievedGame(data);
        }
      }
    );
    this.handleRecievedGame = this.handleRecievedGame.bind(this);
    this.handlerStartButton = this.handlerStartButton.bind(this);
    this.handlerReadyButton = this.handlerReadyButton.bind(this);
    this.AnswerArea = this.AnswerArea.bind(this);
    this.QuestionArea = this.QuestionArea.bind(this);
    this.onSelectAnswer = this.onSelectAnswer.bind(this);
    this.onSelectQuestion = this.onSelectQuestion.bind(this);
    this.handlerPlayQuestion = this.handlerPlayQuestion.bind(this)
    this.handlerPlayAnswer = this.handlerPlayAnswer.bind(this)

  }

  componentDidMount() {
    // http GET request to api/games
    console.log("===INSIDE COMPONENT DID MOUNT===");
    console.log(this.props);
    const gameRoomId = this.props.match.params.id;
    // console.log('roominfo: ',this.props.match.params.id)
    axios.get(`${API_ROOT}/games/${gameRoomId}`).then(res => {
      console.log("ComponentDidMount - GAME DATA", res.data);
      this.setState({ gameTable: res.data });
    });
  }

  handleRecievedGame(data) {
    // for incoming WS broadcasting to this room only
    console.log("INSIDE WS handleRecievedGame");
    console.log("data is:", data);

    this.setState({ gameTable: data.game });
  }

  handlerStartButton() {
    // when questioner click on start button
    console.log("START BUTTON HANDLER called");
    let updateData = [];

    const gameRoomId = this.props.match.params.id;
    const type = "start-button-pressed";
    updateData.push(type);
    const gameState = this.state.gameTable.gameState;
    updateData.push(gameState);

    axios
      .put(`${API_ROOT}/games/${gameRoomId}`, {
        type: type,
        gameState: gameState
      })
      .then(res => {
        console.log("PUT successful, res:", res);
      });
  }

  handlerReadyButton() {
    console.log("READY BUTTON HANDLER called");

    const gameRoomId = this.props.match.params.id;

    axios.post(`${API_ROOT}/games/${gameRoomId}/addUser`).then(res => {
      console.log("POST to game#addUser succsfull");
    });
  }

  handlerPlayQuestion(){
    console.log('question play card button pressed')
    const question = this.state.selectedQuestion;
    console.log('question is:', question)
    const gameRoomId = this.props.match.params.id;
    const type = 'question-card-selected'
    const gameState = this.state.gameTable.gameState;
    const userID = this.props.userData.id
    // const userIndex = this.state.userIndex
  
    axios.put(`${API_ROOT}/games/${gameRoomId}?question=${question}&userID=${userID}`, {
      type: type,
      gameState: gameState
    }).then(res =>{
      console.log('PUT handlerPlayQuestion successful, res:', res)
    });

    //need to clear both selectedAnswer and selectedQuestion after posting?
  }

  handlerPlayAnswer(){
    console.log('answer play card button pressed')
    const answer = this.state.selectedAnswer;
    console.log('answer is:', answer)
    const gameRoomId = this.props.match.params.id;
    const type = 'answer-card-selected'
    const gameState = this.state.gameTable.gameState;
    const userID = this.props.userData.id

    axios.put(`${API_ROOT}/games/${gameRoomId}?answer=${answer}&userID=${userID}`, {
      type: type,
      gameState: gameState
    }).then(res =>{
      console.log('PUT handlerPlayAnswer successful, res:', res)
    });

    //need to clear both selectedAnswer and selectedQuestion after posting?
  }

  onSelectAnswer(answer) {
    console.log("selected answer is:", answer);
    //need to set State of selected Answer
    this.setState({ selectedAnswer: answer });
  }

  onSelectQuestion(question) {
    console.log("selected question is:", question);
    // need to set State of selected Question
    this.setState({ selectedQuestion: question });
  }

  AnswerArea(gameState, gameTable) {
    const isStartMode =
      this.state.gameTable.gameState.gameInfo.currentRound !== 0;
    // should have AnswerDeck on top, AnswerSection on bottom

    if (!isStartMode) {
      return <AnswerSection userStatus={gameTable.gameState.playersInfo} currentQuestioner={gameTable.gameState.gameInfo.currentQuestioner} maxPlayers={gameTable.maxPlayers}/>
    }
    let activeUserInfo = "";
    const numPlayers = this.state.gameTable.gameState.gameInfo.currentPlayers;
    const questionerID = this.state.gameTable.gameState.gameInfo
      .currentQuestioner;

    for (let i = 0; i <= numPlayers - 1; i++) {
      //trying to find the ONE player in playersInfo.user array and also check if they are questioner
      if (this.props.userData.id ===this.state.gameTable.gameState.playersInfo.users[i].id) {
        activeUserInfo = this.state.gameTable.gameState.playersInfo.users[i];
      }
    }

    if (!activeUserInfo) {
      debugger;
    }

    //trying to only render the QuestionDeck or Question section based on activeUserInfo 
    let isAnswerer = activeUserInfo.answerCards.length > 0
    //check again if this person should show  
    if (questionerID === this.props.userData.id){
      isAnswerer = false;  
    }
    console.log("ANSWERS activeUserInfo:", activeUserInfo);
    //conditionally render based on:
    // isAnswerer = true ---- AnswererDeck
    //  isAnswerer = false --- AnswererSection
    return (
      <div>
        {isAnswerer ? (
          <AnswererDeck gameState={gameState} activeUserInfo={activeUserInfo} onSelectAnswer={this.onSelectAnswer}/>
        ) : (
          <AnswerSection
            userStatus={gameTable.gameState.playersInfo}
            currentQuestioner={gameTable.gameState.gameInfo.currentQuestioner}
            maxPlayers={gameTable.maxPlayers}
          />
        )}
      </div>
    );
  }

  QuestionArea(gameState) {
    const isStartMode =
      this.state.gameTable.gameState.gameInfo.currentRound !== 0;

    if (!isStartMode) {
      return <QuestionSection />;
    }
    // Here, game have started. currentRound > 0
    let activeUserInfo;
    const numPlayers = this.state.gameTable.gameState.gameInfo.currentPlayers

    for (let i = 0; i <= numPlayers - 1; i++) {
      //trying to find the ONE player in playersInfo.user array
      if (this.props.userData.id === this.state.gameTable.gameState.playersInfo.users[i].id){
        activeUserInfo = this.state.gameTable.gameState.playersInfo.users[i]
        break;
      }
    }
    if (!activeUserInfo) {
      debugger;
    }


    //trying to only render the QuestionDeck or Question section based on activeUserInfo 
    let isQuestioner = activeUserInfo.questionCards.length > 0
    let currentStatus = this.state.gameTable.gameState.gameInfo.status
    if (currentStatus === 'Question selected, please choose an answer'){
      isQuestioner = true;
    }
    if (currentStatus.startsWith('Answer have been submitted by')){
      isQuestioner = true;
    }
    // maybe send down isQuestioner as a prop to use?
    // should do most of the conditional rendering logic here in the parent, only send down static data to let component render


    return (
      <div>
        {isQuestioner ? (
          <QuestionerDeck
            activeUserInfo={activeUserInfo}
            gameState={gameState}
            onSelectQuestion={this.onSelectQuestion}
          />
        ) : (
          <QuestionSection />
        )}
      </div>
    );
  }

  //////////////////////////////////
  render() {
    console.log("PROPS:", this.props);
    console.log("State:", this.state);
    // console.log('loadingGameState:',this.state.loadingGameState);
    const gameTable = Object.keys(this.state.gameTable).length
      ? this.state.gameTable
      : this.state.loadingGameState;
    return (
      <div>
        {!Object.keys(this.state.gameTable).length ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : (
          <div>
            <div>
              <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm nav-bar-in-game">
                <div className="my-0 mr-md-auto font-weight-normal">
                  <h6 className="game-number">Room: {gameTable.id} </h6>
                  <h6 className="game-logged-ID">
                    Logged in: {this.props.userData.username}/ ID:{this.props.userData.id}{" "}
                  </h6>

                  <h3 className="game-theme"> {gameTable.theme}</h3>
                </div>
                <nav className="my-2 my-md-1 mr-md-3 game-round">
                  <div className="p-5">
                    <h6>
                      Round: {gameTable.gameState.gameInfo.currentRound} /{" "}
                      {gameTable.maxRound}
                    </h6>
                    <h6>
                      Players: {gameTable.gameState.gameInfo.currentPlayers} /{" "}
                      {gameTable.maxPlayers}
                    </h6>
                  </div>
                </nav>
                <nav className="my-2 my-md-1 mr-md-3">
                  <button
                    className="btn btn-dark btn-md p-2 game-nav-button"
                    onClick={this.handlerReadyButton}
                  >
                    Ready?
                  </button>
                </nav>
                <nav className="my-2 my-md-1 mr-md-3">
                  <button
                    className="btn btn-dark btn-md p-2 game-nav-button"
                    onClick={this.handlerStartButton}
                  >
                    Start
                  </button>
                </nav>
                <nav className="my-2 my-md-1 mr-md-3">
                  <Link to="/lobby">
                    <button className="btn btn-dark btn-md p-2 game-nav-button">
                      Leave Room
                    </button>
                  </Link>
                </nav>
              </div>
            </div>

            <div className="ingame-room">
              <form>
                <div className="cardDeck-container">
                  <div>
                    <div className="questioner shadow-lg" style={style}>
                      {this.QuestionArea(gameTable.gameState)}
                    </div>
                    <div className="status-message">
                      {
                        <h6 className="game-status-message">
                          {gameTable.gameState.gameInfo.status}
                        </h6>
                      }
                    </div>
                    <div>
                      <button className='btn btn-dark btn-md p-2 game-status-button' onClick={this.handlerPlayQuestion} >Play Q Card</button>
                    </div>
                    <div className='play-card-button'>
                      <button className='btn btn-dark btn-md p-2 game-status-button' onClick={this.handlerPlayAnswer} >Play A Card</button>
                    </div>
                    <div className="answerers shadow-lg" style={style}>
                      {this.AnswerArea(gameTable.gameState, gameTable)}
                      {/* <AnswerSection
                        userStatus={gameTable.gameState.playersInfo}
                        currentQuestioner={
                          gameTable.gameState.gameInfo.currentQuestioner
                        }
                        maxPlayers={gameTable.maxPlayers}
                      /> */}
                    </div>
                    <br />
                    <div className="chat-history-bar">
                      <div>
                        <History />
                      </div>
                      <div>
                        <Chat userInfo={gameTable.gameState.playersInfo} />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );

    // return (
    //   <div>
    //     <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-sm nav-bar-in-game">
    //       <div className="my-0 mr-md-auto font-weight-normal">
    //         <h6 className='room-name'>>Room #{gameRoomInfo.id}: </h6>
    //         <h3> {gameRoomInfo.theme}</h3>
    //       </div>
    //       <nav className="my-2 my-md-1 mr-md-3 game-round">
    //         <div className="p-5">
    //           <h6>Round: {gameRoomInfo.games[0].gameState.gameInfo.currentRound} / {gameRoomInfo.games[0].gameState.maxRound}</h6>
    //         </div>
    //       </nav>
    //       <nav className="my-2 my-md-1 mr-md-3">
    //         <button className="btn btn-dark btn-md p-2">Start</button>
    //       </nav>
    //       <nav className="my-2 my-md-1 mr-md-3">
    //         <Link to='/lobby'><button className="btn btn-dark btn-md p-2">Leave Room</button></Link>
    //       </nav>
    //     </div>

    //     <div className="ingame-room container">
    //       <form>
    //         <div>
    //           <div className="questioner col-9" style={style}>
    //             <QuestionerDeck />
    //           </div>
    //           <div className='status-message'>
    //             <h6>Status Message</h6>
    //           </div>
    //           <div className='play-card-button'>
    //             <button className='btn btn-dark btn-md p-2'>Play Card</button>
    //           </div>
    //           <div className="answerers col-9" style={style}>
    //             <AnswererDeck />
    //           </div>
    //           <br />
    //         </div>
    //       </form>
    //     </div>
    //     <div className="chat-history-bar">
    //       <div>
    //         <History />
    //       </div>
    //       <div>
    //         <Chat />
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Game;
