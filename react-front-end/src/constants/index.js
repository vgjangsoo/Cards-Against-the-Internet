export const API_ROOT = 'http://localhost:3000/api';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


export const loadingGameState = {
  maxPlayers: 5,
  gameState: {
      //everything outside is for creating a game
      gameInfo: {
          currentQuestioner: 0,
      },
      playersInfo: {
          users: [1, 2, 3, 4,5] 
      }
  }
}



///////////////////
// gameTable
// {
//   theme = 'string ex: Game of Thrones, Avengers....'
//   maxRound = "integer"
//   maxPlayers = 'integer'
//   gameState = {
//       //everything outside is for creating a game
//       maxRound: "integer",
//       creator: 'integer, user_id',
//       deck_id: 'integer',
//       isEveryoneDeck: 'bool',
//       gameInfo: {
//           status: 'string ex: questioner is choosing a card, answers must choose card....', 
//           currentPlayers: 'integer, num of players in the room',
//           currentRound: 'integer',
//           currentQuestioner: 'integer, user_id',
//           selectedQuestion: 'integer, card_id',
//           selectedAnswer: 'integer, card_id',
//           roundWinner: 'integer, ,user_id'
//       },
//       playersInfo: {
//           users: [
//               {
//                 id: 'user_id',
//                 roundPoints: 'integer',
//                 status: 'waiting, ready',
//                 questionCards: [ card1.content, card2.content, card3.content],
//                 answerCards: [acard1.content, acard2.content, acard3.content, acard4.content, acard5.content],
//                 selectedCard: 'card_id'
//               },
//               {
//                 id: user2.id,
//                 roundPoints: 0,
//                 status: 'ready',
//                 questionCards: nil,
//                 answerCards: [acard1.id, acard2.id, acard3.id, acard4.id, acard5.id],
//                 selectedCard: nil
//               }
//             ] 
//       }
//   }

// }
