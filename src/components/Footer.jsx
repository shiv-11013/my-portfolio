function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-main">
          © 2025 SHIV KUMAR · All rights reserved
        </p>

        <p className="footer-sub">
          Built with ❤️ using React and Bootstrap
        </p>

        <p className="footer-sub">
          Learning full stack development at
          <a
            href="https://neog.camp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            neog.camp
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
