import { EventSectionContainer, NewsSectionContainer } from "~/components/newsneventscomponents";
// import newsletterimg from '../images/newsletter.png'
import '../components/routestyles/newsnevents.css'
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "News and events | Taabasamu" },
    { name: "description", content: "Our news and events" },
  ];
};

// news are fetched from facebook developer account
// events are fetched from ticketstripe account
export default function NewsNEvents(){

    return(
        <div className="newsneventsmaincontainer">
            <NewsSectionContainer/>
            <EventSectionContainer/>
        </div>
    )
}