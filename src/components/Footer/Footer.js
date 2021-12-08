import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="social-media">
                    <a href="https://facebook.com" className="fa fa-facebook"></a>
                    <a href="https://twitter.com" className="fa fa-twitter"></a>
                    <a href="https://instagram.com" className="fa fa-instagram"></a>
                    <a href="https://youtube.com" className="fa fa-youtube"></a>
                </div>
            </div>
            <div className="container">
                <div className="copy">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                        <a href="/netflix">Netflix</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}