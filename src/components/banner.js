import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const Banner = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: { eq: "banner.png"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    // console.log(imagen);

    return ( 
        <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft" >
            <div className={heroCSS.imagenbg}>
                {/* <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3> */}
                <p >Más de 40 de años de experiencia...</p>
            </div>
        </ImageBackground>
     );
}
 
export default Banner;