import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component {
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPasword] = useState("");
    // const [rePassword, setRePassword] = useState("");

    state = {
        response: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        rePassword: "",
        responseToPost: "",
    };

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ response: res.express }))
            .catch((err) => console.log(err));
    }

    callApi = async () => {
        const response = await fetch("/api/user/register");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post: this.state.post,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                password: this.state.password,
                rePassword: this.state.rePassword,
            }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };

    render() {
        return (
            <div className="register">
                <div className="register__container">
                    <h1>Kaydol</h1>
                    <p>{this.state.responseToPost}</p>
                    <form onSubmit={this.handleSubmit}>
                        <h5>İsim</h5>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(e) =>
                                this.setState({
                                    name: e.target.value,
                                })
                            }
                        />
                        <h5>Soyisim</h5>
                        <input
                            type="text"
                            value={this.state.surname}
                            onChange={(e) =>
                                this.setState({
                                    surname: e.target.value,
                                })
                            }
                        />
                        <h5>E-mail</h5>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={(e) =>
                                this.setState({
                                    email: e.target.value,
                                })
                            }
                        />

                        <h5>Şifre</h5>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(e) =>
                                this.setState({
                                    password: e.target.value,
                                })
                            }
                        />

                        <h5>Şifre Tekrar</h5>
                        <input
                            type="password"
                            value={this.state.rePassword}
                            onChange={(e) =>
                                this.setState({
                                    rePassword: e.target.value,
                                })
                            }
                        />
                        <button
                            className="register__signInButton"
                            type="submit"
                        >
                            Giriş Yap
                        </button>
                    </form>
                    <p>Hesabınız yok mu? Hemen Kayit Olun.</p>
                    <Link to="/login">
                        <button className="register__registerButton">
                            Kayıt Ol
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Register;
