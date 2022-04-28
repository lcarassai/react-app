import React, { useState } from 'react'

const ItemCount = ({ nombre, stock, initial = 1, onAdd }) => {

    const [qty, setQty] = useState(initial);

    const increment = () => setQty(qty + 1)
    const decrement = () => setQty(qty - 1)

    const onClick = () => onAdd(`Se agrego ${nombre} con cantidad ${qty}`)

    return (
        <div className='bg-white p-3 rounded' style={{ width: 300 }}>
            <div className='text-dark'>
                {nombre}
            </div>

            <div className='bg-white card my-2 shadow-sm'>
                <div className='card-body p-0 d-flex justify-content-between'>
                    <button disabled={qty === initial} className='btn btn-link' onClick={decrement}>
                        <i className="bi bi-dash text-primary"></i>
                    </button>

                    <span className='text-primary align-items-center'>{qty}</span>

                    <button disabled={qty === stock} className='btn btn-link' onClick={increment}>
                        <i className="bi bi-plus text-primary"></i>
                    </button>
                </div>
            </div>

            <button className='btn btn-primary w-100' onClick={onClick}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;