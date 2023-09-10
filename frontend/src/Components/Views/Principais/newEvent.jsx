function NewEvent() {
    return (
        <>
            <div className="container2">
                <h1>Criar Evento</h1>
                <form id="eventForm">
                    <div className="campoform">
                        <label htmlFor="eventName">Nome do Evento:</label>
                        <input type="text" id="eventName" placeholder="Informe o nome do evento" />
                    </div>
                <div className="date-time-container">
                        <div className="campoform">
                            <label htmlFor="eventDate">Data:</label>
                            <input type="date" id="eventDate" />

                            <label htmlFor="eventTime">Hora:</label>
                            <input type="time" id="eventTime" />
                        </div>
                </div>
                    <div className="campoform">
                        <label htmlFor="eventState">Estado:</label>
                        <input type="text" id="eventState" placeholder="Informe o estado" />
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventCity">Cidade:</label>
                        <input type="text" id="eventCity" placeholder="Informe a cidade" />
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventNeighborhood">Bairro:</label>
                        <input type="text" id="eventNeighborhood" placeholder="Informe o bairro" />
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventRoad">Rua:</label>
                        <input type="text" id="eventRoad" placeholder="Informe a rua" />
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventNumber">Número:</label>
                        <input type="text" id="eventNumber" placeholder="Informe o número" />
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventCategory">Gênero Musical:</label>
                        <select id="eventCategory">
                            <option value="" disabled selected>Escolha o gênero musical</option>
                            <option value="Rock">Rock</option>
                            <option value="Eletrônica">Eletrônica</option>
                            <option value="Sertanejo">Sertanejo</option>
                            <option value="Samba">Samba</option>
                            <option value="Pagode">Pagode</option>
                        </select>
                    </div>

                    <div className="campoform">
                        <label htmlFor="eventDescription">Descrição do Evento:</label>
                        <textarea id="eventDescription" placeholder="Descreva o evento"></textarea>
                    </div>

                    <button type="submit">Criar Evento</button>
                </form>
            </div>
        </>
    )
}; 

export default NewEvent;
