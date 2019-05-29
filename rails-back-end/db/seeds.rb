# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Recreating Decks"

Deck.destroy_all
puts "Finished destroying decks table"

puts 'Creating decks'

baseDeck = Deck.find_or_create_by! theme: 'Base' 


puts "Finished creating decks table"


puts "Recreating Cards ..."

Card.destroy_all
puts "Finished destroying cards table"

puts 'Creating QUESTION cards'


baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. High five, bro."
})

baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Hey Reddit! I’m ____. Ask me anything."
})

baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Why am I sticky?"
})

baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Uh, hey guys, I know this was my idea, but I’m having serious doubts about ____."
})

baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What’s that smell?"
})

  puts 'Creating Answer cards'

  baseDeck.cards.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Sperm whales."
  })

  baseDeck.cards.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Fiery poops."
  })


  baseDeck.cards.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Getting crushed by a vending machine."
  })
  

  baseDeck.cards.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Horse meat."
  })

  baseDeck.cards.create!({
      isQuestion: false,
      fromInternet: false,
      content: "An endless stream of diarrhea."
  })

  puts 'Finshed creating ANSWERS card'

  puts "Recreating Users"

  User.destroy_all
  puts "Finished destroying users table"

  puts 'Creating Users'

  user1 = User.find_or_create_by!({
    username: 'Sam1',
    password: '1234',
    isAdult: true,
    isBot: false,
    leaderboardPoints: 10 
  })
  
  user2 = User.find_or_create_by!({
    username: 'Ben1',
    password: '1234',
    isAdult: true,
    isBot: false,
    leaderboardPoints: 5 
  })

  user3 = User.find_or_create_by!({
    username: 'Tom1',
    password: '1234',
    isAdult: true,
    isBot: false,
    leaderboardPoints: 0 
  })

  puts "Finished creating users table"

  # puts "Recreating Games"

  # Game.destroy_all
  # puts "Finished destroying games table"

  # puts 'Creating games'

  # game1 = Game.create!({
  #   maxRound: 10,
  #   currentRound: 0,
  #   isEveryoneDeck: true,
  #   currentQuestion: nil,
  #   currentAnswer: nil,
  #   maxPlayers: 5,
  #   creator: user1.id,
  #   currentQuestioner: user1.id,
  #   roundWinner: nil,
  #   deck_id: baseDeck.id,
  #   gameStatus: 'waiting' 
  #  })

  #  game2 = Game.create!({
  #   maxRound: 10,
  #   currentRound: 5,
  #   isEveryoneDeck: true,
  #   currentQuestion: Card.where(isQuestion: true).first.id,
  #   currentAnswer: Card.where(isQuestion: false).last.id,
  #   maxPlayers: 5,
  #   creator: user2.id,
  #   currentQuestioner: user1.id,
  #   roundWinner: user3.id,
  #   deck_id: baseDeck.id,
  #   gameStatus: 'playing' 
  #  })

  #  game3 = Game.create!({
  #   maxRound: 10,
  #   currentRound: 10,
  #   isEveryoneDeck: true,
  #   currentQuestion: Card.where(isQuestion: true).last.id,
  #   currentAnswer: Card.where(isQuestion: false).first.id,
  #   maxPlayers: 5,
  #   creator: user3.id,
  #   currentQuestioner: user1.id,
  #   roundWinner: user3.id,
  #   deck_id: baseDeck.id,
  #   gameStatus: 'gameover' 
  #  })
  
  #  puts 'Finished creating games table'

  #  puts "Recreating Rounds"

  #  Round.destroy_all
  #  puts "Finished destroying rounds table"
 
  #  puts 'Creating rounds'

  #  Round.create!({
  #    round: Game.where(gameStatus: 'playing').first.currentRound,
  #    question: Game.where(gameStatus: 'playing').first.currentQuestion,
  #    answer: Game.where(gameStatus: 'playing').first.currentAnswer,
  #    winner: Game.where(gameStatus: 'playing').first.roundWinner
  #  })

  # game2.rounds.create!({
  #   round: game2.currentRound,
  #   question: game2.currentQuestion,
  #   answer: game2.currentAnswer,
  #   winner: game2.roundWinner,
  # })

  # game3.rounds.create!({
  #   round: game3.currentRound,
  #   question: game3.currentQuestion,
  #   answer: game3.currentAnswer,
  #   winner: game3.roundWinner,
  # })

  #  puts 'Finished creating rounds table'

  #  puts "Recreating User-game-info"

  #  UserGameInfo.destroy_all
  #  puts "Finished destroying User-game-info table"
 
  #  puts 'Creating User-game-info'

  # #  testArray = Card.where(isQuestion: false).map{|elm| elm.id }
  # #  puts testArray[0]
  # #  puts testArray[1]

  #  game2.user_game_infos.create!({
  #    user_id: user1.id,
  #    roundPoints: 2,
  #    userStatus: 'waiting',
  #    hands: Card.where(isQuestion: false).map{|elm| elm.id },
  #    selectedCard: game2.currentAnswer
  #  })

  #  game3.user_game_infos.create!({
  #   user_id: user2.id,
  #   roundPoints: 4,
  #   userStatus: 'gameover',
  #   hands: Card.where(isQuestion: false).map{|elm| elm.id },
  #   selectedCard: game3.currentAnswer
  # })



  #  puts 'Finished creating User-game-info table'
   
   

# everyone question
# •	____. High five, bro.
# •	Hey Reddit! I’m ____. Ask me anything.
# •	Why am I sticky?
# •	Uh, hey guys, I know this was my idea, but I’m having serious doubts about ____.
# •	What’s that smell?
# •	What’s that sound?
# •	____. Betcha can’t have just one!
# •	I’m going on a cleanse this week. Nothing but kale juice and ____.
# •	War! What is it good for?

# everyone answers
# •	Sperm whales.
# •	Fiery poops.
# •	Getting crushed by a vending machine.
# •	Horse meat.
# •	An endless stream of diarrhoea.
# •	The miracle of childbirth.
# •	The Force.
# •	Fading away into nothingness.
# •	Mutually assured destruction.
# •	Exactly what you’d expect.
# •	My inner demons.
# •	Women’s suffrage.
# •	Extremely tight pants.
# •	Only dating Asian women.
# •	Becoming a blueberry.
# •	Waiting till marriage.
# •	Shutting up so I can watch the game.
# •	Diversity.