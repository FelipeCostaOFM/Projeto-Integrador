function NewEvent() {
    return(
        <>
            <div class="container">
                <h1>Criar Evento</h1>
                <form id="eventForm">
                    <input type="text" placeholder="Nome do Evento" id="eventName" />
                    <input type="text" placeholder="Data" id="eventDate" />
                    <input type="text" placeholder="Hora" id="eventTime" />
                    <input type="text" placeholder="Estado" id="eventState" />
                    <input type="text" placeholder="Cidade" id="eventCity" />
                    <input type="text" placeholder="Bairro" id="eventNeighborhood" />
                    <input type="text" placeholder="Rua" id="eventRoad" />
                    <input type="text" placeholder="Numero" id="eventNumber" />
                    <select id="eventCategory">
                    <option value="" disabled selected>Escolha o gênero musical</option>
                    <option value="Rock">Rock</option>
                    <option value="Eletrônica">Eletrônica</option>
                    <option value="Sertanejo">Sertanejo</option>
                    <option value="Samba">Samba</option>
                    <option value="Pagode">Pagode</option>
                    </select>
                    <textarea placeholder="Descrição" id="eventDescription"></textarea>
                    <button type="submit">Criar Evento</button>
                </form>
            </div>
        </>
    )
};

export default NewEvent;