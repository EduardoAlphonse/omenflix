import React from 'react';
import { VideoCardContainer, VideoLabel, VideoLabelContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      title={videoTitle}
    >
      <VideoLabelContainer categoryColor={categoryColor}>
        <VideoLabel>
          {/* {videoTitle.length > 30 ? `${videoTitle.slice(0, 27)}...` : videoTitle} */}
          {videoTitle}
        </VideoLabel>
      </VideoLabelContainer>
    </VideoCardContainer>
  );
}

export default VideoCard;
