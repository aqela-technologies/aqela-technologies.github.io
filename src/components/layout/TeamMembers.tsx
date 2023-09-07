import {useMemo} from "react";
import Paul from "@/assets/images/png/team/pal.png";
import Ferenc from "@/assets/images/png/team/ferenc.png";
import Mate from "@/assets/images/png/team/mate.png";
import WellOfCourseIKnowHimItsMe from "@/assets/images/png/team/tamas.png";
import Image from "next/image";

const teamMembers = [
    {
        id: "pal",
        name: <>JUHASZ-BOYLAN<br/>PAL</>,
        image: Paul
    },
    {
        id: "feri",
        name: <>DEMETER <br/> FERENC</>,
        image: Ferenc
    },
    {
        id: "mate",
        name: <>ANTAL <br/> MATE</>,
        image: Mate
    },
    {
        id: "ravasz",
        name: <> RAVASZ <br/> TAMAS</>,
        image: WellOfCourseIKnowHimItsMe
    },
]
export default function TeamMembers() {

    const members = useMemo(() => {
        return teamMembers.map((item) => <div key={item.id}>
                <Image src={item.image} alt={`${item.name}`} className="mx-auto"/>
                <p className={`font-new-alenia text-primaryWhite text-4xl text-center capitalize `}>{item.name}</p>
            </div>
        )
    }, [])
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-8">
        {members}
    </div>
}
