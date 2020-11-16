import { graphql, useStaticQuery } from 'gatsby';

const useProductos = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiArticulos {
                nodes {
                    nombre
                    descripcion
                    id
                    precio
                    categoria {
                        nombre
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid( maxWidth: 600, maxHeight: 400 ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);
    // console.log(datos);

    return datos.allStrapiArticulos.nodes.map(articulo => ({
        nombre: articulo.nombre,
        descripcion: articulo.descripcion,
        imagen: articulo.imagen,
        id: articulo.id,
        precio: articulo.precio,
        categoria: articulo.categoria
    }))
}

export default useProductos;