import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="social-media">
                    <a href="/facebook" className="fa fa-facebook"></a>
                    <a href="/twitter" className="fa fa-twitter"></a>
                    <a href="/instagram" className="fa fa-instagram"></a>
                    <a href="/youtube" className="fa fa-youtube"></a>
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

export default Footer;