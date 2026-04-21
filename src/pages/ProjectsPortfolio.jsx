// structure same, styling CSS se control

function ProjectsPortfolio() {
  const projects = [
    {
      title: "MyShoppingSite",
      desc: "E-commerce with auth and cart",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="section-title">Projects</h1>

      <div className="card-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>

            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>

            <div className="card-buttons">
              <a href={p.live}>Live</a>
              <a href={p.github}>Code</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPortfolio;