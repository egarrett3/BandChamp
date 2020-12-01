import React from "react";
import { deleteSg, clearSongs, openSong, fetchSgs } from "../../actions/song_actions";
import { connect } from "react-redux";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DownloadLink extends React.Component {
    constructor(props) {
        super(props); debugger
        this.state = {
            currentTime: 0,
            duration: 0,
            user: false,
        };
    }

    render() {
        const title = this.props.title;
        const url = this.props.url;

        return (
            <>
                <li className='song-links'>
                    <div>{title}</div>
                    <div className='song-actions'>
                        <a href={url} target="_blank" rel="noopener noreferrer" className='link-link' download>
                            <FontAwesomeIcon icon={faDownload} />
                        </a>
                        <div
                        className='delete-link-icon'
                        onClick={() => this.props.deleteSong(this.props.album_id,this.props.id)
                                .then(() => this.props.fetchSongs(this.props.album_id))
                        }
                        >X</div>
                    </div>
                </li>
                    
            </>
        );
    }
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSongs: () => dispatch(clearSongs()),
    openSong: (song) => dispatch(openSong(song)),
    deleteSong: (albumId, songId) => dispatch(deleteSg(albumId, songId)),
    fetchSongs: (albumId) => dispatch(fetchSgs(albumId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DownloadLink);
