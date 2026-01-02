import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const cards = [
    {
      type: "Email",
      icon: <FiMail />,
      detail: "mailto:shivkumar121112@gmail.com",
      action: "shivkumar121112@gmail.com",
      isLink: true,
    },
    {
      type: "GitHub",
      icon: <FaGithub />,
      detail: "https://github.com/",
      action: "Follow on GitHub",
      isLink: true,
    },
    {
      type: "LinkedIn",
      icon: <FaLinkedin />,
      detail: "https://www.linkedin.com/in/shiv-kumar-19a3263a4/",
      action: "Connect on LinkedIn",
      isLink: true,
    },
    {
      type: "Twitter",
      icon: <FaTwitter />,
      detail: "twitter.com/username",
      action: "Follow on Twitter",
      isLink: false,
    },
  ];

  return (
    <section className="projects-portfolio" id="contact">
      <h3>Connect</h3>
      <p>Lets collaborate on something amazing together</p>

      {/* Cards */}

      <div className="card-container1">
        <div className="card1">
          <div className="card-body1">
            {cards.map((card, index) => {
              const Content = (
                <div className="card-item1">
                  <h3>
                    <span className="card-icon">{card.icon}</span>
                    {card.type}
                  </h3>
                  <p>{card.action}</p>
                </div>
              );

              return card.isLink ? (
                <a
                  key={index}
                  href={card.detail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-wrapper"
                >
                  {Content}
                </a>
              ) : (
                <div key={index} className="contact-no-link">
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
