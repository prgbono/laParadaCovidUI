import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import Banner from '../components/banner'
import ListadoProductos from '../components/ListadoProductos'

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

    return ( 
        <Layout>
            <ImagenBackground
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
            </ImagenBackground>
            <main>
                <div css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>

            <Banner />

            <ListadoProductos />

        </Layout>
        
     );
}
 
export default Index;