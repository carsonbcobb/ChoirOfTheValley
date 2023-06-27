import React from 'react';
import './about.styles.scss';
import Footer from '../../components/Footer/Footer';

import headerLeft from '../../assets/contact/header-left.png';
import headerRight from '../../assets/contact/header-right.png';
import subhead from '../../assets/events/subhead.png';
import underTitle from '../../assets/contact/under-title.png';
import aboutPicture from '../../assets/about/about-section.png';
import SelectNav from '../../components/selectNav/selectNav';

const About = () => {
	return (
		<div id='about-section'>
			<div className='about-section'>
				<div className='about-section__bg'>
					<SelectNav />

					<div className='about-section__header'>
						<img src={headerLeft} />
						<h1>About Us</h1>
						<img src={headerRight} />
					</div>
				</div>

			

				<div className='about-section__content'>
					<div className='about-section__content__image'>
						<img src={aboutPicture} />
					</div>

					<div className='about-section__content__text'>
						<h2>
							A love of singing balanced with
							<br />a love of community
						</h2>
						<img src={underTitle} />
						<p>
							A membership of 90 plus voices, diverse experience levels and one
							love for music and the community. Clovis Community Choir, is a
							non-auditioned choral group established in 2014 in Clovis
							California. Our singers range from those who are highly skilled to
							those who have never sung in a choir before, but we all have these
							things in common:
						</p>
						<p>
							*A passion for singing choral music of all styles: Inspirational
							ballads and heartwarming favorites. Quality arrangements of pop
							music and show tunes. Patriotic and Americana to classical pieces
							by the best composers. Acapella selection or accompanied by
							varieties of instruments!
						</p>
						<p>
							*Enjoy the weekly aspect of all that takes place in a fast paced
							and fun, yet challenging rehearsal with other singers from the
							community. Each member of varying age and experience. Learn from
							each other and grow together, musically and socially. A “high
							note” of the week!
						</p>
						<p>
							*Desire the thrill of presenting top-notch concerts that bring
							joy, inspiration and pride to our community in ways that only
							choral music, presented with dedication and excellence, can do!
						</p>
						<p>
							The choir rehearses weekly during its season and is broken into 3
							segments. Late August through December, February through April,
							and May through June. We perform 4 major
							concerts, and various other performances around the community…and,
							our concerts are free to the public!
						</p>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default About;
