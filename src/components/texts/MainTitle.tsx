import React from "react";

export default function MainTitle({children, className=""}: { children: any,className?:string }) {


    return <h1
        className={`text-primaryWhite font-new-alenia uppercase text-9xl text-left w-full font-bold my-36 ${className}`}>
        {children}
    </h1>

}
