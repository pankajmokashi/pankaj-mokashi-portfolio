const logo = [
  {
    name: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    link: "https://react.dev/",
  },
  {
    name: "Vite",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    link: "https://vite.dev/",
  },
  {
    name: "Redux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    link: "https://redux.js.org/",
  },

  {
    name: "Tailwind CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    link: "https://firebase.google.com/",
  },
  {
    name: "Node",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/en",
  },
  {
    name: "Mongoose",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    link: "https://mongoosejs.com/",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    link: "https://github.com/",
  },
  {
    name: "VS code",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Vercel",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    link: "https://vercel.com/home",
  },
  {
    name: "Netlify",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
    link: "https://www.netlify.com/",
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#202020] text-white">
      <div className="mx-auto max-w-screen-xl px-4 xm:px-8 md:px-16 py-8 xm:py-16">
        <h2 className="text-3xl xm:text-5xl font-medium">Skills</h2>
        <div className="w-[120px] xm:w-[150px] h-1 bg-red-500 mt-6"></div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="lg:w-1/2 pt-8 lg:pt-16">
            <div className="w-full gap-4 xm:gap-8 grid grid-cols-4 xm:grid-cols-5 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5">
              {logo.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  className="group hover:relative w-full h-full p-2 md:p-4 bg-white rounded-md hover:scale-95"
                >
                  <img src={item.url} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-3xl font-medium h-12 lg:h-16 lg:pl-8">
              Knowledge
            </h3>
            <div className="pl-4 lg:pl-12">
              <ul className="list-disc flex flex-col gap-4 text-xs xm:text-sm sm:text-base xl:text-lg">
                <li>
                  Ability to create layouts that adjust seamlessly across
                  devices{" "}
                </li>
                <li>Solid understanding of JavaScript fundamentals </li>
                <li>
                  Proficiency in React components, JSX, and state management
                </li>
                <li>Experience with Node.js for backend development</li>
                <li>
                  Understanding of REST API design, including HTTP methods, CRUD
                  operations.
                </li>
                <li>
                  Experience with Mongoose for schema management and data
                  validation.
                </li>
                <li>
                  Familiarity of Git for version control and GitHub platform
                </li>
                <li>
                  Experience deploying apps to platforms like Netlify, or Vercel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
