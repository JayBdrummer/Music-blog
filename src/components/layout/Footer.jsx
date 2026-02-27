import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} JayB</p>
      </div>
    </footer>
  );
}

export default Footer;