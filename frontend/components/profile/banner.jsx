import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/picture_actions";
import { closeModal } from "../../actions/modal_actions";
import AddBanner from "./addbanner";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    id: session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    placePic: (user, user_id) => dispatch(updateUser(user, user_id)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBanner);
