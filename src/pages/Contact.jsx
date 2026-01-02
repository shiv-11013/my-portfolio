import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const cards = [
    {
      type: "Email",
      icon: <FiMail />,
      detail: "shivkumar121112@gmail.com",
      action: "shivkumar121112@gmail.com",
    },
    {
      type: "GitHub",
      icon: <FaGithub />,
      detail: "github.com/username",
      action: "Follow on GitHub",
    },
    {
      type: "LinkedIn",
      icon: <FaLinkedin />,
      detail: "linkedin.com/in/username",
      action: "Connect on LinkedIn",
    },
    {
      type: "Twitter",
      icon: <FaTwitter />,
      detail: "twitter.com/username",
      action: "Follow on Twitter",
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
            {cards.map((card, index) => (
              <div key={index} className="card-item1">
                <h3>
                  <span className="card-icon">{card.icon}</span>
                  {card.type}
                </h3>
                <p>{card.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
