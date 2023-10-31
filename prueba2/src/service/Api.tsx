import axios from 'axios';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export async function ordenProductos(orden: boolean): Promise<Producto[]> {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const productos: Producto[] = [...response.data];
    productos.sort((p1, p2) => (orden ? p1.price - p2.price : p2.price - p1.price));
    return productos;
  } catch (error) {
    throw new Error('Error al obtener los productos: ' + error);
  }
}