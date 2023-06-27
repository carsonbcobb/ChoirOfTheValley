import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.styles.scss';
import testimonialOne from '../../assets/home/michelle.png';
import testimonialTwo from '../../assets/home/jennifer.png';
import testimonialThree from '../../assets/home/bruce.png';
import testimonialFour from '../../assets/home/dixie.png';
import testimonialFive from '../../assets/home/linda.png';
import testimonialSix from '../../assets/home/ron.png';

export default class SimpleSlider extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: false,
			speed: 800,

			slidesToShow: 3,
			slidesToScroll: 3,
			pauseOnHover: true,
			cssEase: 'linear',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: true,
						dots: false,
						pauseOnHover: true,
						cssEase: 'linear',
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: true,
						dots: false,
						pauseOnHover: true,
						cssEase: 'linear',
					},
				},
			],
		};
		return (
			<section id='slider'>
				<div className='slider'>
					<div className='slider__container'>
						<Slider {...settings}>
							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialOne} />
								<h4 className='slide--name'>Michelle C.</h4>
								<p className='slide--text'>
									“I cannot express how much the Clovis Community Choir means to
									me. To say that it changed my life is an understatement for so
									many reasons. Having no idea what to expect, I can tell you
									that from the first practice, I was blown away at the talent
									of this group. To have this avenue to express myself musically
									has been such a Godsend…but the “family” and lifelong friends
									I have met through this group will stay with me forever.”
								</p>
							</div>

							<div className='slider__container--slide center'>
								<img className='slide--image' src={testimonialTwo} />
								<h4 className='slide--name'>Jennifer H.</h4>
								<p className='slide--text'>
									“I've been in Clovis Community Choir for about 6 years and
									have enjoyed it so very much! The choir is for people who love
									to sing choral music! I love working on learning my part and
									when all the parts come together, it's just the best! I enjoy
									the people I've met, people of all ages! We are all there to
									have fun, and in the process, sing some amazing choral music
									together. Ed is the best director and chooses the most
									wonderful pieces for us to sing! Please come and join us!”
								</p>
							</div>

							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialThree} />
								<h4 className='slide--name'>Bruce W.</h4>
								<p className='slide--text'>
									“The choir has been a joy. Ed makes the work challenging at
									times, but always fun. The music selected is joyful and even a
									little emotional on occasion. We are pushed beyond what we
									think are our limits and encouraged by accomplishing what we
									thought we couldn't. Most important is the value of
									fellowship. We feel as "family" and share our needs and
									blessings to give comfort and help to the other members. ”
								</p>
							</div>

							<div className='slider__container--slide  shrink'>
								<img className='slide--image' src={testimonialSix} />
								<h4 className='slide--name'>Ron C.</h4>
								<p className='slide--text'>
									“Singing in the Clovis Community Choir has been a blessing of
									an experience for me over the years. The music selection is
									challenging, fun, and encouraging. The variety of songs
									relating to the season they are sung makes it exciting and
									new. Cannot forget to mention the members of the choir. They
									are humble, engaging, and driven to make it exactly what it
									is, a Community of people coming together to share their
									talents and enjoy music.”
								</p>
							</div>

							<div className='slider__container--slide  center'>
								<img className='slide--image' src={testimonialFour} />
								<h4 className='slide--name'>Dixie M.</h4>
								<p className='slide--text'>
									“Clovis Community Choir provides opportunities for all singers
									to share their talent and meet like people who enjoy music and
									socializing. I have been a member of various choruses
									throughout my life and this one ranks on top of the list.
									Director Ed Cobb selects music from many genres and manages to
									draw the best from each of us who possess varied stages of
									singing skills. Music is so healing and was missed so much
									during the past year of Covid. I am looking forward to getting
									back to practice with the Choir and reconnecting with old
									friends once again.”
								</p>
							</div>

							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialFive} />
								<h4 className='slide--name'>Linda D.</h4>
								<p className='slide--text'>
									“Joining Clovis Community Choir means singing great songs
									together with wonderful people. The music is pure joy, so get
									happy again! Come, sing with us!”
								</p>
							</div>
						</Slider>
					</div>
				</div>
			</section>
		);
	}
}
