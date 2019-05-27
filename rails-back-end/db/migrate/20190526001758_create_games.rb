class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :maxRound
      t.integer :currentRound
      t.boolean :isEveryoneDeck
      t.integer :currentQuestion
      t.integer :currentAnswer
      t.integer :maxPlayers
      t.integer :creator
      t.integer :currentQuestioner
      t.integer :roundWinner
      t.integer :deck_id
      t.string :gameStatus

      t.timestamps
    end
  end
end
