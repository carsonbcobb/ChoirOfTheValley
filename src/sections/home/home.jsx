import React, { useState } from 'react';
import './home.styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import footerLogo from '../../assets/home/footer-logo.png';

import hero from '../../assets/home/hero.png';
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

import upcomingPoster from '../../assets/home/banner11.png'
import upcomingPosterSub from '../../assets/home/parkingmap.png'


const Home = () => {
	const [video, videoClicked] = useState('');
	return (
		<div className='body__home'>
			<div className='top-bg'>
				<SelectNav />
				<section id='hero'>
					<div class='hero'>
						<div class='hero__text'>
							<h1 class='hero__text--title'>
								Community Choir <br /> <span class='darkblue'> of the Valley</span>
							</h1>
							<div className='hero__image--mobile'>
								<img src={hero} />
							</div>
							<p className='hero__text--body'>
								The Community Choir of the Valley is here to provide an opportunity for
								singers of all experience levels an encouraging and welcoming
								environment in which to sing a variety of quality choral
								music. We also strive to present enriching and inspiring concerts
								for all ages in the great Clovis / Fresno community
							</p>

							<div className='hero-button'>
								<a className='button' href='https://choirofthevalley.choirgenius.com/content/membership-application'
							target='_blank'>
									Sign Up
								</a>
							</div>
						</div>

						<div className='hero__image'>
							<img src={hero} />
						</div>
					</div>
				</section>
			</div>

			<div id="upcoming">
				<h2 class="blue">Upcoming Events</h2>

				
				
				<img src={ upcomingPoster } class="upcoming-poster" />

				<img src={ upcomingPosterSub } class="upcoming-poster upcoming-poster-sub" />

				
				<h3 class="upcoming-title">Join us for our annual holiday concert featuring the 130-voice Community Choir of the Valley and instrumentalists performing traditional seasonal favorites for the whole family! Featuring soloist Bob Bergthold and the Choirs of Carden School of Fresno, we’ll be performing in the Clovis Veterans Memorial District Liberty Ballroom in what has become a holiday must-attend concert for Valley residents! We’ll begin at 3pm…Admission is free and the doors open at 2:30!
</h3>

				<div class="upcoming-events--list">
			
					<div class="event">
						<h3>April 14th, 2:30pm</h3>
						<h4>Spring Concert! The Greatest Shows on Earth: Songs of Broadway, Television and Silver Screen</h4>
						<h4>Historic Warnors Theater 1400 Fulton St<br/>Downtown Fresno</h4>
					</div>
					<div class="event">
						<h3>June 28th</h3>
						<h4>Annual Patriotic Concert!</h4>
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
								A membership of 130 plus voices, diverse experience levels and
								one love for music and the community. Community Choir of the Valley, is
								a non-auditioned choral group established in 2014 in Clovis
								California. Our singers range from those who are highly skilled
								to those who have never sung in a choir before, but we all have
								these things in common:
							</p>

							<div className='about-button'>
								<Link to='/contact' className='button'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='connect'>
				<div className='connect'>
					<p className='connect--subtitle'>Connect</p>
					<h2 className='connect--title'>Connect With Us</h2>

					<div className='connect__content'>
						<div
							className='connect__content--video'
							onClick={() =>
								videoClicked(
									<iframe
										width='560'
										height='415'
										src='https://www.youtube.com/embed/Cf_dXxRe7E0?autoplay=1'
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
								Watch our Virtual Choir
								<br />
								Performance from 2020!
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
							Carson Cobb &#169; 2021
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
