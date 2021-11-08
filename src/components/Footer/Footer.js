import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="social-media">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-youtube"></a>
                </div>
            </div>
            <div className="container">
                <div className="copy">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                        <a href="#">Netflix</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;