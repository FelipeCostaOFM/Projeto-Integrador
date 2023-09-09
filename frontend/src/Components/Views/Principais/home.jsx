import { Link } from "react-router-dom";


function Home() {
    return(
        <>
            <div class="container">
                <h1 class="circlinho">Próximos Eventos</h1>
                <Link to={'/NewEvent'}>
                    <button type="submit">Crie Seu Evento</button>
                </Link>
                <div class="event-grid">
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                    <div class="event-box">
                        <h2>Nome do Evento 1</h2>
                        <p>Data: 01/10/2023</p>
                        <p>Local</p>
                        <p>Hora: 19:00</p>
                        <button class="info-button">Acessar Evento</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;