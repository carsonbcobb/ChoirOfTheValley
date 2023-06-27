import React from 'react';
import '../about/about.styles.scss';
import Nav from '../../components/nav/nav.jsx';
import Footer from '../../components/Footer/Footer';

import headerLeft from '../../assets/contact/header-left.png';
import headerRight from '../../assets/contact/header-right.png';
import subhead from '../../assets/events/subhead.png';
import underTitle from '../../assets/contact/under-title.png';
import historyPicture from '../../assets/history/history.png';
import SelectNav from '../../components/selectNav/selectNav';

const History = () => {
	return (
		<div id='about-section'>
			<div className='about-section'>
				<div className='about-section__bg'>
					<SelectNav />
					<div className='about-section__header'>
						<img src={headerLeft} />
						<h1>Our History</h1>
						<img src={headerRight} />
					</div>
				</div>

			

				<div className='about-section__content'>
					<div className='about-section__content__image'>
						<img src={historyPicture} />
					</div>

					<div className='about-section__content__text'>
						<h2 style={{fontSize: 2 + 'rem'}}>
							“America, I Still Can Hear Your Song” was the first song
							performed!
						</h2>
						<img src={underTitle} />
						<p>
							Ed Cobb, a passionate choral conductor, independently started a new choir, driven by his love for singing and a desire to create something extraordinary. He gathered like-minded individuals, nurtured their voices, and formed a harmonious collective that captivated audiences with soul-stirring performances. His decision showcased his unwavering passion for music and belief in its transformative power, fostering a vibrant musical community.





						</p>
						<p>
							Knowing that there is always an interest in patriotic music, it
							was decided to put together a group, and schedule a concert to
							celebrate Independence Day. Fifty people showed up, and the rest
							is history! The first concert was held in the Clovis Veteran’s
							Memorial Building Auditorium…to a standing room only crowd!
						</p>
						<p>
							Since then, the Choir has grown, numerically-- with over 90 voices
							and musically. The desire has always been to present a varied
							program of music for our audiences. Our concerts range from the
							annual Patriotic Concert, to seasonal concerts, and pop-like
							concerts featuring great Broadway and Movie tunes. One of the
							favorite traditions has been an annual concert of sacred music.
							Each fall, the Choir, accompanied by a variety of brass, woodwind,
							strings and percussion presents some of the best in sacred choir
							literature. Classics, contemporary, gospel and spirituals!
						</p>

						<p>
							In addition to our annual 4 concert series put on throughout the
							year, we also perform in various ways around the community. The
							choir has presented the National Anthem for the Fresno Grizzlies
							Triple-A baseball team, as well as the internationally known
							Harlem Globetrotters, in the Save Mart Center. In addition, the
							Choir has taken pleasure in performing in conjunction with the
							Fresno Rescue Mission, and Save the Children, in Fresno; and has
							collaborated with other groups such as the Bach Children’s Choir,
							the Clovis Community Band, and several well-known vocal and
							instrumental soloists.
						</p>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default History;
