import { connect } from 'react-redux';
import { fetchSgs, openSong, closeSong, clearSongs } from '../../actions/song_actions';
import { fetchAls } from '../../actions/album_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({ui,session,entities:{songs,users,album,song}}) => {
    return {
      currentUser: users[session.id],
      songs: Object.values(songs),
      song: song.song_url,
      album: Object.values(album),
      photo_url: ui.switch,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
        fetchAlbums: () => dispatch(fetchAls()),
        openSong: (song) => dispatch(openSong(song)),
        closeSong: () => dispatch(closeSong()),
        clearSongs: () => dispatch(clearSongs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)