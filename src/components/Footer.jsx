function Footer() {
  return (
    <footer
      id="get-in-touch"
      className="relative bg-cover bg-fixed"
      style={{ backgroundImage: "url(/pic2.jpg)", backgroundPosition: "50%" }}
    >
      <div className="mx-auto min-h-screen max-w-screen-xl flex items-center justify-center px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <div
          style={{ textShadow: "rgb(115 95 95 / 82%) 2px 2px 10px" }}
          className="h-full flex flex-col items-center justify-center text-center text-white"
        >
          <h2 className="text-4xl xm:text-5xl sm:text-6xl font-semibold">
            Get In Touch
          </h2>
          <div className="w-[200px] h-1 bg-red-500 mt-6 mb-12"></div>
          <div className="text-base xm:text-lg font-medium">
            Have a project in mind or just want to say hi? Feel free to send me
            a message!
          </div>
          <div className="mt-8 flex items-center gap-16">
            <a
              href="https://www.linkedin.com/in/pankajmokashi/"
              target="_blank"
            >
              <img
                className="w-8 hover:scale-125"
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/pankajmokashi" target="_blank">
              <img
                className="w-8 hover:scale-125"
                src="/github.svg"
                alt="github"
              />
            </a>
            <a href="mailto:pankajmokashi12@gmail.com">
              <img
                className="w-8 mt-1 hover:scale-125"
                src="/mail.svg"
                alt="mail"
              />
            </a>
          </div>
          <div className="text-sm xm:text-base mt-16 font-medium">
            © Pankaj Mokashi 2024
          </div>
        </div>
      </div>
      <a href="/" className="absolute bottom-2 left-2">
        <img className="w-20 h-20" src="logo.png" alt="logo" />
      </a>
    </footer>
  );
}

export default Footer;
