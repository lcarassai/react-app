import Logo from '../logo.svg'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <header>
            <div className='d-flex justify-content-center'>
                <img src={Logo} width="50" height="50" alt='Foxie' title='Foxie' />

                <CartWidget />
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