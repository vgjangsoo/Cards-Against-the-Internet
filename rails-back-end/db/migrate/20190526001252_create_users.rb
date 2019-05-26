class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.boolean :isAdult
      t.boolean :isBot
      t.integer :leaderboardPoints

      t.timestamps
    end
  end
end
