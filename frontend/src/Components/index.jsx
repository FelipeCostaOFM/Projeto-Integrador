import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Views/Login-Cadastro/login';
import Home from './Views/Principais/home';
import NewEvent from './Views/Principais/newEvent';
import HeaderPage from './Views/Header-Footer';
import Cadastro from './Views/Login-Cadastro/cadastro';
function Rotas() {
    return(
        <>
            <BrowserRouter>
                <HeaderPage/>
                <Routes>
                <Route path="*"  element={ < Home /> } />
                    <Route path='/SignIn' element={ < Login /> } />
                    <Route path='/Home' element={ < Home /> } />
                    <Route path='/NewEvent' element={ < NewEvent /> } />
                    <Route path='/SignUp' element={ <Cadastro />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Rotas;