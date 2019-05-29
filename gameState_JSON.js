// Games table columns

theme = 'string ex: Game of Thrones, Avengers....'
roomStatus = 'string:  ex: Waiting, playing, full, gameover'

gameState = {
    //everything outside is for creating a game
    maxRound: "integer",
    maxPlayers: 'integer',
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
        user_id1: {
            roundPoints: 'integer',
            status: 'string, ex: ready, selecting',
            questionCards: 'array[] of 3 question cards',
            answerCards: 'array[] of 5 cards',
            selectedCard: 'integer, card_id'
        },
        user_id2: {
            roundPoints: 'integer',
            status: 'string, ex: ready, selecting',
            questionCards: 'array[] of 3 question cards',
            answerCards: 'array[] of 5 cards',
            selectedCard: 'integer, card_id'
        }
    }
}

