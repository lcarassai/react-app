const NavBar = () => {

    const estilos = {
        border: 'solid yellow 1px',
        color: 'grey'
    }
    return (
        <div>
            <li style={estilos}>Inicio</li>
            <li style={estilos}>Productos</li>
            <li style={estilos}>Preguntas Frecuentes</li>
            <li style={estilos}>¿Qué talle soy?</li>
            <li style={estilos}>Contacto</li>

        </div>
    )
}

export default NavBar