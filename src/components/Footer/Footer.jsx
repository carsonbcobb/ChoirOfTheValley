import React from 'react';

import './Footer.styles.scss';

import footerLogo from '../../assets/home/footer-logo.png';
import facebook from '../../assets/home/facebook.png';
import youtube from '../../assets/home/youtube.png';

const Footer = () => (
	<div className='footer'>
		<div className='footer__content'>
			<img src={footerLogo} />
			<p>Cloviscommunitychoir@gmail.com</p>
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
				Carson Cobb &#169; 2022
			</a>
		</div>
	</div>
);

export default Footer;
