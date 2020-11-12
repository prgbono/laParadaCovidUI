import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useProductos from '../hooks/useProductos'
import ProductoPreview from './productoPreview';
import listadoProductoCSS from '../css/listadoProducto.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoProductos = () => {

    const resultado = useProductos();
    const [productos] = useState(resultado);
    const [ filtradas, guardarFiltradas] = useState([]);
    // filtrado de productos
    const { categoria,  FiltroUI } = useFiltro();

    useEffect(() => {
        if(categoria) {
            const filtro = productos.filter( producto => producto.categoria.nombre === categoria);
            guardarFiltradas(filtro);
        } else {
            guardarFiltradas(productos);
        }
    }, [categoria])

    // console.log(productos)

    return ( 
        <>
            <h2 css={css`
                margin-top: 5rem;
            `}>Nuestros Productos</h2>

            {FiltroUI() }

            <ul className={listadoProductoCSS.productos}>
                { filtradas.map( producto => (
                    <ProductoPreview 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListadoProductos;