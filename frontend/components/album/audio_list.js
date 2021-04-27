import React from 'react';
import AudioButton from '../audio/audio_button';
import Title from './title';
import DownloadLink from './download_link';
import DeleteLink from './delete_link';

const SongList = ({sng,played,playTrack,pauseTrack
                  ,btnType,classType,deleteSong,bool,album_id,id,idx}) => {
                    
    return (
      <>
        <span className="audio-list">
          <div className="style-row">
            <AudioButton
              played={played}
              sng={sng}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              btnType={btnType}
              classType={classType}
            />
            <div className="song-list-item">
              <div className="idx-spacer">{`${idx + 1}.`}</div>
              <Title title={song.title} />
            </div>
          </div>
          <div>
            <DownloadLink url={song.song_url} />
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