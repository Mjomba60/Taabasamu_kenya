import { aboutintrotext, Corevalue, corevalues, impactstatement, Impactvalue, impactvalues, missionstatement, team_members, Teammember, teamstatement, visionstatement } from "./componentdata/aboutus";
import mealimage from '../images/Addde7.png'
import visionimage from '../images/vision.jpg'
import heroimage from '../images/myteamherov2.png'
import { Link, useNavigate } from "@remix-run/react";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { UIEvent } from "react";
import { ClientOnly } from "remix-utils/client-only";
import Slider from "react-slick";

export function AboutHero() {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

    return (
        <div className="routemainherocontainer">
            <img src={heroimage} alt="teamtabasamu" />
            <div className="routemainherotxtcontainer"
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-duration='800'
                data-aos-easing='ease-in'>
                <h1>Raising voices of those in underdeveloped areas through community empowerment</h1>
                <p>Understand the structure that Taabasamu is built on that makes us the hope and voice to those in slums and marginalised areas.</p>
                <button onClick={handleClick}>Support Taabasamu</button>
            </div>
        </div>
    )
}

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

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

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
                <button onClick={handleClick}>Get Involved</button>
            </div>
        </div>
    )
}

export function AboutVision() {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

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
                <button onClick={handleClick}>Get Involved</button>
            </div>
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
    // TODO update slider element to correspond with the scrnwidth to set the number of slides to show


    // Add carousel feature with the remix-utils clientonly component, implement carousel style
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
            {/* <div className="memberitemscontainer">
                {team_members.map(({ member_image, member_name, member_role, socials }) => <TeamMemberItem member_image={member_image} member_name={member_name} member_role={member_role} socials={socials} key={member_name} />)}
            </div> */}

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
            <button popovertarget='donateqr' popovertargetaction='show'>Become impactful</button>

            {/* show the impact values */}
            <div className="impactvaluesmaincontainer">
                {impactvalues.map(({ impact_image, impact_value, impact_value_definer, impact_value_assistive_txt }) => <ImpactValueItem key={impact_value} impact_image={impact_image} impact_value_definer={impact_value_definer} impact_value={impact_value} impact_value_assistive_txt={impact_value_assistive_txt} />)}
            </div>
        </div>
    )
}