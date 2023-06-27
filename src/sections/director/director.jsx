import React from 'react';
import '../about/about.styles.scss';
import Footer from '../../components/Footer/Footer';

import headerLeft from '../../assets/contact/header-left.png';
import headerRight from '../../assets/contact/header-right.png';
import subhead from '../../assets/events/subhead.png';
import underTitle from '../../assets/contact/under-title.png';
import directorPicture from '../../assets/director/director.png';
import SelectNav from '../../components/selectNav/selectNav';

const Director = () => {
	return (
		<div id='about-section'>
			<div className='about-section'>
				<div className='about-section__bg'>
					<SelectNav />
					<div className='about-section__header'>
						<img src={headerLeft} />
						<h1>Our Director</h1>
						<img src={headerRight} />
					</div>
				</div>

				

				<div className='about-section__content'>
					<div className='about-section__content__image'>
						<img src={directorPicture} />
					</div>

					<div className='about-section__content__text'>
						<h2>Ed Cobb</h2>
						<img src={underTitle} />
						<p>
							After having the idea of starting a new community chorus, Ed Cobb
							said “Let’s put on a Patriotic Concert, and see how it
							goes!” He made some calls, sent a few notes and anxiously awaited
							the first rehearsal. Nearly 50 singers showed up that first night
							and since then, Ed’s leadership has encouraged an environment that
							currently enriches the lives of just under 100 singers with a wide
							array of musical experiences, creating a non-auditioned choir for
							the community to enjoy!
						</p>
						<p>
							Ed studied music at Texas Tech University, where he was Drum Major
							of the world-famous “Goin’ Band from Raiderland.” Following
							school, he began touring in a Christian music group, The
							Continental Singers, where he eventually became a director,
							conducting choral and instrumental groups in concert tours across
							the United States and into 30 countries worldwide. In his 30-plus
							year musical career, Ed has conducted choirs and orchestras in 4
							churches throughout Southern and Central California. His groups,
							with hundreds of participants, have presented large scale
							productions, concerts and recordings. As well, he has conducted
							choirs for numerous civic events, and conferences.
						</p>
						<p>
							In addition to his work with the Clovis Community Choir, Ed,
							currently, teaches music at a private school in Fresno.
						</p>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Director;
