import { Link } from "react-router-dom";
import "./index.css"

function Login() {
    return(
        <>
            <div class="container-login">
                <h1>Login</h1>
                <form id="loginForm">
                    <input type="text" placeholder="Usuário" id="username" />
                    <input type="password" placeholder="Senha" id="password" />
                    <Link to={'/Home'}>
                        <button type="submit">Sign In</button>
                    </Link>
                        <p>do you not have a account?
                            <Link to={"/SignUp"}>
                                <button type="button">click here</button>
                            </Link>
                        </p>
                </form>
            </div>
        </>
    )
};

export default Login;