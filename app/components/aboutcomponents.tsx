import { aboutherohlghttxt, aboutintrotext, Corevalue, corevalues, impactstatement, Impactvalue, impactvalues, missionstatement, team_members, Teammember, teamstatement, visionstatement } from "./componentdata/aboutus";
import mealimage from '../images/Addde7.png'
import visionimage from '../images/vision.jpg'
import slum from '../images/hero2.jpg'
import { Link } from "@remix-run/react";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { ClientOnly } from "remix-utils/client-only";
import Slider from "react-slick";
import { DonationBtn } from "./header";


export function AboutIntro() {

    return (
        <div className="routeintrosectioncontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h2>About Us</h2>
            <p>{aboutintrotext}</p>
        </div>
    )
}

function CoreValueItem({ value_image, value_body, value_title }: Corevalue) {


    return (
        <div className="corevaluecontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <img src={value_image} alt="" />
            <h5>{value_title}</h5>
            <p>{value_body}</p>
        </div>
    )
}

export function AboutCoreValues() {

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="corevalues"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h3>Our Core Values</h3>
            <div className="aboutcorevaluescontainer">
                {corevalues.map(({ value_body, value_image, value_title }) => <CoreValueItem value_body={value_body} value_image={value_image} value_title={value_title} key={value_title} />)}
            </div>
        </div>
    )
}

export function AboutMission() {

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="mission"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <img src={mealimage} alt="taabasamumission" />
            <div className="mainsectiontextlayoutcontainer"
                data-aos='fade-left'
                data-aos-delay='600'
                data-aos-duration='800'
                data-aos-easing='ease-in'>
                <h3>Our Mission</h3>
                <p>{missionstatement}</p>
                <DonationBtn btn_title={"Support Mission"} classname={""} />            </div>
        </div>
    )
}

export function AboutVision() {

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="vision"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <div className="mainsectiontextlayoutcontainer"
                data-aos='fade-left'
                data-aos-delay='600'
                data-aos-duration='800'
                data-aos-easing='ease-in'>
                <h3>Our Vision</h3>
                <p>{visionstatement}</p>
                <DonationBtn btn_title={"Donate to vision"} classname={""} />            </div>
            <img src={visionimage} alt="ourvision" />
        </div>
    )
}

function TeamMemberItem({ member_image, member_name, member_role, socials }: Teammember) {

    return (
        <div className="teammemberitemcontainer">
            <img src={member_image} alt="" />
            <div className="memberitemtxtcontainer">
                <p className="membername">{member_name}</p>
                <p className="membertitle">{member_role}</p>
                <div className="txtsocialscontainer">

                    {/* show icons if link is provided in the sociials */}
                    {socials?.facebook !== undefined ?
                        <Link to={socials.facebook}>
                            <FacebookIcon />
                        </Link> : null}

                    {socials?.twitter !== undefined ?
                        <Link to={socials.twitter}>
                            <TwitterIcon />
                        </Link> : null}

                    {socials?.linkedin !== undefined ?
                        <Link to={socials.linkedin}>
                            <LinkedInIcon />
                        </Link> : null}
                </div>
            </div>
        </div>
    )
}

export function AboutTeamMembers() {

    const settings = {
        dots: true,
        infinite: true,
        adaptiveHeight: false,
        className: "teamcarouselslide",
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        speed: 1000,
        autoplaySpeed: 3200,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    }

    return (
        <div className="aboutteammeberscontainer"
            id="team"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h3>Our Team</h3>
            <p>{teamstatement}</p>

            <ClientOnly>
                {() => <div className="teamslidercontainer">
                    <Slider {...settings}>
                        {team_members.map(({ member_image, member_name, member_role, socials }) => <TeamMemberItem member_image={member_image} member_name={member_name} member_role={member_role} socials={socials} key={member_name} />)}
                    </Slider>
                </div>}
            </ClientOnly>

        </div>
    )
}

function ImpactValueItem({ impact_value, impact_value_definer, impact_value_assistive_txt }: Impactvalue) {

    return (
        <div className="impactvalueitemcontainer"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h5>{impact_value}</h5>
            <h6>{impact_value_definer}</h6>
            <p className="impactassistxt">{impact_value_assistive_txt}</p>
        </div>
    )
}

export function AboutImpact() {

    return (
        <div className="routesmainsectionlayoutcontainer"
            id="impact"
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='800'
            data-aos-easing='ease-in'>
            <h3>Our Impact</h3>
            <p>{impactstatement}</p>
            <DonationBtn btn_title={"Add Impact"} classname={""}/>
            {/* show the impact values */}
            <div className="impactvaluesmaincontainer">
                {impactvalues.map(({ impact_image, impact_value, impact_value_definer, impact_value_assistive_txt }) => <ImpactValueItem key={impact_value} impact_image={impact_image} impact_value_definer={impact_value_definer} impact_value={impact_value} impact_value_assistive_txt={impact_value_assistive_txt} />)}
            </div>
        </div>
    )
}

export function AboutHero_v2() {

    // TODO: new hero update: large image and text as "Restoring hope and smiles in slums"
    // Add stats to the image and text head section may incude: successful programs, successful events, number of sponsors.

    return (
        <div className="aboutnewherocontainer">
            <h1>We Are About <em>Smiles</em> and <em>Shine</em>,
                <br /> some say We Are {` "${aboutherohlghttxt[2]}"`}</h1>
            <div className="newheroimgtxtcontainer">
                <div className="newherostatscontainer">
                    <div className="newherostat">
                        <p>Average <strong>Population</strong> in slums.</p>
                        <h3>4.1M</h3>
                    </div>
                    <div className="newherostat">
                        <p><strong>Meals</strong> per day for most families in slums.</p>
                        <h3>1</h3>
                    </div>
                    <div className="newherostat">
                        <p>Probability of children in slums receiving <strong>Education</strong>.</p>
                        <h3>{'22%'}</h3>
                    </div>
                    <div className="newherostat">
                        <p><strong>Equipped, Accessible Medical Facilities</strong> within slums.</p>
                        <h3>3</h3>
                    </div>
                </div>
                <img src={slum} alt="slums" />
            </div>
        </div>
    )
}

export function AboutHero_v3() {

    return(
        <div className="herov3container">
            <img src={slum} alt="" className="herov3imgcontainer" />
            <div className="headertxtnstatscontainer">
                <h1>Restoring Hope and Smiles in Slums</h1>
                {/* <h5>{aboutherohlghttxt[6]}</h5> */}
                <div className="newherostatscontainer">
                    <div className="newherostat">
                        <h4>Successful Programs</h4>
                        <h3>19</h3>
                    </div>
                    <div className="newherostat">
                        <h4>Successful Events</h4>
                        <h3>22</h3>
                    </div>
                    <div className="newherostat">
                        <h4>Sponsors</h4>
                        <h3>54</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}