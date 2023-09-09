import './index.css';

function HeaderPage() {
    return(
        <>
            <header className='HeaderPage'>
                <div className='header-content'>
                    <h1>
                        ADS <br/>
                        Events
                    </h1>

                    <nav className='navbar'>
                        <ul>
                            <li>Home</li>
                            <li>Contato</li>
                            <li>Sobre</li>
                        </ul>
                    </nav>
                </div>
            </header>    
        </>
    )
};

export default HeaderPage;