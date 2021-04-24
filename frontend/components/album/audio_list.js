import React from 'react';
import AudioButton from '../audio/audio_button';
import Title from './title';
import DownloadLink from './download_link';
import DeleteLink from './delete_link';

const SongList = ({url,btn,loading,loadTrack,playTrack,pauseTrack,duration
                  ,currentTime,btnType,classType,title,deleteSong,bool,album_id
                  ,id}) => {

    return (
      <>
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
        <Title title={title} />
        <DownloadLink url={url} />
        <DeleteLink
            deleteSong={
               bool ? deleteSong : bool
            }
            album_id={album_id}
            song_id={id}
        />
        
      </>
    );
}

export default SongList;