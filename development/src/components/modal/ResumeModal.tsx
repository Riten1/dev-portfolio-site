"use client";
import dynamic from "next/dynamic";
import React from "react";

const PDFViewerComponent = dynamic(() => import("../../components/PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      Loading PDF...
    </div>
  ),
});

export const ResumeModal = () => {
  return (
    <div className="custom-scrollbar w-full h-[90vh] overflow-auto">
      <PDFViewerComponent />
    </div>
  );
};
