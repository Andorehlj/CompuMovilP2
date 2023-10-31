import React, { useEffect, useState } from 'react';
import { ordenProductos, Producto } from '../service/Api';

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [orden, setOrden] = useState(true);

  useEffect(() => {
    const lista = async () => {
      try {
        const productosOrdenados = await ordenProductos(orden);
        setProductos(productosOrdenados);
      } catch (error) {
        console.error(error);
      }
    };

    lista();
  }, [orden]);

  const cambiarOrden = () => {
    setOrden((anterior) => !anterior);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button onClick={cambiarOrden}>
        Cambiar Orden ({orden ? 'Descendente' : 'Ascendente'})
      </button>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <p>{producto.title}</p>
            <img src={producto.image} alt={producto.title} />
            <p>Precio: ${producto.price}</p>
            <p>Descripción: {producto.description}</p>
            <p>Categoría: {producto.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;