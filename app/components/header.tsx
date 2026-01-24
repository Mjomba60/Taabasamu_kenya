import { Link, NavLink, useNavigate } from "@remix-run/react";
import taabasamulogo from '../images/taaabasamu2-removebgv2.png'
import fionanobg from '../images/newsample3.png'
import soma from '../images/MyTeam.png'
import msomi from '../images/fionandimv2.png'
// import donationhands from '../images/tabasamuhomehero.webp'
import { FacebookIcon, InstagramIcon, LinkedInIcon, MediumIcon, TwitterIcon } from "./icons";
import { donate_assist_txt, homeherodata, homeprogramsstats, promotext, Stats, user_testimonials } from './componentdata/homehero'
import Slider from "react-slick";
import { UIEvent, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { EmailIcon, EmailShareButton, FacebookIcon as FacebookShareIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { ClientOnly } from "remix-utils/client-only";
import { assistivetext } from "./componentdata/donations";

export function Header() {

    const [currscrn_width, setCurrScrn_Width] = useState('large')

    useEffect(() => {

        if (window.outerWidth <= 650) {
            setCurrScrn_Width('small')
        } else if (window.outerWidth < 940 && window.outerWidth >= 650) {
            setCurrScrn_Width('medium')
        } else {
            setCurrScrn_Width('large')
        }

        window.addEventListener('resize', () => {

            if (window.outerWidth <= 650) {
                setCurrScrn_Width('small')
            } else if (window.outerWidth < 940 && window.outerWidth >= 650) {
                setCurrScrn_Width('medium')
            } else {
                setCurrScrn_Width('large')
            }
        })

        console.log([currscrn_width, window.outerWidth])

        return () => {

        }
    }, [currscrn_width])


    return (
        <div className="taabasamuheader"
            data-aos='slide-down'
            data-aos-offset='-1'
            data-aos-anchor-placement="top-top">
            {currscrn_width == 'large' ? <>
                <Link to='/' className="headerlogocontainer">
                    <img src={taabasamulogo} alt="taabasamulogo" />
                </Link>

                <nav>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/programs'>Our Programs</NavLink>
                    <NavLink to='newsnevents'>News & Events</NavLink>
                    <button className="buttonmain" popovertarget='donateqr' popovertargetaction='show'>Donate</button>
                </nav>
            </> :
                // TODO Edit button as drawer showing navigation elements on the left
                <button className='tabasamusmnavigation' popovertarget='tbhamburgermenu' popovertargetaction='show'>
                    <hr />
                    <hr />
                    <hr />
                </button>}
        </div>
    )
}

export function HamburgerMenu() {

    
    return (
        <div className="hamburgermenu" id="tbhamburgermenu" popover='auto'>
            <button className="hamburgerclosemenu" popovertarget='tbhamburgermenu' popovertargetaction='close'>
                <hr />
                <hr />
            </button>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/programs'>Our Programs</a>
                <a href='newsnevents'>News & Events</a>
            </nav>

            <button className="buttonmain">Donate</button>
        </div>
    )
}

export function Footer() {

    return (
        <div className="taabasamufooter">
            <div className="footerlinksmainconatiner">

                {/* Section with quick links */}
                <div className="footersinglelinkcontainer">
                    <h5>Quick Links</h5>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/programs'>Our Programs</Link>
                    <Link to='/newsnevents'>News & Events</Link>
                </div>

                {/* Section with contact info */}
                <div className="footersinglelinkcontainer">
                    <h5>Contact Us</h5>
                    <a href="tel: +254791993507">+254 791 993 507</a>
                    <a href="mailto: info@taabasamu.org">info@taabasamu.org</a>
                    <a href="/">Kibera Nairobi, Kenya</a>
                </div>

                {/* Section with social handles */}
                <div className="footersinglelinkcontainer">
                    <h5>Our Socials</h5>
                    {/* Facebook link */}
                    <a href="/" className="socialinkcontainer">
                        <FacebookIcon />
                        <span>Facebook</span>
                    </a>

                    {/* Twitter/X link */}
                    <a href="/" className="socialinkcontainer">
                        <TwitterIcon />
                        <span>{'Twitter'} / {'X'}</span>
                    </a>

                    {/* Instagram link */}
                    <a href="/" className="socialinkcontainer">
                        <InstagramIcon />
                        <span>Instagram</span>
                    </a>

                    {/* Linkedin link */}
                    <a href="/" className="socialinkcontainer">
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </a>
                </div>

                {/* Section with programs */}
                <div className="footersinglelinkcontainer">
                    <h5>Our Programs</h5>
                    <Link to='/programs/mlo'>MLO Project</Link>
                    <Link to='/programs/kuza'>KUZA Project</Link>
                    <Link to='/programs/soma'>SOMA Project</Link>
                </div>

                {/* Section with about us */}
                <div className="footersinglelinkcontainer">
                    <h5>About Us</h5>
                    <Link to='/about#corevalues'>Our Values</Link>
                    <Link to='/about#mission'>Our Mission</Link>
                    <Link to='/about#vision'>Our Vision</Link>
                    <Link to='/about#impact'>Our Impact</Link>
                    <Link to='/about#team'>Our Team</Link>
                </div>

                {/* Section with privacy */}
                <div className="footersinglelinkcontainer">
                    <h5>Privacy</h5>
                    <Link to='/termsandconditions'>Terms & Condition</Link>
                    <Link to='/prefrence'>Cookies & Preference</Link>
                    <Link to='/faqs'>FAQs</Link>
                </div>
            </div>
            <hr />
            <p className="copyrightxtcontainer">
                Copyright © 2025 Friends of TaaBasamu &nbsp;a registered 501(c)3
                <strong> All Rights Reserved.</strong>
            </p>

            {/* Logo & newsletter form */}
            <div className="footerlogonewslettercontainer">
                <Link to='/' className="footerlogolinkcontainer">
                    <img src={taabasamulogo} alt="logo" />
                </Link>

                <form>
                    <h5>Stay Updated</h5>
                    <div className="formnewslettercontainer">
                        <input type="email" placeholder="Enter your email to subscribe to our newsletter" />
                        <button>Subscribe</button>
                    </div>
                </form>

                <div className="footericonscontainer">
                    <a href="/">
                        <FacebookIcon />
                    </a>
                    <a href="/">
                        <TwitterIcon />
                    </a>
                    <a href="/">
                        <InstagramIcon />
                    </a>
                    <a href="/">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export function HomeHero() {

    const btn_navigator = useNavigate()

    function handlebtnClick(e: UIEvent) {
        console.log(e)
        if (e.type == 'click') {
            switch (e.currentTarget.id) {
                case 'homelearnmore':
                    btn_navigator('/#homeintro')
                    break;

                case 'homedonate':
                    btn_navigator('/donate')
                    break;
            }
        }
    }

    return (
        <div className="routemainherocontainer">

            <div className="routemainherotxtcontainer"
                data-aos='fade-up'
                // data-aos-delay='800'
                data-aos-duration='1200'
                // data-aos-easing= 'ease-in'
                data-aos-anchor-placement="top-bottom">
                <h1>{homeherodata.maintext}</h1>
                <p>{homeherodata.subtext}</p>
                <div className="herobtnscontainer">
                    <button id="homedonate" popovertarget='donateqr' popovertargetaction='show'>Donate</button>
                    <button id="homelearnmore" onClick={handlebtnClick}>Learn More</button>
                </div>
            </div>

            <img src={fionanobg} alt="taabasamu beneficiarie" />
        </div>
    )
}

export function IntroductorySection() {

    return (
        <div className="routeintrosectioncontainer"
            id="homeintro"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h2>Understanding Taabasamu</h2>
            <p>Taabasamu comes from two Swahili words, “Taa” and “Tabasamu”. When translated “Taa” becomes source of light while “Tabasamu” becomes a smile or a facial expression that demonstrates happiness. These definitions align perfectly with our mission and vision. We stand with communities being a light to those in devoid. We believe in equal chances and therefore work hard towards unifying communities, we aim to remove the line separating the destitute from the others. To further understand our structure and how we work the sections below provide more information.</p>
        </div>
    )
}

export function HomeAboutSection() {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/about')
        }
    }

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="about"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <img src={soma} alt="learning" />
            <div className="mainsectiontextlayoutcontainer"
                data-aos='fade-left'
                data-aos-delay='600'
                data-aos-duration='800'
                data-aos-easing='ease-in'>
                <h3>About Us</h3>
                <p>Just like any system where small sub-components work together towards achieving a specific goal, Taabasamu is composed of different sections which work closely and concurrently to ensure that we stay on track based on our mission and vision.</p>
                <button onClick={handleClick}>Learn More</button>
            </div>
        </div>
    )
}

export function StatsContainer({ statvalue, statxt, statimage }: Stats) {

    return (
        <div className="statcontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <img src={statimage} alt="StatRep" />
            <h5>{statvalue}</h5>
            <h6>{statxt}</h6>
        </div>
    )
}

export function HomeProgramSection() {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/programs')
        }
    }

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="programs"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h3>Our Programs</h3>
            <p>In our campaign towards giving chances to those in devoid, we have projects that are well curated for our target population. These projects involve providing products and services that are inaccessible to our target population due to various factors.</p>

            <button onClick={handleClick}>Learn More</button>

            <div className="statmaincontainer">
                {homeprogramsstats.map((el) => {
                    return (
                        <StatsContainer key={el.statxt} statvalue={el.statvalue} statxt={el.statxt} statimage={el.statimage} />
                    )
                })}
            </div>
        </div>
    )
}

export function HomeGetInvolvedSection() {

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="involvment"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <div className="mainsectiontextlayoutcontainer"
                data-aos='fade-right'
                data-aos-delay='600'
                data-aos-duration='800'
                data-aos-easing='ease-in'>
                <h3>Getting Involved</h3>
                <p>We are open to individuals who would like to support us in our mission and vision. Taabasamu has several methods of participation.</p>
                <div className="buttoncontainer">
                    <button popovertarget='donateqr' popovertargetaction='show'>Donate</button>
                    <button>Contact Taabasamu</button>
                </div>
            </div>

            <img src={msomi} alt="doonatehands" />
        </div>
    )
}

export type TestimonialBody = {
    image: string,
    name: string,
    title: string,
    review: string
}

export function TestimonialItemContainer({ image, name, title, review }: TestimonialBody) {

    return (
        <div className="testimonialitemcontainer">
            <img src={image} alt="userphoto" />
            <div className="testimonialitemtxtcontainer">
                <h5>{name}</h5>
                <h6>{title}</h6>
                <p>{review}</p>
            </div>
        </div>
    )
}

function TestimonialItemContainer_V2({ image, name, title, review }: TestimonialBody) {

    return (
        <div className="testimonialitemnewcontainer">
            <div className="testimonyreviewcontainer">
                <p>{review}</p>
            </div>
            <div className="imagetitlecontainer">
                <img src={image} alt="profileimage" />
                <div className="titletxtcontainer">
                    <h6>{name}</h6>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {

    return (
        <div className="hometestimonialscontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h3>What People Say About Us</h3>
            <div className="hometestimoniesbodycontainer">
                {user_testimonials.map(({ image, name, title, review }) => <TestimonialItemContainer_V2 key={name} image={image} name={name} title={title} review={review} />)}
            </div>
        </div>
    )
}

export function HomeNewsEvents() {

    return (
        <div className="homenewseventscontainer">
            <div className="newseventstxtcontainer">
                <h3>News & Events</h3>
                <p>Taabasamu holds events which help create awareness and support the slum communities. We also share details about our events and other important information that align with our goals through various mediums, mainly social media. To stay updated with the latest information from Taabasamu follow us on our social media pages</p>
                <button>Learn More</button>
            </div>
            <form className="newsheroformaincontainer">
                <h4>Subscribe to Our News Letter</h4>
                <p>{`Get Taabasamu's latest news and events`}</p>
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" placeholder="Enter your email to subscribe to our news letter" />
                </fieldset>
                <button>Subscribe</button>
                <div className="alternativeconnectcontainer">
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <div className="mynewsherosocialscontainer">
                    <p>Follow us on our socials</p>
                    <div className="herosocialscontainer">
                        <a href="/">
                            <FacebookIcon />
                        </a>
                        <a href="/">
                            <TwitterIcon />
                        </a>
                        <a href="/">
                            <LinkedInIcon />
                        </a>
                        <a href="/">
                            <MediumIcon />
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function PromotionCarousel() {

    const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: false,
        className: "carouselslide",
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 3200,
        vertical: true,
        pauseOnHover: false,
        arrows: false
    }

    return (
        <div className="homepromotext">
            <ClientOnly>
                {() => <Slider {...settings} className="promoslider">

                    {promotext.map((el) => {
                        return (<div key={el} className="promotextcontainer">
                            <h3>{el}</h3>
                        </div>)
                    })}
                </Slider>}
            </ClientOnly>
        </div>
    )
}

// Update layout for newsletter
export function RouteNewsLetterContainer() {

    return (
        <div className="routenewslettercontainer routesmainsectionlayoutcontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>

            <div className="newslettertxtnsocialbtnscontainer">
                <h3>Get Taabasamu Updates</h3>
                <p>{`We would love to hear from you and you from us, with this in mind, we would also like to keep you updated through our socials and news letter.`}</p>
                <div className="herosocialscontainer">

                    <strong><em>Our Socials:</em></strong>

                    <a href="/">
                        <FacebookIcon />
                    </a>
                    <a href="/">
                        <TwitterIcon />
                    </a>
                    <a href="/">
                        <LinkedInIcon />
                    </a>
                    <a href="/">
                        <MediumIcon />
                    </a>
                    <a href="/">
                        <InstagramIcon />
                    </a>
                </div>
            </div>

            <form className="newsheroformaincontainer">
                <h4>Subscribe to Our News Letter</h4>
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" placeholder="Enter your email to subscribe to our news letter" />
                </fieldset>
                <button>Subscribe</button>
                {/* <div className="alternativeconnectcontainer">
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <div className="mynewsherosocialscontainer">
                    <h4>Talk to Us through Our Socials</h4>
                    
                </div> */}
            </form>
        </div>
    )
}

// Add popup element for when user clicks the contact tabasamu from the get involved section
// Remove unused elements and coressponding css
export function DonateQrCode() {


    const qr_url = 'https://elewa.netlify.app/'
    const iconsize = '3em'

    return (
        <div className="donationqrcodecontainer" id="donateqr" popover='auto'>

            <div className="tabasamuqrtitlenbtncontainer">
                <h3>Taabasamu Donation</h3>
                <button className="btncloseqr" popovertarget='donateqr' popovertargetaction='hide'>
                    <hr className="closeqrline" />
                    <hr className="closeqrline" />
                </button>
            </div>
            <p>{donate_assist_txt}</p>

            <h6><strong><em>Invite others to Donate through :</em></strong></h6>

            <div className="mainsharecontainer">
                <EmailShareButton
                    url={qr_url}
                    subject="Taabasamu Donation"
                    body={assistivetext}>
                    <EmailIcon
                        round={false}
                        size={iconsize} />
                    {/* Email */}
                </EmailShareButton>
                <WhatsappShareButton
                    url={qr_url}
                    title="Taabasamu donatiion">
                    <WhatsappIcon size={iconsize} />
                    {/* Whatsapp */}
                </WhatsappShareButton>
                <FacebookShareButton
                    url={qr_url}
                    hashtag="#Taabasamu_smile_givers">
                    <FacebookShareIcon size={iconsize} />
                    {/* Facebook */}
                </FacebookShareButton>
                <LinkedinShareButton
                    url={qr_url}
                    title="Tabasamu donations"
                    summary={assistivetext}>
                    <LinkedinIcon size={iconsize} />
                    {/* LinkedIn */}
                </LinkedinShareButton>
            </div>

            <div className="mainqrcodeconatiner">
                <ClientOnly>
                    {() => <QRCode value={qr_url} size={250} />}
                </ClientOnly>
            </div>

            <button className="buttonmain">Proceed to donate</button>

            <ul className="tabasamuqrlinkscontainer">
                <li>
                    <a className="assistivelink" href="/termsandconditions">Terms and Conditions</a>
                </li>
                <li>
                    <a className="assistivelink" href="/faqs">Frequently Asked Question</a>
                </li>
            </ul>
        </div>
    )
}