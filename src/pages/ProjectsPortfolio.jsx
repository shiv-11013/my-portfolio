function ProjectsPortfolio() {
  const projects = [
    {
      num: "01",
      title: "Kaviox",
      desc: "Scalable backend for an image management platform with Google OAuth login, JWT-based authentication, album ownership & sharing system, secure image access middleware, ImageKit integration, and features like tagging, favorites, and comments.",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Passport.js", "ImageKit"],
      live: "https://kavios-px-frontend-kcsg.vercel.app/",
      frontend: "https://github.com/shiv-11013/kaviosPX-Frontend",
      backend: "https://github.com/shiv-11013/kaviosPx",
    },
    {
      num: "02",
      title: "Chat Application",
      desc: "Real-time chat application with JWT authentication, one-to-one messaging, typing indicators, message status tracking (sent, delivered, seen), and Socket.io-based live communication. Includes REST APIs for users and messages, and MongoDB for persistent storage.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      live: "https://chat-application-frontend-plum-theta.vercel.app/",
      frontend: "https://github.com/shiv-11013/chatApplication-Frontend",
      backend: "https://github.com/shiv-11013/chatApplication-Backend",
    },
    {
      num: "03",
      title: "Anvaya CRM",
      desc: "Full-stack CRM system with lead lifecycle management, agent assignment, advanced filtering via query parameters, and analytics dashboard. Features include CRUD operations, real-time form validation, centralized state management using Context API, and data visualization using charts for business insights.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Context API",
        "Chart.js",
      ],
      live: "https://anvaya-frontend-zeta.vercel.app/",
      frontend: "https://github.com/shiv-11013/anvaya-frontend",
      backend: "https://github.com/shiv-11013/anvaya-backend",
    },
    {
      num: "04",
      title: "MyShoppingSite",
      desc: "E-commerce platform with authentication, cart management, and product browsing.",
      tags: ["React", "Node.js", "MongoDB"],
      live: "https://my-shopping-site-front-end-2oah.vercel.app/",
      frontend: "https://github.com/shiv-11013/myShoppingSite-FrontEnd",
      backend: "https://github.com/shiv-11013/myShoppingSite-BackEnd",
    },
  ];

  return (
    <section className="projects" id="projects">
      <p className="section-label">// work</p>
      <h1 className="section-title">Projects</h1>

      <div className="card-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <p className="card-num">{p.num}</p>
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>

            <div className="card-tags">
              {p.tags.map((t, j) => (
                <span className="tag" key={j}>
                  {t}
                </span>
              ))}
            </div>

            <div className="card-buttons">
              {p.live !== "#" && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              )}
              {p.frontend && (
                <a href={p.frontend} target="_blank" rel="noopener noreferrer">
                  Frontend
                </a>
              )}
              {p.backend && (
                <a href={p.backend} target="_blank" rel="noopener noreferrer">
                  Backend
                </a>
              )}
              {!p.live ||
                (p.live === "#" && !p.frontend && !p.backend && (
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
