"use client";
import CooperativeVision from "@/components/cooperativevision";
import PDFViewer from "@/components/pdf-viewer";
import ProductPage from "@/components/products";
// import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="container flex flex-col h-screen items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <CooperativeVision />
          <div className="h-[330px] mx-auto">
            <PDFViewer fileUrl="/THE STORY OF FATIMA.pdf" />
          </div>
        </div>
        <div className="h-full">
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Page;
