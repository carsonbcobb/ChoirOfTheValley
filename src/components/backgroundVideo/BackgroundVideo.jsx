import React from 'react';
import styled from 'styled-components';
import bgVideoMp4 from '../../assets/videos/bg-video.mp4';
import bgVideoWebm from '../../assets/videos/bg-video.webm';
import StripeBuyButton from '../../components/donate/donate.jsx';

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  max-height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 1; 
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; 
  text-align: center;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  margin-bottom: auto;
`;

const VideoBackgroundComponent = () => (
  <HeroSection>
    <VideoBackground autoPlay muted loop>
      <source src={bgVideoMp4} type="video/mp4" />
      <source src={bgVideoWebm} type="video/webm" />
      Your browser does not support the video tag.
    </VideoBackground>
    <HeroContent>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text--title">
            Community Choir <br /> <span className="darkblue">of the Valley</span>
          </h1>
          <p className="hero__text--body">
            The Community Choir of the Valley is here to provide an opportunity for
            singers of all experience levels an encouraging and welcoming
            environment in which to sing a variety of quality choral
            music. We also strive to present enriching and inspiring concerts
            for all ages in the great Clovis / Fresno community.
          </p>
          <div className="hero-container-buttons">
            <StripeBuyButton
              buttonId="buy_btn_1OC2g4LG4c3xViTKKIBGttb9"
              publishableKey="pk_live_51NuNHxLG4c3xViTKB0JJ69ih5GODrfYiX4yqtIKnFYlT8ZBTCLrRQYsgRWz1u4ModqV2ippvhRSK8xL0jRSnE6nO00QoeCINUc"
            />
            <div className="hero-button">
              <a
                className="button"
                href="https://choirofthevalley.choirgenius.com/content/membership-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroContent>
  </HeroSection>
);

export default VideoBackgroundComponent;
