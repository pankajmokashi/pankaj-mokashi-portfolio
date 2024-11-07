import { useState } from "react";

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
          <div className="absolute top-10 bottom-10 left-10 right-10 bg-white text-black rounded-xl p-16">
            <div className="w-full h-full">
              <embed
                src="/src/assets/Pankaj Mokashi_Resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
            <button
              onClick={toggleModal}
              className="absolute top-0 right-0 m-2 p-3 hover:bg-slate-200 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#000000"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;
