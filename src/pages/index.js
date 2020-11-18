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
                    <p css={css`
                        text-align: justify;
                    `}>
                    {/* Este 'contenido' es lo que iría en el campo Contenido de Strapi */}
                        {/* {contenido} */}
                        Mariscos La Parada cuida de proveer el mejor pescado y marisco al mejor precio y calidad. 
                        Seleccionamos y compramos diaria y directamente desde lonjas del litoral onubense.                    
                        Somos especialistas desde hace más de 40 años. Todo nuestro marisco está elaborado y preparado de forma tradicional y listo para consumir.
                    </p>
                    <p css={css`
                        text-align: justify;
                    `}>
                        Dada la situación excepcional de pandemia que vivimos, queremos facilitar esta vía online a nuestros clientes para que puedan realizar sus compras desde la comodidad de sus casas y evitar aglomeraciones.
                    </p>
                </div>
            </main>

            {/* <Banner /> */}

            <ListadoProductos />

        </Layout>
        
     );
}
 
export default Index;