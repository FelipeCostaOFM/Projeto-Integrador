import './index.css';

function HeaderPage() {
    return (
        <>
            <header class="cabecalho">
                <a class="titulo" href="/">ADS EVENTOS</a>
                <nav class="nav">
                    <ul class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contato">Eventos</a></li>
                        <li><a href="/contato">Crie seu Evento</a></li>
                        <li><a href="/sobre">Sobre nós</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default HeaderPage;