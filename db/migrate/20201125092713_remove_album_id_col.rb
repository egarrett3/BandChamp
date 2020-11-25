class RemoveAlbumIdCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :album_id
  end
end
