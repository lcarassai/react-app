import Logo from '../logo.svg'

const NavBar = () => {

    return (
        <header>
            <div className='d-flex justify-content-center'>
                <img src={Logo} width="50" height="50" alt='Foxie' title='Foxie' />

                <i className="bi bi-cart position-absolute text-white" style={{ top: 15, right: 30 }}></i>
            </div>

            <div className='d-flex justify-content-around'>
                <span>Inicio</span>
                <span>Productos</span>
                <span>Preguntas Frecuentes</span>
                <span>¿Qué talle soy?</span>
                <span>Contacto</span>
            </div>
        </header>
    )
}

export default NavBar