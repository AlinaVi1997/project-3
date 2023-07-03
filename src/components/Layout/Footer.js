import NavWithTitle from "../nav/NavWithTitle.js";
import NavWithTitleAbout from "../nav/NavWithTitleAbout.js";
import NavWithTitleSupport from "../nav/NavWhithTitleSupport.js";
import NavWithTitlePartners from "../nav/NavWithTitlePartners.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import '../../src/scss/footer.scss';

const currentYear = new Date().getFullYear();

let primaryNav = {
	title:  "About",
	links: [
		{
			id: "news-1",
			link: "About us",
			// path: "/"
		},
		{
			id: "news-2",
			link: "Newsroom Staff",
			// path: "/news"
		},
		{
			id: "news-3",
			link: "Ethical Principles",
			// path: "/"
		},
		{
			id: "news-4",
			link: "Corrections",
			// path: "/contacts"
		},
		{
			id: "news-5",
			link: "Press Realeases",
			// path: "/about"
		},
		{
			id: "news-6",
			link: "Accessibility",
			// path: "/faq"
		},
		{
			id: "news-7",
			link: "Sitemap",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-8",
			link: "Terms of Servise",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-9",
			link: "News Tips",
			// path: "/privacy-and-policy"
		},
	]
};

let socialNav = {
	links: [
		{
			id: "social-1",
			link: "Instagram",
			path: "https://www.instagram.com"
		},
		{
			id: "social-2",
			link: "Twitter",
			path: "https://twitter.com"
		},
		{
			id: "social-3",
			link: "FaceBook",
			path: "https://www.facebook.com"
		},
		{
			id: "social-4",
			link: "YouTube",
			path: "https://www.youtube.com"
		},
	]
};

let supportNav = {
	title:  "Support",
	links: [
		{
			id: "news-1",
			link: "About us",
			// path: "/"
		},
		{
			id: "news-2",
			link: "Newsroom Staff",
			// path: "/news"
		},
		{
			id: "news-3",
			link: "Ethical Principles",
			// path: "/"
		},
		{
			id: "news-4",
			link: "Corrections",
			// path: "/contacts"
		},
		{
			id: "news-5",
			link: "Press Realeases",
			// path: "/about"
		},
		{
			id: "news-6",
			link: "Accessibility",
			// path: "/faq"
		},
		{
			id: "news-7",
			link: "Sitemap",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-8",
			link: "Terms of Servise",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-9",
			link: "News Tips",
			// path: "/privacy-and-policy"
		},
	]
};

let partnersNav = {
	title:  "Our Partners",
	links: [
		{
			id: "news-1",
			link: "About us",
			// path: "/"
		},
		{
			id: "news-2",
			link: "Newsroom Staff",
			// path: "/news"
		},
		{
			id: "news-3",
			link: "Ethical Principles",
			// path: "/"
		},
		{
			id: "news-4",
			link: "Corrections",
			// path: "/contacts"
		},
		{
			id: "news-5",
			link: "Press Realeases",
			// path: "/about"
		},
		{
			id: "news-6",
			link: "Accessibility",
			// path: "/faq"
		},
		{
			id: "news-7",
			link: "Sitemap",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-8",
			link: "Terms of Servise",
			// path: "/privacy-and-policy"
		},
		{
			id: "news-9",
			link: "News Tips",
			// path: "/privacy-and-policy"
		},
	]
};
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-grid'>
					<div className='footer-form'>
						<h1 className="footer-title"> Stay connected!</h1>
							<div className="search">
								<FontAwesomeIcon icon={faArrowRight} />
								<input className='input-search' type='text' placeholder='SUBSCRUBE TO UOR NEWSLETTER'/>
							</div>
							<NavWithTitle { ...socialNav } />
					</div>
					<div className='footer-grid-about'>
						<NavWithTitleAbout { ...primaryNav} />
					</div>
					<div className='footer-grid-support'>
						<NavWithTitleSupport {...supportNav} />
					</div>
					<div className='footer-grid-partners'>
						<NavWithTitlePartners {...partnersNav} />
					</div>
				</div>
				<div className='footer-copyright'>
						<div className='footer__copyright-item'>
							Protection of human Right:procedure 104
						</div>
					<div className='footer__copyright-item'>
							Privace policy
					</div>
					<div className='footer__copyright-item'>
							Coocie settings
					</div>
					<div className='footer__copyright-item'>
						© Ua today { currentYear }
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;