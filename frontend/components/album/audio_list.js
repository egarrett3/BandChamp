import React from 'react';
import AudioButton from '../audio/audio_button';
import Title from './title';
import DownloadLink from './download_link';
import DeleteLink from './delete_link';

const SongList = ({sng,song,playTrack,pauseTrack
                  ,btnType,classType,deleteSong,bool,album_id,id,idx,toggle}) => {
                    
    return (
      <>
        <span className="audio-list">
          <div className="style-row">
            <AudioButton
              sng={sng}
              idx={idx}
              toggle={toggle}
              song={song}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              btnType={btnType}
              classType={classType}
            />
            <div className="song-list-item">
              <div className="idx-spacer">{`${idx + 1}.`}</div>
              <Title title={sng.title} />
            </div>
          </div>
          <div>
            <DownloadLink url={sng.song_url} />
            <DeleteLink
              deleteSong={bool ? deleteSong : bool}
              album_id={album_id}
              song_id={id}
            />
          </div>
        </span>
      </>
    );
}

export default SongList;