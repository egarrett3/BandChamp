class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null:false
      t.integer :artist_id
      t.integer :song_id, array:true
      t.integer :genre_id

      t.timestamps
    end
    add_index :albums,:genre_id
    add_index :albums,:artist_id
    add_index :albums,:song_id
  end
end
