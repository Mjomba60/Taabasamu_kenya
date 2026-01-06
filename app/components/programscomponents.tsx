import { Link, useNavigate } from "@remix-run/react";
import { ExtendedProgramItem, programintro, ProgramItem, programitems } from "./componentdata/tabasamuprograms";
import donationimg from '../images/donationv3.png'
import { UIEvent } from "react";

export function ProgramsHero() {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

    return (
        <div className="routemainherocontainer">
            <img src={programintro.image} alt="programheroimage" />
            <div className="routemainherotxtcontainer">
                <h1>A LIGHT OUT OF THE TUNNEL</h1>
                <p>{programintro.introtxt}</p>
                <button onClick={handleClick}>Donate to programs</button>
            </div>
        </div>
    )
}

function SingleProgramItem({ title, image, subtitle, location }: ProgramItem) {

    const btn_navigator = useNavigate()

    function handleClick(event: UIEvent) {

        if (event.type == 'click') {
            btn_navigator('/donate')
        }
    }

    return (
        <Link to={title.toLowerCase()} className="programitemcontainer">
            <img src={image} alt="programimage" />
            <div className="projectitemmaintxtnbtncontainer">
                <div className="projectitemtxtcontainer">
                    <h4>{title} PROJECT</h4>
                    <span>{location}</span>
                </div>
                <button onClick={handleClick}>Support Project</button>
            </div>
            <p>{subtitle}</p>
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