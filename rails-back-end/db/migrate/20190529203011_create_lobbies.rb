class CreateLobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :lobbies do |t|
      t.integer :game_id
      t.string :roomStatus
      t.integer :maxPlayer
      t.integer :currentPlayers
      t.string :theme

      t.timestamps
    end
  end
end
