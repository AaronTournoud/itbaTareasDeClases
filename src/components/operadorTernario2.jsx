import React, { useState } from 'react';
const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 999 },
    { id: 2, nombre: 'Smartphone', categoria: 'electronica', precio: 599 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25, oferta: true },
    { id: 4, nombre: 'Zapatillas', categoria: 'ropa', precio: 120, oferta: true },
    { id: 5, nombre: 'Gafas', categoria: 'accesorios', precio: 150 },

];


const OperadorTernario2 = () => {
    const [categoria, setCategoria] = useState('todos');
    const categorias = ["todos", "ofertas", ...new Set(productos.map(p => p.categoria))];






    return (
        <div>
            <div>
                {categorias.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setCategoria(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <h1>Lista de Productos</h1>
            <p> Categoria seleccionada: {categoria}</p>
            <div>
                {productos.map(p =>
                    categoria === "todos" ? (
                        <div key={p.id} style={{ margin: "10px 0" }}>
                            <h3>{p.nombre}</h3>
                            <p>${p.precio}</p>
                            {p.precio > 500 && <p>Producto premium</p>}
                        </div>
                    ) : categoria === "ofertas" && p.oferta ? (
                        <div key={p.id} style={{ margin: "10px 0" }}>
                            <h3>{p.nombre}</h3>
                            <p>${p.precio}</p>
                            {p.precio > 500 && <p>Producto premium</p>}
                            {p.oferta && <span>🔥 Oferta</span>}
                        </div>
                    ) : categoria === p.categoria ? (
                        <div key={p.id} style={{ margin: "10px 0" }}>
                            <h3>{p.nombre}</h3>
                            <p>${p.precio}</p>
                            {p.precio > 500 && <p>Producto premium</p>}
                            {p.oferta && <span>🔥 Oferta</span>}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};
export default OperadorTernario2;