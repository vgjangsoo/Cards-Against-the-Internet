class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :theme
      t.json 'gameState'
      t.integer :lobby_id

      t.timestamps
    end
  end
end


