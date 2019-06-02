class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :isAdult
      t.boolean :isBot
      t.integer :leaderboardPoints

      t.timestamps
    end
  end
end
