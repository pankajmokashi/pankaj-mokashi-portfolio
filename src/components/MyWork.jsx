const projects = [
  {
    title: "Museo Sans",
    image: "/museo.jpeg",
    repo: "https://github.com/pankajmokashi/Museo-Sans",
    link: "https://pankajmokashi.github.io/Museo-Sans/",
  },
  {
    title: "Sunnyside",
    image: "/sunnyside.jpeg",
    repo: "https://github.com/pankajmokashi/Sunnyside-landing-page",
    link: "https://sunnyside-responsive-page.netlify.app/",
  },
  {
    title: "Loopstudios",
    image: "/loopstudios.jpeg",
    repo: "https://github.com/pankajmokashi/loopstudios-landing-page",
    link: "https://loopstudios-responsive-page.netlify.app/",
  },
  {
    title: "ACONEWS",
    image: "/aconews.jpeg",
    repo: "https://github.com/pankajmokashi/news-app",
    link: "https://news-app-k89a.vercel.app/",
  },
  {
    title: "Podcast Platform",
    image: "/podcast.png",
    repo: "https://github.com/pankajmokashi/podcast-platform",
    link: "https://react-podcast-platform.netlify.app/",
  },
  {
    title: "Quiz App",
    image: "/quiz.png",
    repo: "https://github.com/pankajmokashi/quiz-app",
    link: "https://quiz-app-frontend-tan.vercel.app/",
  },
];

function MyWork() {
  return (
    <section id="my-work" className="bg-red-500 text-white">
      <div className="mx-auto max-w-screen-xl px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <h2 className="text-3xl xm:text-5xl font-medium">My Work</h2>
        <div className="w-[160px] xm:w-[250px] h-1 bg-black mt-6"></div>
        <div className="mt-8 grid gap-12 grid-cols-2 lg:grid-cols-3 card-grid">
          {projects.map((item, ind) => (
            <div key={ind}>
              <div className="w-full sm:h-[220px] lg:h-[180px] xl:h-[200px] overflow-hidden overflow-y-auto no-scrollbar rounded-lg card">
                <img
                  className="w-full min-h-full rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex items-center justify-between px-2 mt-1">
                <div className="text-lg font-medium">{item.title}</div>
                <div className="flex items-center gap-4">
                  <a href={item.repo} target="_blank" className="rounde-full">
                    <img className="w-6" src="/github.svg" alt="github" />
                  </a>
                  <a href={item.link} target="_blank" className="rounded-full">
                    <svg
                      className="mt-px w-7 font-light"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#FFFFFF"
                    >
                      <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyWork;
