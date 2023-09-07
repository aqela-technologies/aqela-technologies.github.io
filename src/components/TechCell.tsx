import React from "react";

export default function TechCell({
  number,
  title,
  description,
}: {
  number: string;
  title: string | React.ReactNode;
  description?: string;
}) {
  return (
    <div className="group mx-auto aspect-square w-[300px] max-w-full bg-gradient-to-br from-primaryOrange to-primaryPurple p-[1px] sm:w-[410px] lg:mx-0 lg:h-[400px]">
      <div className="flex h-full w-full flex-col justify-between gap-2 bg-primaryBlack p-6 sm:p-8">
        <p className="w-fit bg-primaryPurple px-4 text-xl text-primaryWhite">{number}</p>
        <p className="overflow-y-auto text-primaryWhite opacity-0 transition-all group-hover:opacity-100">
          {description}
        </p>
        <p className="font-new-alenia text-xl uppercase text-primaryWhite md:text-4xl">{title}</p>
      </div>
    </div>
  );
}
