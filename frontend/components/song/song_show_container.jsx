import { connect } from 'react-redux';
import { fetchSgs, openImg, closeImg, clearSongs } from '../../actions/song_actions';
import { fetchAls } from '../../actions/album_actions';
import SongShow from './song_show_form';

const mapStateToProps = ({ui,session,entities:{songs,users,albums,song}}) => {
    return {
      currentUser: users[session.id],
      songs: Object.values(songs),
      song: song.song_url,
      albums: Object.values(albums),
      photo_url: ui.switch,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
        fetchAlbums: () => dispatch(fetchAls()),
        openImg: (song) => dispatch(openImg(song)),
        closeImg: () => dispatch(closeImg()),
        clearSongs: () => dispatch(clearSongs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)