import './Login.css'

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login-title">Sign In</h1>
                <div className="login-group">
                    <input className="login-input" type="text" required="{true}" />
                    <label className="login-label">Email</label>
                </div>
                <div className="login-group">
                    <input className="login-input" type="password" required="{true}" />
                    <label className="login-label">Password</label>
                </div>
                <button className="login-btn" type="button">Sign In</button>
            </div>
        </div>

    );
}

export default Login;