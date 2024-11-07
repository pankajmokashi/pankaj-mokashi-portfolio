import { useState } from "react";
import { saveAs } from "file-saver";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  if (show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleDownload = () => {
    saveAs("/Pankaj-Mokashi-Resume.pdf", "Pankaj-Mokashi-Resume"); // Triggers the download of the file
  };

  return (
    <section id="resume" className="bg-red-500 text-white">
      <div className="mx-auto max-w-screen-xl px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <h2 className="sr-only">Resume</h2>
        <div className="flex flex-col items-center">
          <div className="text-xl xm:text-3xl sm:text-4xl lg:text-5xl text-center font-extralight mb-8">
            Please click below to see my resume.
          </div>
          <button
            onClick={toggleModal}
            className="text-sm sm:text-base border-2 px-6 py-2 rounded-xl hover:bg-white hover:text-red-500 hover:font-medium"
          >
            My Resume
          </button>
        </div>
      </div>
      {show && (
        <div className="modal z-10">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="absolute top-10 bottom-10 left-2 sm:left-10 right-2 sm:right-10 bg-white text-black rounded-xl p-2 py-16 sm:p-16">
            <div className="w-full h-full overflow-auto">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="/Pankaj-Mokashi-Resume.pdf" />
              </Worker>
            </div>
            <div className="absolute top-0 right-12 m-2 flex items-center">
              <button
                onClick={handleDownload}
                className="p-2 hover:bg-slate-200 rounded-lg"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </button>
              <button
                onClick={toggleModal}
                className="p-2 hover:bg-slate-200 rounded-lg"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;
