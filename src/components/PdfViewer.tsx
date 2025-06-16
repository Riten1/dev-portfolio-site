"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(500);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setLoading(false);
      setError(null);
    },
    []
  );

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF. Please try downloading it directly.");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PDF...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center p-8">
          <p className="text-red-500 mb-4 text-lg">{error}</p>
          <a
            href="/RitenGurung_updatedCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    );
  }

  const pageWidth = Math.min(500, windowWidth - 60);

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <div className="flex-1 flex items-start justify-center w-full">
        <Document
          file="/RitenGurung_updatedCV.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="max-w-full"
          loading={
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            </div>
          }
          error={
            <div className="text-center p-8">
              <p className="text-red-500 mb-4">Error loading PDF</p>
              <a
                href="/RitenGurung_updatedCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Download PDF
              </a>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            className="shadow-lg border border-gray-200"
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      {numPages && numPages > 1 && (
        <div className="flex gap-2  align-middle items-center mt-6">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="cursor-pointer w-full sm:w-1/2 px-6 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
          >
            <div className="absolute -bottom-2 -right-2 bg-black h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">
              <ArrowLeft />
            </span>
          </button>
          <span className="font-semibold text-gray-700 text-xs w-1/2">
            {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="cursor-pointer w-full sm:w-1/2 px-6 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
          >
            <div className="absolute -bottom-2 -right-2 bg-black h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">
              <ArrowRight />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
