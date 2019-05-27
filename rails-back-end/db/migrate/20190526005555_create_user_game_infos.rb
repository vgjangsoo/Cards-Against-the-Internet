class CreateUserGameInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_game_infos do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :roundPoints
      t.string :userStatus
      t.text :hands, array: true, default: []
      t.integer :selectedCard

      t.timestamps
    end
  end
end
