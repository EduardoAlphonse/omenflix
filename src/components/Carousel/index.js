/* eslint-disable react/prop-types */
import React from 'react';
import {
  VideoCardGroupContainer, ExtraLink, TitleContainer, TitleStyle, TitleLabel,
} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const {
    name, color, link_extra: { text, url }, videos,
  } = category;
  return (
    <VideoCardGroupContainer>
      {name && (
        <>
          <TitleContainer>
            <TitleLabel>{name.toUpperCase()}</TitleLabel>
            <TitleStyle bgColor={color || 'red'} />
          </TitleContainer>
          {url
            && (
              <ExtraLink href={url} target="_blank">
                {text}
              </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            // eslint-disable-next-line react/no-array-index-key
            <SliderItem key={`${video.title}${index}`}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={color}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
