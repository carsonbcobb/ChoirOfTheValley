import React, { useState, useToggle } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import logo from '../../assets/home/footer-logo.png';
import treble from '../../assets/nav/button.png';

import './mobileNav.styles.scss';

const MobileNav = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav role='navigation' id='mobile-nav'>
			<Link  to='/' className='mobile-logo'>
				<img src={logo} />
			</Link>
			<div id='menuToggle'>
				<input type='checkbox' />

				<span></span>
				<span></span>
				<span></span>

				<ul id='menu'>
					<div class='nav__links--mobile'>
						<Link to='/' class='nav__links--mobile-link'>
							Home
						</Link>
						<div
							id='about-link-mobile'
							class='nav__links--mobile-link'
							onClick={() => setToggle(!toggle)}
						>
							About
						</div>
						{toggle && (
							<div className='dropdown-mobile'>
								<Link
									to='/about'
									className=' nav__links--link nav__links--link-dropdown-mobile'
								>
									Who We Are?
								</Link>
								<Link
									to='/director'
									className='nav__links--link nav__links--link-dropdown-mobile'
								>
									Our Director
								</Link>
								<Link
									to='/accompanist'
									className=' nav__links--link nav__links--link-dropdown-mobile'
								>
									Our Accompanist
								</Link>
								<Link
									to='/history'
									className='nav__links--link nav__links--link-dropdown-mobile'
								>
									Our History
								</Link>
							</div>
						)}
						<Link to='/events' class='nav__links--mobile-link'>
							Events
						</Link>
						<Link to='/contact' class='nav__links--mobile-link'>
							Contact
						</Link>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default MobileNav;
