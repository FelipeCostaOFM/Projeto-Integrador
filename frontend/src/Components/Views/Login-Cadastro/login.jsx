import { Link } from "react-router-dom";

function Login() {
    return(
        <>
            <div class="container">
                <h1>Login</h1>
                <form id="loginForm">
                    <input type="text" placeholder="Usuário" id="username" />
                    <input type="password" placeholder="Senha" id="password" />
                    <Link to={'/Home'}>
                        <button type="submit">Entrar</button>
                    </Link>
                </form>
            </div>
        </>
    )
};

export default Login;