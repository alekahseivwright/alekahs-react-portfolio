import cloudGazingKitty from "../assets/gifs/cloudgazing_kitty.gif";

function Footer() {
    return (
        <footer className="footer">
            <img src={cloudGazingKitty} alt="" className="footer-kitty" />
            <p>&copy; 2026 Alekah's Portfolio. All rights reserved. Made with 💕 and cats 🐱</p>
        </footer>
    );
}

export default Footer;
