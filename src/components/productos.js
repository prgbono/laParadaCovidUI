import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
// import Iconos from './iconos';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;
const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #0D283B;
    }
    .categoria {
        margin-top: 1.5rem;
        border-radius: 1rem;
        background-color:  #E77817;
        padding: 0.5rem;
        color: #FFF;
        
    }
`;
const ColorNombreProducto = styled.h1`
    color: #0D283B
`

export const query = graphql`
    query($id: String!) {
            allStrapiArticulos( filter: { id: { eq: $id } }) {
                nodes {
                    nombre
                    descripcion
                    precio
                    categoria{
                      id
                      nombre
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid ( maxWidth: 700) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
    }
`

const Productos = ({data: { allStrapiArticulos: { nodes }}}) => {

    const { nombre, descripcion, imagen, precio, categoria } = nodes[0]

    return ( 
        <Layout>

            <ColorNombreProducto>{nombre}</ColorNombreProducto>
            <Contenido>
                <main>
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">{precio}€</p>
                    <p className="categoria">{categoria.nombre}</p>
                </Sidebar>
            </Contenido>
        

        </Layout>
     );
}
 
export default Productos;