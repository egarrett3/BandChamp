import React from 'react';
import AudioButton from '../audio/audio_button';
import Title from './title';
import DownloadLink from './download_link';
import DeleteLink from './delete_link';

const SongList = ({url,btn,loading,loadTrack,playTrack,pauseTrack,duration
                  ,currentTime,btnType,classType,title,deleteSong,bool,album_id
                  ,id,idx}) => {

    return (
      <>
        <span className="audio-list">
          <div className="style-row">
            <AudioButton
              url={url}
              loading={loading}
              btn={btn}
              loadTrack={loadTrack}
              playTrack={playTrack}
              pauseTrack={pauseTrack}
              duration={duration}
              currentTime={currentTime}
              btnType={btnType}
              classType={classType}
            />
            <div className='song-list-item'>
              <div className='idx-spacer'>{`${idx + 1}.`}</div>
              <Title title={title} />
              <span id="durTimeText" className='dur-spacer'>{duration}</span>
            </div>
          </div>
          <div>
            <DownloadLink url={url} />
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