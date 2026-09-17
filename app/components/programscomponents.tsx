import { Link, useNavigate } from "@remix-run/react";
import { ExtendedProgramItem, programintro, ProgramItem, programitems } from "./componentdata/tabasamuprograms";
import donationimg from '../images/donationv3.png'
import education from '../images/graduation.png'
import health from '../images/health.png'
import nutrition from '../images/nutrition.png'
import TwinkleB from '../images/TwinkleB.jpeg'
import { UIEvent } from "react";
import { DonationBtn } from "./header";


function SingleProgramItem({ title, image, subtitle, location }: ProgramItem) {


    return (
        <Link to={title.toLowerCase()} className="programitemcontainer">
            <img src={image} alt="programimage" />
            <div className="projectitemmaintxtnbtncontainer">
                <div className="projectitemtxtcontainer">
                    <h4>{title} PROJECT</h4>
                    <span>{location}</span>
                </div>
            </div>
            <p>{subtitle}</p>
            <DonationBtn btn_title={"Support Program"} classname={""} />
        </Link>
    )
}

export function ListProgramItems() {

    return (
        <div className="programsmainitemscontainer">
            <h2>Recent Projects</h2>
            <div className="programitemscontainer">
                {programitems.map(({ title, image, subtitle, location }) => <SingleProgramItem title={title} location={location} image={image} subtitle={subtitle} key={title} />)}
            </div>
            <button>More Projects</button>
        </div>
    )
}

export function TitledProgramItem({ title, subtitle, image, impact, introtxt, mission, location }: ExtendedProgramItem) {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

    return (
        <>
            <img src={image} alt="projectimage" />
            <div className="titledprogtxtcontainer">
                <div className="titledprogrammaintxtnbtncontainer">
                    <div className="titledmaintxtcontainer">
                        <h2>{title} PROJECT INITIATIVE</h2>
                        <h5>{subtitle}</h5>
                        <span>{location}</span>
                    </div>
                    <button onClick={handleClick}>
                        <img src={donationimg} alt="donationimage" />
                        Donate to Project
                    </button>
                </div>
                <p>{introtxt}</p>
                <div className="missioncontainer">
                    <h3>Project Goals</h3>
                    <ul>
                        {mission.map((el) => <li key={el.split(' ')[0]}>{el}</li>)}
                    </ul>
                </div>
                <div className="impactcontainer">
                    <h3>Project Impact</h3>
                    <div className="impactlistcontainer">
                        {impact.map(({ value, title }) => <div className="impactitemcontainer" key={title}>
                            <h5>{value}</h5>
                            <h6>{title}</h6>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export function TitledProgramItem_v2({ title, subtitle, image, impact, introtxt, mission, location }: ExtendedProgramItem) {

    return(
        <>
            
        </>
    )

    }

export function ProgrammHero_v2() {

    return (
        <div className="newprogramherocontainer">
            <h1>Programs; For the Community, With the Community, <br /> To the Community</h1>
            <p>{programintro.introtxt}</p>
            <h4>Major Factors of Concern in slums that Our Organization puts effort and tries to solve through Our Programs</h4>
            <div className="newprogramimgnstatcontainer">
                <div className="newprogramimgstatitemcontainer">
                    <img src={nutrition} alt="nutrition" />
                    <p><strong>Nutrition</strong></p>
                </div>
                <div className="newprogramimgstatitemcontainer">
                    <img src={education} alt="Education" />
                    <p><strong>Education</strong></p>
                </div>
                <div className="newprogramimgstatitemcontainer">
                    <img src={health} alt="Health" />
                    <p><strong>Health</strong></p>
                </div>
            </div>
        </div>
    )
}

export function ProgramHero_v3() {

    return (
        <div className="herov3container">
            <img src={TwinkleB} alt="" className="herov3imgcontainer" />
            <div className="headertxtnstatscontainer">
                <h1>For the Community, With the Community, To the Community</h1>
                <div className="newprogramimgnstatcontainer">
                    <div className="newprogramimgstatitemcontainer">
                        <img src={nutrition} alt="nutrition" />
                        <p><strong>Nutrition</strong></p>
                    </div>
                    <div className="newprogramimgstatitemcontainer">
                        <img src={education} alt="Education" />
                        <p><strong>Education</strong></p>
                    </div>
                    <div className="newprogramimgstatitemcontainer">
                        <img src={health} alt="Health" />
                        <p><strong>Health</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}