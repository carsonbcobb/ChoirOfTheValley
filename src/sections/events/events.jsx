import React from 'react';
import './events.styles.scss';
import Nav from '../../components/nav/nav.jsx';
import Footer from '../../components/Footer/Footer';
import EventSlider from '../../components/slider/event-slider/event-slider';

import youtubeImage from '../../assets/events/youtube.png';
import subhead from '../../assets/events/subhead.png';
import SelectNav from '../../components/selectNav/selectNav';

const Events = () => (
	<div className='events'>
		<div className='events--headerbg'>
			<SelectNav />

			<div className='events-header'>
				<div className='events-header__text'>
					<h1>
						Keep up with our<br />Performances<br />
						 on Youtube!
					</h1>
					<div className='events_button'>
						<a
							href='https://www.youtube.com/channel/UCNgI81vkZNPOXzSE3wlI3qg/videos'
							target='_blank'
						>
							Watch Now
						</a>
					</div>
				</div>

				<div className='events-header__image'>
					<img src={youtubeImage} />
				</div>
			</div>
		</div>

		<div className='events__subhead'>
			<h2>
				<span>Take a stroll through memory lane...</span>
				<br />
				OUR PAST PERFORMANCES
			</h2>
			<img src={subhead} />
		</div>

		<EventSlider />

		<Footer />
	</div>
);

export default Events;
