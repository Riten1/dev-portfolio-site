"use client";
import dynamic from "next/dynamic";
import React from "react";

const PDFViewer = dynamic(() => import("../PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  ),
});

export const ResumeModal = () => {
  return (
    <div className="custom-scrollbar w-full h-[90vh] overflow-auto bg-gray-100">
      <PDFViewer />
    </div>
  );
};
