function Resume() {
  return (
    <section id="resume" className="bg-red-500 text-white">
      <div className="mx-auto max-w-screen-xl px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <h2 className="sr-only">Resume</h2>
        <div className="flex flex-col items-center">
          <div className="text-xl xm:text-3xl sm:text-4xl lg:text-5xl text-center font-extralight mb-8">
            Please click below to see my resume.
          </div>
          <button className="text-sm sm:text-base border-2 px-6 py-2 rounded-xl hover:bg-white hover:text-red-500 hover:font-medium">
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
