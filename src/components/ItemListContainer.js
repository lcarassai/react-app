import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = () => {

    const onAdd = value => alert(value);

    return (
        <main className="App-header">
            <h1>Tienda Foxie</h1>

            <br />

            <ItemCount nombre="Zapato odra" stock={5} onAdd={onAdd} />

            <br />

            <ItemCount nombre="Zapato Lara" stock={10} onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer;