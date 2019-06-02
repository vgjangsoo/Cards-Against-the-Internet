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


qcard1 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. High five, bro."
})

qcard2 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Hey Reddit! I’m ____. Ask me anything."
})

qcard3 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Why am I sticky?"
})

qcard4 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Uh, hey guys, I know this was my idea, but I’m having serious doubts about ____."
})

qcard5 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What’s that smell?"
})

qcard6 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What’s that sound?"
})

qcard7 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. Betcha can’t have just one!"
})

qcard8 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "I’m going on a cleanse this week. Nothing but kale juice and ____"
})

qcard9 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "War! What is it good for?"
})

qcard10 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What would grandma find disturbing, yet oddly charming?"
})

qcard11 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Instead of coal, Santa now give the bad children ____."
})

qcard12 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "DO NOT go here! Found ____ in my Kung Pao chicken!"
})

qcard13 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What ended my last relationship?"
})

qcard14 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What’s my secret power?"
})

qcard15 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "I’m no doctor, but I’m pretty sure what you’re suffering from is called ____."
})

qcard16 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "The class field trip was completely ruined by ____."
})

qcard17 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Today on Maury: Help! My son is ____!"
})

qcard18 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Today on Maury: Help! My son is ____!"
})

qcard19 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Dude, do not go in that washroom. There’s ____ in there."
})

qcard20 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "It’s a pity that kids these days are all getting involved with ____."
})

qcard21 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What makes life worth living?"
})

qcard22 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Just saw this upsetting video! Please retweet! #stop ____."
})

qcard23 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What are my parents hiding from me?"
})

qcard24 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "I got 99 problems but ____ ain’t one."
})

qcard25 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Brought to you by Molson Canadian, the Official Beer of ____."
})

qcard26 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Next from J.K. Rowling: Harry Potter and the Chamber of ____."
})

qcard27 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Penalty! ____: that’s 5 minutes in the box!"
})

qcard28 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "I’m Lebron James, and when I’m not slamming dunks, I love ____."
})

qcard29 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Bravo’s new reality show features eight washed-up celebrities living with ____."
})

qcard30 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. That was so metal."
})

qcard31 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Let me tell you a secret, I love ____."
})

qcard32 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Alternative medicine is now embracing the curative powers of ____."
})

qcard33 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "When Pharaoh remained unmoved, Moses called down a Plague of ____."
})

qcard34 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Introducing X-treme Baseball! It’s like baseball, but with ____!"
})

qcard35 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Dear Abby, I’m having some trouble with ____ and would like your advice."
})

qcard36 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "After four platinum albums and three Grammys, it’s time to get back to my roots, to what inspired me to make music in the first place: ____."
})

qcard37 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "The new Chevy Tahoe. With the power and space to take ____ everywhere you go."
})

qcard38 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Coming to Broadway this season, ____: the Musical."
})

qcard39 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "This is the way the world ends. This is the way the world ends. Not with a bang but with ____."
})

qcard40 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. It’s a trap!"
})

qcard41 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Just once, I’d like to hear you say “Thanks, Mom. Thanks for ____."
})

qcard42 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Next on TSN: The World Series of ____."
})

qcard43 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Old MacDonald had ____. E-I-E-I-O."
})

qcard44 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Check me out, yo! I call this dance move '____.'"
})

qcard45 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Maybe she’s born with it. Maybe it’s ____."
})

qcard46 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "50% of all marriages end in ____."
})

qcard47 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Well if you’ll excuse me, gentlemen, I have a date with ____."
})

qcard48 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "As the mom of five rambunctious boys, I’m no stranger to ____."
})

qcard49 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "If you can’t be with the one you love, love ____."
})

qcard50 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "What give me uncontrollable gas?"
})

qcard51 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "Why can’t I sleep at night?"
})

qcard52 = baseDeck.cards.create!({
  isQuestion: true,
  fromInternet: false,
  content: "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on ____."
})

puts 'Creating Answer cards'


acard1 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Sperm whales."
})

acard2 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Fiery poops."
})


acard3 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Getting crushed by a vending machine."
})


acard4 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Horse meat."
})

acard5 = baseDeck.cards.create!({
    isQuestion: false,
    fromInternet: false,
    content: "An endless stream of diarrhea."
})

acard6 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The miracle of childbirth."
})

acard7 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The Force."
})

acard8 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Fading away into nothingness."
})

acard9 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Mutually assured destruction."
})

acard10 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Exactly what you’d expect."
})

acard11 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "My inner demons."
})

acard12 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Extremely tight pants."
})

acard13 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Becoming a blueberry."
})

acard14 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Waiting till marriage."
})

acard15 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Happy."
})

acard16 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Sad."
})

acard17 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Shutting up so I can watch the game."
})

acard18 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Diversity."
})

acard19 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Bees?"
})

acard20 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Ghosts"
})

acard21 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Vigorous jazz hands."
})

acard22 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Rap music."
})

acard23 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Justin Bieber."
})

acard24 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Drake."
})

acard25 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Kim Kardashian."
})

acard26 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Darth Vader."
})

acard27 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A horde of Vikings."
})

acard28 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "BATMAN!"
})

acard29 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A tiny horse."
})

acard30 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A tiny horse."
})

acard31 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "An enormous horse."
})

acard32 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Jungle Brothers."
})

acard33 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Barack Obama."
})

acard34 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Her Majesty, Queen Elizabeth II."
})

acard35 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Vladimir Putin."
})

acard36 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Justin Trudeau."
})

acard37 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Some of the best rappers in the game."
})

acard38 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Unfathomable stupidity."
})

acard39 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "All-you-can-eat shrimp for $8.99."
})

acard40 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Raptor attacks."
})

acard41 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Bart Simpson."
})

acard42 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Alcoholism."
})

acard43 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Licking spray paint."
})

acard44 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "My soul."
})

acard45 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Smallpox blankets."
})

acard46 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Explosions."
})

acard47 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A disappointing birthday party."
})

acard48 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A disappointing birthday party."
})

acard49 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A person in yogurt commercials."
})

acard50 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Pooping back and forth. Forever."
})

acard51 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Farting and walking away."
})

acard52 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Throwing grapes at a man until he touch with reality."
})

acard53 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Shaking a baby until it stops crying."
})

acard54 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Fellowship in Christ."
})

acard55 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The true meaning of Christmas."
})

acard56 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Child beauty pageants."
})

acard57 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Emerging from the sea and rampaging through Tokyo."
})

acard58 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Wizard music."
})

acard59 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Pooping in a laptop and closing it."
})

acard60 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Me time."
})

acard61 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Some punk kid who stole my turkey sandwich."
})

acard62 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Heartwarming orphans."
})

acard63 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Poopy diapers."
})

acard64 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Establishing dominance."
})

acard65 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The Bachelorette season finale."
})

acard66 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Dying."
})

acard67 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Emma Watson."
})

acard68 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Finger painting."
})

acard69 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Living in Yellowknife."
})

acard70 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Cuddling."
})

acard71 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A hungry, farting gorilla."
})

acard72 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Chainsaw for hands."
})

acard73 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A lazy, fat baboon."
})

acard74 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The arrival of the pizza."
})

acard75 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The Mafia."
})

acard76 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Grandma."
})

acard77 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Grandpa."
})

acard78 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "PTSD."
})

acard79 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "A lifetime of sadness."
})

acard80 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Puppies!"
})

acard81 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "Cats!"
})

acard82 = baseDeck.cards.create!({
  isQuestion: false,
  fromInternet: false,
  content: "The Royal Canadian Mounted Police."
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


  puts "Recreating Lobby"

  Lobby.destroy_all
  puts "Finished destroying lobbiess table"
  
  puts 'Creating lobby'
  
  lobby = Lobby.new({
    game_id: nil, 
    roomStatus: nil,
    maxPlayer: nil,
    currentPlayers: nil, 
    theme: 'soon to be Game of Thrones' 
  })  

  lobby.save!

  # lobby2 = Lobby.new({
  #   game_id: '1', 
  #   roomStatus: 'Waiting',
  #   maxPlayer: 5,
  #   currentPlayers: 1, 
  #   theme: 'Testing room1' 
  # })  


  # lobby2.save!



  
  puts "Finished creating lobbies table"


  # need to change games below
  puts "Recreating Games"

  Game.destroy_all
  puts "Finished destroying games table"

  puts 'Creating games'

  game1 = lobby.games.create!({
    theme: 'Game of Thrones', 
    maxRound: 5,
    maxPlayers: 5,
    gameState: {
      maxRound: 5,
      creator: user1.id,
      deck_id: baseDeck.id,
      isEveryoneDeck: true,
      gameInfo: {
          status: 'Waiting for players to join game...',
          currentPlayers: 2,
          currentRound: 0,
          currentQuestioner: user1.id,
          selectedQuestion: nil,
          selectedAnswer: nil,
          roundWinner: nil
      },
      playersInfo: {
          users: [
            {
              id: user1.id,
              roundPoints: 0,
              status: 'waiting',
              questionCards: [qcard1.content, qcard2.content, qcard3.content],
              answerCards: [acard1.content, acard2.content, acard3.content, acard4.content, acard5.content],
              selectedCard: nil
            },
            {
              id: user2.id,
              roundPoints: 0,
              status: 'ready',
              questionCards: nil,
              answerCards: [acard11.content, acard12.content, acard13.content, acard14.content, acard15.content],
              selectedCard: nil
            }
          ]          
      }
    }  
  })

puts 'Finished creating Games table'

puts 'updating lobby table'
 
lobby.game_id = game1.id
lobby.roomStatus = 'Waiting'
lobby.maxPlayer = 5
lobby.currentPlayers = 2
lobby.theme = game1.theme
lobby.save!

puts 'Finished updating lobby table after game is created'


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