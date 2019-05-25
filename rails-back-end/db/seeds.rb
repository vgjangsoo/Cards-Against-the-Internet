# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Recreating Cards ..."

Card.destroy_all
puts "Finished destroying cards table"

puts 'Creating QUESTION cards'
Card.create!({
  isQuestion: true,
  fromInternet: false,
  content: "____. High five, bro."
})

Card.create!({
    isQuestion: true,
    fromInternet: false,
    content: "Hey Reddit! I’m ____. Ask me anything."
  })


  Card.create!({
    isQuestion: true,
    fromInternet: false,
    content: "Why am I sticky?"
  })

  Card.create!({
    isQuestion: true,
    fromInternet: false,
    content: "Uh, hey guys, I know this was my idea, but I’m having serious doubts about ____."
  })

  Card.create!({
    isQuestion: true,
    fromInternet: false,
    content: "hat’s that smell?"
  })

  puts 'Creating Answer cards'

  Card.create!({
    isQuestion: true,
    fromInternet: false,
    content: "hat’s that smell?"
  })

  puts 'Creating ANSWER cards'
  
  Card.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Sperm whales."
  })

    
  Card.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Fiery poops."
  })

  Card.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Getting crushed by a vending machine."
  })

  Card.create!({
    isQuestion: false,
    fromInternet: false,
    content: "Horse meat."
  })

  Card.create!({
    isQuestion: false,
    fromInternet: false,
    content: "An endless stream of diarrhoea."
  })

  puts 'Finshed creating ANSWERS card'

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