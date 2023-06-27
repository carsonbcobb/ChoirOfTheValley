import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from '../../assets/home/footer-logo.png';

import './nav.styles.scss';

const Nav = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav id='nav'>
			<Link class='nav__logo' to='/'>
				<img src={logo} />
			</Link>
			<div class='nav__links'>
				<Link to='/' class='nav__links--link'>
					Home
				</Link>
				<div id='about-link' onClick={() => setToggle(!toggle)}>
					About
					{toggle && (
						<div className='dropdown'>
							<Link
								to='/about'
								className=' nav__links--link nav__links--link-dropdown'
							>
								Who We Are?
							</Link>
							<Link
								to='/director'
								className='nav__links--link nav__links--link-dropdown'
							>
								Our Director
							</Link>
							<Link
								to='/accompanist'
								className=' nav__links--link nav__links--link-dropdown'
							>
								Our Accompanist
							</Link>
							<Link
								to='/history'
								className='nav__links--link nav__links--link-dropdown'
							>
								Our History
							</Link>
						</div>
					)}
				</div>

				<Link to='/events' class='nav__links--link'>
					Events
				</Link>
				<Link to='/contact' class='nav__links--link'>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
