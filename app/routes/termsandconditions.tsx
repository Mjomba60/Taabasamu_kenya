import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms and Conditions" },
    { name: "description", content: "Understand our legal terms and conditions that we use and will have you under as you traverse through the taabasamu site." },
  ];
};

export default function Faqs(){

    return(
        <div className="routesmainlayoutcontainer" id="tnc">
            <h1>OUR TERMS AND CONDITIONS</h1>
        </div>
    )
}