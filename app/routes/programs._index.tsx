import { ListProgramItems, ProgramsHero } from "~/components/programscomponents";
import '../components/routestyles/programs.css'
import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Programs | Taabasamu" },
    { name: "description", content: "Our Programs" },
  ];
};

export default function TaabasamuPrograms(){

    return(
        <div className="routesmainlayoutcontainer" id="mainprograms">
            <ProgramsHero/>
            <ListProgramItems/>
        </div>
    )
}