// Games table columns

theme = 'string ex: Game of Thrones, Avengers....'
maxRound = "integer"
gameState = {
    //everything outside is for creating a game
    maxRound: "integer",
    creator: 'integer, user_id',
    deck_id: 'integer',
    isEveryoneDeck: 'bool',
    gameInfo: {
        status: 'string ex: questioner is choosing a card, answers must choose card....', 
        currentPlayers: 'integer, num of players in the room',
        currentRound: 'integer',
        currentQuestioner: 'integer, user_id',
        selectedQuestion: 'integer, card_id',
        selectedAnswer: 'integer, card_id',
        roundWinner: 'integer, ,user_id'
    },
    playersInfo: {
        users: [
            {
              id: 'user_id',
              roundPoints: 'integer',
              status: 'waiting, ready',
              questionCards: [ card1.content, card2.content, card3.content],
              answerCards: [acard1.content, acard2.content, acard3.content, acard4.content, acard5.content],
              selectedCard: 'card_id'
            },
            {
              id: user2.id,
              roundPoints: 0,
              status: 'ready',
              questionCards: nil,
              answerCards: [acard1.id, acard2.id, acard3.id, acard4.id, acard5.id],
              selectedCard: nil
            }
          ] 
    }
}

