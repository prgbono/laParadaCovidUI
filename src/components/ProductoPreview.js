import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #E77817;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`
const Contenido = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio {
        font-size: 2rem;
        color: #0D283B;
    }
`
const ColorNombreProducto = styled.h3`
    color: #0D283B
`

const ProductoPreview = ({producto}) => {
    const { nombre, imagen, precio } = producto;
    // console.log('imagen: ', imagen );
    return ( 
        <Card>
            <Link to={ urlSlug( nombre ) }>
                <Image
                    fluid={imagen.sharp.fluid}
                />
            </Link>
            <Contenido>
                <ColorNombreProducto>{nombre}</ColorNombreProducto>
                <p className="precio">{precio}€</p>
                {/* <Iconos nombre={nombre} estacionamiento={estacionamiento} habitaciones={habitaciones}/> */}
                <Boton to={ urlSlug( nombre ) }>
                    Ver Producto
                </Boton>
            </Contenido>
        </Card> 
     );
}
 
export default ProductoPreview;