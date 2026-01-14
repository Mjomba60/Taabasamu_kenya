import { Navigate } from "@remix-run/react";
import { eventintro, EventItem, NewsItemType, samplenews, samplevents } from "./componentdata/newsnevents";
import { BookmarkIcon, CommentIcon_v2, FacebookIcon, InstagramIcon, LikeIcon, LinkedInIcon, MediumIcon, TwitterIcon } from "./icons";

export function NewsHero() {

    return (
        <div className="routemainherocontainer">
            <img src={eventintro.introimg} alt="heroimage" />
            <div className="routemainherotxtcontainer">
                <h1>STAY UPDATED AND INFORMED ON THE TAABASAMU JOURNEY</h1>
                <p>{eventintro.introtxt}</p>
            </div>
        </div>
    )
}

function NewsSectionItem({ newsimage, newstitle, source, likes, comments, link, date }: NewsItemType) {


    return (
        <a href={link} className="newsitemlinkmaincontainer">
            <div className="newsitemcontaier">
                <img src={newsimage} alt="" />
                <div className="newsitemtxtcontainer">
                    <h3>{newstitle}</h3>
                    <p>{date}</p>
                    <div className="sourceniconcontainer">
                        {source == 'facebook' ? <FacebookIcon /> : source == 'linkedin' ? <LinkedInIcon /> : source == 'medium' ? <InstagramIcon /> : <TwitterIcon />}
                        <div className="iconinfocontainer">
                            <div className="icontxtcontainer">
                                <LikeIcon />
                                <span>{likes}</span>
                            </div>
                            <div className="icontxtcontainer">
                                <CommentIcon_v2 />
                                <span>{comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export function NewsSectionContainer() {

    return (
        <div className="newsectioncontainer">
            <h2>Recent News</h2>
            <div className="newsitemsconatiner">
                {samplenews.map(({ newsimage, newstitle, source, date, likes, comments, link }) => <NewsSectionItem newsimage={newsimage} newstitle={newstitle} source={source} likes={likes} comments={comments} date={date} key={newstitle} link={link} />)}
            </div>

            <button>More News</button>
        </div>
    )
}

// Update component to include buttons for sharing and donating plus other fxn btns
function EventSectionItem({ name, event_img, category, date, description, donation_link, location }: EventItem) {

    function handleClick() {
        Navigate({ to: donation_link })
    }

    return (
        <div className="eventitemcontainer">
            <img src={event_img} alt="eventimage" />
            <div className="eventitemtxtcontainer">
                <div className="eventitemtitlencategorycontainer">
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
                <div className="categoryndatecontainer">
                    <p>{date}</p>
                    <p>{location.name}</p>
                </div>
                <div className="eventitembtncontainer">
                    <button className="eventbtnitem">
                        <BookmarkIcon /> 19
                    </button>
                    <button className="eventbtnitem">
                        <LikeIcon /> 32
                    </button>
                    <button className="buttonmain"
                    onClick={handleClick}>
                        Support Event
                    </button>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function EventSectionContainer() {

    return (
        <div className="newsectioncontainer eventsectioncontainer">
            <h2>Recent Events</h2>
            <div className="eventitemscontainer">
                {samplevents.map(({ name, event_img, category, date, description, donation_link, location }) => <EventSectionItem key={name} name={name} event_img={event_img} category={category} date={date} description={description} donation_link={donation_link} location={location} />)}
            </div>
            <button>More Events</button>
        </div>
    )
}

export function SubscriptionForm() {

    return (
        //Add form to allow user to subscribe to news letter or connect through the socials

        <form className="newsheroformaincontainer">
            <h3>Stay Updated</h3>
            <p>Subscribe to our News Letter</p>
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
    )
}