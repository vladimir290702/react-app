import './Register.css'

function Register() {
    return (
        <div className="register-wrapper">
            <div className="register">
                <h1 className="register-title">Sign In</h1>
                <div className="register-group">
                    <input className="register-input" type="text" required="{true}" />
                    <label className="register-label">Email</label>
                </div>
                <div className="register-group">
                    <input className="register-input" type="password" required="{true}" />
                    <label className="register-label">Password</label>
                </div>
                <div className="register-group">
                    <input className="register-input" type="password" required="{true}" />
                    <label className="register-label">Repeat Password</label>
                </div>
                <button className="register-btn" type="button">Sign In</button>
            </div>
        </div>

    );
}

export default Register;