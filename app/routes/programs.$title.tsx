import { useParams } from "@remix-run/react"
import { extendedprogramitems } from "~/components/componentdata/tabasamuprograms"
import { TitledProgramItem } from "~/components/programscomponents"
import '../components/routestyles/titleprogram.css'
import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = ({params}) => {
  return [
    { title: extendedprogramitems.find((item) => item.title.toLowerCase() == params.title?.toLocaleLowerCase())?.title.concat(' PROJECT') },
    { name: "description", content: extendedprogramitems.find((item) => item.title.toLowerCase() == params.title?.toLocaleLowerCase())?.introtxt },
  ];
};

export default function TabasamuTitledProgram(){

    const {title} = useParams()

    const resultdata = extendedprogramitems.find((item) => item.title.toLowerCase() == title?.toLocaleLowerCase())

    return(
        <div className="titledprogramaincontainer">
            <TitledProgramItem title={resultdata!.title} subtitle={resultdata!.subtitle} image={resultdata!.image} introtxt={resultdata!.introtxt} location={"Kibra, Nairobi"} mission={resultdata!.mission} impact={resultdata!.impact} />
        </div>
    )
}