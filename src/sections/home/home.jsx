import React, { useState } from 'react';
import './home.styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import footerLogo from '../../assets/home/footer-logo.png';

import facebook from '../../assets/home/facebook.png';
import youtube from '../../assets/home/youtube.png';
import aboutImage from '../../assets/home/about.png';
import quoteStart from '../../assets/home/quote-start.png';
import quoteEnd from '../../assets/home/quote-end.png';
import youtubeVideo from '../../assets/home/video.png';

import arrow from '../../assets/home/arrow.png';
import notes from '../../assets/home/notes.png';

import SimpleSlider from '../../components/slider/slider.jsx';
import SelectNav from '../../components/selectNav/selectNav';

import upcomingPoster from '../../assets/home/july_2025.png'
import upcomingPosterSub from '../../assets/home/parkingmap.png'

import VideoBackgroundComponent from '../../components/backgroundVideo/BackgroundVideo.jsx';
import waveSvg from '../../assets/home/wave.svg'; // Import the wave SVG
import styled from 'styled-components';

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background: url(${waveSvg}) no-repeat bottom center;
  background-size: cover;
  z-index: 1;
  transform: rotate(180deg);

  @media (min-width: 1441px) {
    bottom: -15px;
	width: 1440px;
	margin: auto;
	left:0;
	right:0;
  }

  @media (max-width: 1440px) {
    bottom: -15px;
  }

   @media (max-width: 1280px) {
    bottom: -30px;
  }

  @media (max-width: 1024px) {
    bottom: -15px;
  }



  @media (max-width: 768px) {
    bottom: -50px;
  }

  @media (max-width: 435px) {
    bottom: -30px;
  }

    @media (max-width: 385px) {
    bottom: -35px;
  }

  
@media (max-width: 435px) and (min-width: 420px){
    bottom: -75px;
}
`;


const WaveTwo = styled.div`
  position: absolute;
  bottom: -82%;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${waveSvg}) no-repeat bottom center;
  background-size: cover;
  z-index: 1;

  @media (max-width: 1280px) {
    bottom: -82.5%;
  }

  @media (max-width: 1024px) {
    bottom: -82.5%;
  }

  @media (min-width: 822px) and (max-width: 935px) {
   bottom: -79%;
  }

	@media (max-width: 822px){
  bottom: -75%;
  }

  @media (max-width: 768px) {
    bottom: -80%;
  }

  @media (max-width: 675px) {
 bottom: -75% 
  }

  @media (max-width: 435px) {
    bottom: -72.5%;
  }
`;



const Home = () => {
	const [video, videoClicked] = useState('');
	return (
		<div className='body__home'>
			
				<SelectNav />
				<section id='hero'>
				<VideoBackgroundComponent />
				</section>
				<Wave />
			

			<div id="upcoming">
				<h2 class="blue">Upcoming Events</h2>

				
				
				<img src={ upcomingPoster } class="upcoming-poster" />

				<img src={ upcomingPosterSub } class="upcoming-poster upcoming-poster-sub displaynone" />

				
				<h3 class="upcoming-title displaynone">Join us for our annual holiday concert featuring the 130-voice Community Choir of the Valley and instrumentalists performing traditional seasonal favorites for the whole family! Featuring soloist Bob Bergthold and the Choirs of Carden School of Fresno, we’ll be performing in the Clovis Veterans Memorial District Liberty Ballroom in what has become a holiday must-attend concert for Valley residents! We’ll begin at 3pm…Admission is free and the doors open at 2:30!
</h3>

				<div class="upcoming-events--list displaynone">
			
					<div class="event displaynone">
						<h3>Spring Rehearsals begin</h3>
						<h4>Thursday, January 23, 2025</h4>
						<h4>6-8pm @ Clovis Senior Activity Center</h4>
						<h4>735 3rd St., Clovis</h4>
						<h4>Join us by registering<a href='https://choirofthevalley.choirgenius.com/content/membership-application' target='_blank'>…see the link!</a></h4>
					</div>
					<div class="event displaynone">
						<h3>Forever Country: Country Hits with a Choral Twist!</h3>
						<h4>Sunday, April 6th @ 2:30 p.m.</h4>
						<h4>Free Admission</h4>
						<h4>Shaghoian Concert Hall  2770 E. International (Campus of Clovis North HS)</h4>
					</div>
				</div>
			</div>

			<section id='about'>
				<div className='about'>
					<p className='about__subtitle'>a love of singing</p>
					<h2 className='about__title text--title'>	
								<span className='blue'>A love of singing</span>
								<br />
								balanced with a love of community
						</h2>

					<div className='about__content'>
						<div className='about__content--image'>
							<img src={aboutImage} />
						</div>

						<div className='about__content--text'>
					
						
							<p>
							Established in 2014 in Clovis, California, we are a non-auditioned choral group that celebrates the joy of singing and the strength of community. With over 130 members, our choir includes individuals of all experience levels, from seasoned vocalists to those who are new to choral singing. What unites us is our shared passion for music and our dedication to enriching our community through the power of song.
							</p>

							<div className='about-button'>
								<Link to='/contact' className='button'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
				<WaveTwo />
			</section>

			<section id='connect'>
				
				<div className='connect'>
					<p className='connect--subtitle'>Online</p>
					<h2 className='connect--title'>Find Us Online</h2>

					<div className='connect__content'>
						<div
							className='connect__content--video'
							onClick={() =>
								videoClicked(
									<iframe
										width='500'
										height='300'
										src='https://www.youtube.com/embed/HTjpNraoE90?si=ANxG4Wvwvqaoh2bK'
										title='Community Choir of the Valley'
										frameborder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowfullscreen
									></iframe>,
									(document.getElementById('videoImage').style.display = 'none')
								)
							}
						>
							<img id='videoImage' src={youtubeVideo} />
							<div className='videoPlay'>{video}</div>
						</div>

						<div className='connect__content--text'>
							<img className='arrow' src={arrow} />
							<h3>
								Watch our 2023 Spring Concert "Once Upon a Time"
							</h3>
							<div className='connect__social'>
								<a
									href='https://www.facebook.com/Clovis-Community-Choir-691609034259996/'
									target='_blank'
								>
									<img src={facebook} />
								</a>
								<a
									href='https://www.youtube.com/channel/UCNgI81vkZNPOXzSE3wlI3qg/videos'
									target='_blank'
								>
									<img src={youtube} className='connect--yt' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='join'>
				<img src={notes} id='notes' />
				<div className='join'>
					<p className='join--subhead'>Join the Family</p>
					<h3 className='join--head'>Come Join the Family</h3>

					<div className='join__text'>
						<img src={quoteStart} className='quote-start' />
						<p className="desktop-text">
							Join over 130 others who’ve discovered the joy of
							<br />
							singing together!
						</p>
						<p className="mobile-text">
							Join over 130 others who’ve discovered the joy of singing together!
						</p>
						<img className='quote-end' src={quoteEnd} />
					</div>
				</div>
			</section>

			<SimpleSlider />

			<section id='footer'>
				<div className='footer'>
					<div className='footer__content'>
						<img src={footerLogo} />

						<p>choirofthevalley@gmail.com</p>
						<p>559-916-8541</p>

						<div className='footer__social'>
							<a
								href='https://www.facebook.com/Clovis-Community-Choir-691609034259996/'
								target='_blank'
							>
								<img src={facebook} />
							</a>
							<a
								href='https://www.youtube.com/channel/UCNgI81vkZNPOXzSE3wlI3qg/videos'
								target='_blank'
							>
								<img src={youtube} />
							</a>
						</div>

						<a href='#' className='copyright'>
							Carson Cobb &#169; 2024
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
