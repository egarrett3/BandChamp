import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchUsr } from '../../actions/user_actions';
import { changeUser } from '../../actions/user_actions';
import { fetchAl,clearAlbums, deleteAl } from "../../actions/album_actions";
import UserProf from './user_profile_form';

const mapStateToProps = ({ session, entities: { users, album } }) => {
    return { 
        currentUser: users[session.id],
        album: Object.values(album),
        loggedIn: Boolean(session.id),
        photo: users[session.id].photo_url,
    };
}

const mapDispatchToProps = dispatch => { 
    return { 
        clearAlbums: () => dispatch(clearAlbums()),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchUser: (id) => dispatch(fetchUsr(id)),
        fetchAlbum: (albumId) => dispatch(fetchAl(albumId)),
        changeUser: (user,id) => dispatch(changeUser(user,id)),
        deleteAlbum: (albumId) => dispatch(deleteAl(albumId)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProf)