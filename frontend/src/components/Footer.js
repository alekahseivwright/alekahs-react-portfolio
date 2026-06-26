import kittyWaving from "../assets/kitty-waving.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={kittyWaving} alt="" className="footer-kitty" />
            <p>&copy; 2026 Alekah's Portfolio. All rights reserved. Made with 💕 and cats 🐱</p>
        </footer>
    );
}

export default Footer;
