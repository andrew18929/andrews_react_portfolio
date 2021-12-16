import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import myResume from "../../assets/Andrew Martinez Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div className="resume">
      <h3 className="heading">Andrew Martinez Resume</h3>
      <a
        href="../../assets/Andrew Martinez Resume.pdf"
        rel="noreferrer"
        target="_blank"
      >
        <Document
          file={myResume}
          onLoadError={console.error}
          style={{ width: "100vw", height: "auto" }}
        >
          <Page pageIndex={0} />
        </Document>
      </a>
    </div>
  );
}
