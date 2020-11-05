import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { getUser } from '../../actions/picture_actions';
import { changeUser } from '../../actions/user_actions';
import UserProf from './user_profile_form';

const mapStateToProps = ({ session, entities: { users } }) => {
    return { 
        currentUser: users[session.id],
        id: session.id,
        photo: users[session.id].photo_url,
    };
}

const mapDispatchToProps = dispatch => { 
    return { 
        openModal: (modal) => dispatch(openModal(modal)),
        getUser: (id) => dispatch(getUser(id)),
        changeUser: (user,id) => dispatch(changeUser(user,id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProf)