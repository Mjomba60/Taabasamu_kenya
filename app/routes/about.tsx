import { MetaFunction } from "@remix-run/node";
import { AboutCoreValues, AboutHero, AboutHero_v2, AboutImpact, AboutIntro, AboutMission, AboutTeamMembers, AboutVision } from "~/components/aboutcomponents";
import '../components/routestyles/about.css'

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | Taabasamu" },
    { name: "description", content: "About Us" },
  ];
};
export default function About(){

    return(
        <div className="routesmainlayoutcontainer" id="aboutus">
            {/* <AboutHero/> */}
            <AboutHero_v2/>
            <AboutIntro/>
            <AboutCoreValues/>
            <AboutMission/>
            <AboutVision/>
            <AboutTeamMembers/>
            <AboutImpact/>
            
        </div>
    )
}