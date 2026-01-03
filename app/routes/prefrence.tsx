import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Prefrences" },
    { name: "description", content: "Set this site to be compatible to your device by adjusting a few items giving you comfort as you navigate through our website." },
  ];
};

export default function Faqs(){

    return(
        <div className="routesmainlayoutcontainer" id="prefrences">
            <h1>COOKIES AND PREFRENCE</h1>
            <h3>Prefrences</h3>
            <h3>Cookies</h3>
        </div>
    )
}