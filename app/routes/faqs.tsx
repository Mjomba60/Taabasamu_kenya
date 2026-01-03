import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQS" },
    { name: "description", content: "Frequently Asked Questions will help you easily navigate through our site, answer some of the questions that you may have concerning taabasamu" },
  ];
};

export default function Faqs(){

    return(
        <div className="routesmainlayoutcontainer" id="faqs">
            <h1>FREQUENTLY AKSED QUESTIONS</h1>
        </div>
    )
}