import CooperativeVision from "@/components/cooperativevision";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center m-8">
        <Image alt="" src={"/logo.svg"} width={100} height={100} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <CooperativeVision />
        </div>
        <div className="">e</div>
      </div>
    </div>
  );
};

export default Page;
