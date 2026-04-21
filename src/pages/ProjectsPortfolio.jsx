function ProjectsPortfolio() {
  const projects = [
    {
      num: "01",
      title: "MyShoppingSite",
      desc: "E-commerce platform with authentication, cart management, and product browsing.",
      tags: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
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
              <a href={p.live}>Live ↗</a>
              <a href={p.github}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
