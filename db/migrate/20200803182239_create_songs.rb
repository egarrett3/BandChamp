class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :artist_id
      t.integer :album_id
      t.integer :genre_id
      t.string :title

      t.timestamps
    end
    add_index :songs, :artist_id
    add_index :songs, :album_id
    add_index :songs, :genre_id
  end
end
