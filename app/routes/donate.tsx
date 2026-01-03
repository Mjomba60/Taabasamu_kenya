import { DonationFormSectionV2 } from "~/components/donationcomponents";
import '../components/routestyles/donations.css'
import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Donate❤ | Taabasamu" },
    { name: "description", content: "Donate to Taabasamu" },
  ];
};

export default function TaabasamuDonate(){

    return(
        <div className="taabasamudonatemaincontainer">
            {/* <HeroDonationSection/>
            <DonationFormSection/> */}
            <DonationFormSectionV2/>
        </div>
    )
}