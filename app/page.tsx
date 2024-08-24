"use client";
import CooperativeVision from "@/components/cooperativevision";
import PDFViewer from "@/components/pdf-viewer";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center m-4">
        <Image alt="" src={"/logo.svg"} width={100} height={100} />
      </div>
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <CooperativeVision />
          <div className="h-[330px] container mx-auto px-4 sm:px-6 lg:px-8">
            <PDFViewer fileUrl="/test2.pdf" />
          </div>
        </div>
        <div className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white dark:bg-gray-600 rounded-3xl shadow-xl p-4 sm:p-6 overflow-hidden">
              test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
