import React from 'react';
import '../about/about.styles.scss';
import Footer from '../../components/Footer/Footer';

import headerLeft from '../../assets/contact/header-left.png';
import headerRight from '../../assets/contact/header-right.png';
import subhead from '../../assets/events/subhead.png';
import underTitle from '../../assets/contact/under-title.png';
import accompanistPicture from '../../assets/accompanist/accompanist.png';
import SelectNav from '../../components/selectNav/selectNav';

const Accompanist = () => {
	return (
		<div id='about-section'>
			<div className='about-section'>
				<div className='about-section__bg'>
					<SelectNav />
					<div className='about-section__header'>
						<img src={headerLeft} />
						<h1>Our Accompanist</h1>
						<img src={headerRight} />
					</div>
				</div>

				

				<div className='about-section__content'>
					<div className='about-section__content__image'>
						<img src={accompanistPicture} />
					</div>

					<div className='about-section__content__text'>
						<h2>Randy Berger</h2>
						<img src={underTitle} />
						<p>
							Randy Berger is pleased to be the piano accompanist for the Clovis
							Community Choir since its inception. Along with the opportunity to
							work with Director Ed Cobb, Randy really enjoys playing for such a
							large group and adding the right musical nuances to each song that
							is rehearsed and performed.
						</p>
						<p>
							Since retiring as Choral Director in 2018 from Bullard TALENT, a
							K-8 performing arts magnet school in Fresno Unified, Randy has
							been keeping busy by accompanying for other choral groups and
							soloists. He is currently the Lead Musician at Sierra View
							Presbyterian Church in Fresno. Being a multi-instrumentalist, he
							also freelances in recording projects for others and himself, as
							well as providing sound for live events.
						</p>
						<p>
							He and his wife, Sherrill, have 2 sons, Lee and Joel, and 3
							grandchildren, as well as 3 amazing cats and a dog!
						</p>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Accompanist;
