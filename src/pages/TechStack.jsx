function TechStack() {
  const skills = [
    { icon: "⚛️", name: "React" },
    { icon: "▶️", name: "Next.js" },
    { icon: "🧠", name: "Redux" },
    { icon: "📦", name: "Zustand" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "🅱️", name: "Bootstrap" },

    { icon: "🟢", name: "Node.js" },
    { icon: "🚂", name: "Express" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "🪝", name: "Mongoose" },
    { icon: "🐍", name: "Python" },
    { icon: "🔥", name: "Flask" },

    { icon: "🔐", name: "JWT" },
    { icon: "🗄️", name: "PostgreSQL" },
    { icon: "🧪", name: "SQLAlchemy" },

    { icon: "▲", name: "Vercel" },
    { icon: "🚆", name: "Railway" },
    { icon: "⚡", name: "Supabase" },
    { icon: "🔁", name: "CI/CD" },

    { icon: "🐙", name: "GitHub" },
    { icon: "🔧", name: "Git" },
    { icon: "🧪", name: "Testing" },
    { icon: "♿", name: "Accessibility" },
    { icon: "🚀", name: "Performance" },
    { icon: "🧑‍💻", name: "VS Code" },
    { icon: "🛠️", name: "DevTools" },
    { icon: "🟦", name: "TypeScript" },
  ];

  return (
    <section className="projects-portfolio" id="techStack">
      <h1 id="main-name">Tech Stack</h1>
      <p id="main-p">Technologies and tools I work with</p>
      <div className="role-underline"></div>

      <div className="tech-grid">
        {skills.map((skill, index) => (
          <div
            className={`tech-item tech-${skill.name.toLocaleLowerCase()}`}
            key={index}
          >
            <span className="tech-icon">{skill.icon}</span>
            <span className="tech-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
