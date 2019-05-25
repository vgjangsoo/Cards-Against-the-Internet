class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.boolean :isQuestion
      t.string :content
      t.boolean :fromInternet
      t.references :deck, foreign_key: true

      t.timestamps
    end
  end
end
