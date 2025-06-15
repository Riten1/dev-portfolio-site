import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React from "react";

const PDFViewerComponent = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <Viewer
        enableSmoothScroll={true}
        defaultScale={SpecialZoomLevel.PageFit}
        fileUrl={"/RitenGurung_updatedCV.pdf"}
      />
    </Worker>
  );
};

export default PDFViewerComponent;
