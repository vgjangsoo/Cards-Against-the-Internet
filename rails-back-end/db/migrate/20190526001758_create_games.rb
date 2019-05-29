class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :theme
      t.string :roomStatus # Waiting, playing, full, gameover
      t.json 'gameState'

      t.timestamps
    end
  end
end

# Old data types (should be in gameState now)      
# t.integer :maxRound
# t.integer :currentRound
# t.boolean :isEveryoneDeck
# t.integer :currentQuestion
# t.integer :currentAnswer
# t.integer :maxPlayers
# t.integer :creator
# t.integer :currentQuestioner
# t.integer :roundWinner
# t.integer :deck_id
# t.string :gameStatus

# From user_game_infos table
# t.integer :user_id
# t.integer :game_id
# t.integer :roundPoints
# t.string :userStatus
# t.text :hands, array: true, default: []
# t.integer :selectedCard

