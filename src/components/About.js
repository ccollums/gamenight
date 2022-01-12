import '../css/About.css';
import React from 'react'
import Adam from '../images/Adam.png'
import Carly from '../images/Carly.png'
import Kyra from '../images/Kyra.png'
import playingGame from '../images/playingGame.svg'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const About = () => {
	return (
		<section className='about-page'>
			<section className='collaborators'>
				<section className='app-about'>
					<h1>About</h1>
					<p className='app-summary'>gamenight was born out of a love for, well, game nights. We were motivated by a desire to have a simple interface
						for keeping track of the competition. Part time capsule, part scoreboard, we built game night for anyone
						who enjoys getting together with loved ones to battle it out for bragging rights. Keep track of overall wins to save time arguing over who is the best. gamenight was completed as part of Turing
						School of Software & Designs’ intensive Front-End Engineering program. The goal was to envision and build a complex React web
						app from scratch. Check the readme <a href="https://github.com/ccollums/gamenight">HERE</a> for more info.</p>
				</section>
				<div className='Adam'>
					<img className='headshot' src={Adam} alt='headshot of Adam Burgess' />
					<div className='summary-section'>
						<h2 className='name'>Adam Burgess</h2>
						<p className='summary'>I am a front end software developer and former CPA with six years of experience in public accounting.
							I recently decided to switch careers and pursue my passion for software development.
							As a front end developer, I thoroughly enjoy creating applications that are accessible, user-friendly
							and provide for an overall positive user experience. What excites me the most about software development
							is the unlimited possibilities. Nearly all of our daily tasks involve some sort of interaction with code.
							Being able to be a part of that user interaction now and in the future is very inspiring to me.</p>
						<div className='personal-pages'>
							<a href='https://www.linkedin.com/in/burgess-adam/' className='linkedin'>
								<AiFillLinkedin size={34} />
							</a>
							<a href='https://github.com/aburg15' className='github'>
								<AiFillGithub size={34} />
							</a>
						</div>
					</div>
				</div>
				<div className='Carly'>
					<img className='headshot' src={Carly} alt='headshot of Carly Collums' />
					<div className='summary-section'>
						<h2 className='name'>Carly Collums</h2>
						<p className='summary'>I am a positive, and compassionate software developer driven by an imaginative thinking style and growth mindset.
							I obtained my Bachelors degree in Business Marketing with minors in Drawing and Literature. Upon graduating I began
							working for an IT recruiting company and was exposed to the vast world of tech in a way that I had not been before.
							This opened my eyes to the world of software development and I was immediately smitten. I am drawn to problem solving,
							continuous learning, and the creativity that software development offers.</p>
						<div className='personal-pages'>
							<a href='https://www.linkedin.com/in/carly-collums/' className='linkedin'>
								<AiFillLinkedin size={34} />
							</a>
							<a href='https://github.com/ccollums' className='github'>
								<AiFillGithub size={34} />
							</a>
						</div>
					</div>
				</div>
				<div className='Kyra'>
					<img className='headshot' src={Kyra} alt='headshot of Kyra Bergsund' />
					<div className='summary-section'>
						<h2 className='name'>Kyra Bergsund</h2>
						<p className='summary'>I am a music festival production project manager turned software engineer specializing in front-end web apps. I started my career in event production because I am passionate about facilitating meaningful experiences for broad audiences. I love being part of a team that fabricates joy. Now, as a software engineer, I continue that work by actively contributing to the creation of impactful products. I am inspired by the potential for software products to bring people together and to broaden access to outdoor education, recreation, and sustainable living. I believe it is an avenue that will in turn inspire people to care more for each other and the world we live in. </p>
						<div className='personal-pages'>
							<a href='https://www.linkedin.com/in/kyrabergsund/' className='linkedin'>
								<AiFillLinkedin size={34} />
							</a>
							<a href='https://github.com/kbergsund' className='github'>
								<AiFillGithub size={34} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<img className='playing-game-img' src={playingGame} alt='icon of people playing board game, with a winner celebrating' />
		</section>
	)
}

export default About;