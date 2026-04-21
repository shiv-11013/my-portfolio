function ProjectsPortfolio() {
  const projects = [
    {
      title: "MyShoppingSite",
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      desc: "E-commerce platform with auth, cart, filters",
      tech: ["React", "Node", "MongoDB"],
      live: "https://my-shoping-site-front-end-2oah.vercel.app/",
      github: "https://github.com/your-repo",
    },
  ];

  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.img} alt="project" />

            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div>
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div>
                <a href={project.live} target="_blank">
                  Live
                </a>
                <a href={project.github} target="_blank">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
