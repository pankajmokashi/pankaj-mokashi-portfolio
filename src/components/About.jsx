function About() {
  return (
    <section id="about-me" className="bg-[#202020] text-white">
      <div className="mx-auto max-w-screen-xl px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <h2 className="sr-only">About me</h2>
            <div className="text-lg xm:text-xl font-semibold">
              Passionate Web Developer, enjoy building dynamic and responsive
              web applications that solve real-world problems.
            </div>
            <div className="w-[200px] h-1 bg-red-500 mt-6 mb-6 xm:mb-12"></div>
            <div className="text-sm xm:text-base">
              My name is Pankaj Mokashi — I have a background in computer
              science, with a Bachelor of Engineering (BE) degree. I am Eager to
              apply my skills to contribute to innovative web projects and grow
              within a dynamic development team. I am passionate about coding
              and always strive to expand my knowledge and skills. My work ethic
              is driven by curiosity and a love for problem-solving, and
              I&apos;m dedicated to creating efficient and innovative solutions.
            </div>
            <div className="mt-8 lg:mt-12 text-sm xm:text-base font-medium">
              Lifelong learner constantly exploring new tools, frameworks, and
              best practices to stay current with industry trends.
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex items-center justify-center">
            {/* <div className="bg-red-500 w-[200px] h-[200px] xm:w-[250px] xm:h-[250px] p-4 rounded-full flex items-center justify-center"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
