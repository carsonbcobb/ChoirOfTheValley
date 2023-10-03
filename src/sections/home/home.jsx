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

import sacredSongs from '../../assets/home/sacredSongs.jpeg'

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
								<a className='button' href='https://forms.gle/bHt2mGi4SsxVcwdQ9'
							target='_blank'>
									Stay Updated
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

				<h3>Please join us our our annual Sacred Songs concert! Selections include inspirational hymn arrangements, a piece from Ola Gielo’s Sunrise Mass, Ahavat Olam (made famous by The Platt Brothers) and other songs of encouragement and inspiration. Performed in the beautiful, and acoustically breathtaking Holy Spirit Catholic Church, all seats are free and the doors will open at 2:30. You won’t want to miss it!</h3>
				
				<img src={sacredSongs} style="max-width: 400px;" />

				<div class="upcoming-events--list">
					<div class="event">
						<h3>Thursday, August 24th</h3>
						<h4>Rehearsals begin: 6-8pm</h4>
						<h4>Northpark Community Church<br/>
2297 E Shepherd Ave <br/>(between Maple & Chestnut) </h4>
					</div>
					<div class="event">
						<h3>Sunday, October 22</h3>
						<h4>Sacred Songs Concert @ 3pm</h4>
						<h4>Holy Spirit Catholic Church <br/>(Friant & Champlain)</h4>
					</div>
					<div class="event">
						<h3>Sunday, December 17</h3>
						<h4>Songs of the Season Concert</h4>
						<h4>Clovis Veterans Memorial District <br/>(808 4th St, Clovis)</h4>
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
								A membership of 90 plus voices, diverse experience levels and
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
								Performance!
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
							Join over 90 others who’ve discovered the joy of
							<br />
							singing together!
						</p>
						<p className="mobile-text">
							Join over 90 others who’ve discovered the joy of singing together!
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

						<p>info@choirofthevalley.com</p>
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
