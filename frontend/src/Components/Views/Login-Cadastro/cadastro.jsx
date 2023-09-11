import { Link } from "react-router-dom";
import "./index.css"

function Cadastro() {
    return(
        <>
            <div class="container-cadastro">
                <h1>Register</h1>
                <form id="loginForm">
                    <input type="text" placeholder="Usuário" id="username" />
                    <input type="email" placeholder="Email" id="email" />
                    <input type="password" placeholder="Senha" id="password" />
                    <input type="password" placeholder="Confirme sua Senha" id="confirm-password" />
                    <Link to={'/SignIn'}>
                        <button type="submit">Sign Up</button>
                    </Link>
                </form>
            </div>
        </>
    )
};

export default Cadastro; 