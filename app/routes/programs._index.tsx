import { ListProgramItems, ProgramHero_v3, ProgrammHero_v2 } from "~/components/programscomponents";
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
            <ProgramHero_v3/>
            <ListProgramItems/>
        </div>
    )
}