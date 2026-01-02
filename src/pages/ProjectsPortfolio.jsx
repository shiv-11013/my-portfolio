function ProjectsPortfolio() {
  const projects = [
    {
      title: "MyShoppingSite",
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "A full-stack e-commerce platform with 8+ product categories, user authentication, admin dashboard, wishlist & cart management, and advanced filtering system.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
      url: "https://my-shoping-site-front-end-2oah.vercel.app/",
    },
    {
      title: "Anvaya CRM",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      desc: "A full-stack lead management system with real-time updates, interactive data visualization, and collaborative commenting. Built to help sales teams track leads from initial contact to deal closure.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      url: "https://anvaya-frontend-zeta.vercel.app/",
    },
    // {
    //   title: "Mitra",
    //   img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    //   desc: "An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics.",
    //   tech: ["React Native", "GraphQL", "PostgreSQL", "Chart.js"],
    //   url: "https://haat-demo.com",
    // },
  ];

  return (
    <section className="projects-portfolio" id="projects">
      <h1 id="main-name">Projects</h1>
      <p id="main-p">Building solutions that solve real-world problems</p>
      <div className="role-underline"></div>

      <div className="card-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card" key={index}>
              <img src={project.img} />

              <div className="card-body">
                <h3 className="card-header">{project.title}</h3>

                <p className="card-paragraph">{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <button className="demo-btn">
                    <span className="eye-icon">👁</span>
                    <span className="label">Demo</span>
                  </button>

                  <button className="code-btn">
                    <span className="icon">&lt;/&gt;</span>
                    <span className="label">Code</span>
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
