class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :likes
      t.string :comment
      t.date :post_date

      t.timestamps
    end
  end
end
