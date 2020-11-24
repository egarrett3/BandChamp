class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :album_id, :integer
  end
end
