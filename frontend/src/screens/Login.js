import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    return (
        <div className="login">
            <div className="login__container">
                <h1>Giriş Yap</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Sifre</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPasword(e.target.value)}
                    />

                    <button className="login__signInButton">
                        Giriş Yap
                    </button>
                </form>
                <p>Hesabınız yok mu? Hemen Kayit Olun.</p>
                <button className="login__registerButton">
                    Kayıt Ol
                </button>
            </div>
        </div>
    );
}

export default Login;
