"use client";
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import React from "react";

export const ResumeModal = () => {
  return (
    <div className=" custom-scrollbar w-full h-[90vh] overflow-auto">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          enableSmoothScroll={true}
          defaultScale={SpecialZoomLevel.PageFit}
          fileUrl={"/RitenGurung_updatedCV.pdf"}
        />
      </Worker>
    </div>
  );
};
