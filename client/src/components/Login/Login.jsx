import { useState } from "react";
import axios from "axios";
import "./login.css";
import Ellipse1 from "../img/ellipse1.png";
import Ellipse2 from "../img/ellipse2.png";
import Vector from "../img/vector.png";
import Person from "../img/person-icon.png";
import Key from "../img/key.png";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container">
			<img className="ellipse-first" src={Ellipse1} alt="logo" />
			<img className="ellipse-second" src={Ellipse2} alt="logo" />
			<img className="vector" src={Vector} alt="logo" />
		
					<form className= "container-form" onSubmit={handleSubmit}>
						<h1>Login </h1>
						<p>Please enter you Login and your Password</p>
						<div className="input-border">
						<img className="person" src={Person} alt="logo" />
						<input
							type="email"
							placeholder={"Username or Email"}
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						</div>
					<div className="input-border">
						<img className="key" src={Key} alt="logo" />
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						</div>
						{error && <div className="error-warning">{error}</div>}
						<button type="submit" className="login-btn">
							Login
						</button>
					</form>
				</div>
	);
};
export default Login;