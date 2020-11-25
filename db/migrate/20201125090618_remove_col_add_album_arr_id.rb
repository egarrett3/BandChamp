class RemoveColAddAlbumArrId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :album_id
    add_column :users, :album_id, :integer, array:true
  end
end
