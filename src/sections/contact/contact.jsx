import React from 'react';
import './contact.styles.scss';
import Footer from '../../components/Footer/Footer';

import headerLeft from '../../assets/contact/header-left.png';
import headerRight from '../../assets/contact/header-right.png';
import underTitle from '../../assets/contact/under-title.png';
import joinImage from '../../assets/contact/join.png';
import bookImage from '../../assets/contact/book.png';
import questionImage from '../../assets/contact/questions.png';
import SelectNav from '../../components/selectNav/selectNav';

const Contact = () => (
	<div className='contact'>
		<div className='contact--headerbg'>
			<SelectNav />
			<section id='contact-header'>
				<div className='contact-header'>
					<img src={headerLeft} />
					<h1>Contact Us</h1>
					<img src={headerRight} />
				</div>
			</section>
		</div>

		<section id='content'>
			<div className='contact-join'>
				<div className='contact-join__image'>
					<img src={joinImage} />
				</div>

				<div className='contact-join__text'>
					<h3>Join Us</h3>
					<img src={underTitle} />
					<h4>Would you like to sing with us?</h4>
					<p className='desktop-text'>
						We are always welcoming new singers to the Clovis Community
						<br />
						Choir! And, remember…there are no auditions. Our members have
						<br />
						varying levels of musical experience, so don’t worry if you’ve
						<br />
						never sung in a group before, or it’s been a long time. We’ll be
						<br />
						there to help you. Sign up online, or by phone, or coming to a<br />
						rehearsal. It’s that easy!
					</p>
					<p className='mobile-text'>
						We are always welcoming new singers to the Clovis Community Choir!
						And, remember…there are no auditions. Our members have varying
						levels of musical experience, so don’t worry if you’ve never sung in
						a group before, or it’s been a long time. We’ll be there to help
						you. Sign up online, or by phone, or coming to a rehearsal. It’s
						that easy!
					</p>
					<br />
					<div className='contact-button'>
						<a
							href='https://docs.google.com/forms/d/e/1FAIpQLScxKELToh9-epCwKRMFws7SqwYkdxnf2BrTdGbopsFFlssYzw/viewform?usp=sf_link'
							target='_blank'
						>
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id='book'>
			<div className='book'>
				<div className='book__content'>
					<div className='book__image-mobile'>
						<img src={bookImage} />
					</div>
					<h3>Book Us</h3>
					<img src={underTitle} />
					<h4>Interested in having the Choir sing for an event?</h4>
					<p className='desktop-text'>
						Our season typically includes 4 concerts with room for a few
						<br />
						other events around the community. We have also provided small
						<br />
						groups for specific functions. If you have an idea or an event for
						<br />
						which you’d like us to participate, give us a call or send a request
						<br />
						by email.
					</p>
					<p className='mobile-text'>
						Our season typically includes 4 concerts with room for a few other
						events around the community. We have also provided small groups for
						specific functions. If you have an idea or an event for which you’d
						like us to participate, give us a call or send a request by email.
					</p>
					<br />
					<div className='contact-button'>
						<a href='tel:+15599168541'target='_blank' >
							Call Us
						</a>
					</div>
				</div>

				<div className='book__image'>
					<img src={bookImage} />
				</div>
			</div>
		</section>

		<section id='questions'>
			<div className='questions'>
				<div className='questions__image'>
					<img src={questionImage} />
				</div>

				<div className='questions__content'>
					<h3>Contact Us</h3>
					<img src={underTitle} />
					<h4>Questions or Comments?</h4>
					<p className='desktop-text'>
						We’d love to hear from you! You can always reach us through
						<br />
						simply sending an email.
					</p>
					<p className='mobile-text'>
						We’d love to hear from you! You can always reach us through simply sending an email.
					</p>
					<br />

					<div className='contact-button'>
						<a href='mailto:cloviscommunitychoir@gmail.com' target='_blank'>
							Email Us
						</a>
					</div>
				</div>
			</div>
		</section>

		<Footer />
	</div>
);

export default Contact;
