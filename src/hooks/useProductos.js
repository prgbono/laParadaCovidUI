import { graphql, useStaticQuery } from 'gatsby';

const useProductos = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiArticulos {
                nodes {
                    nombre
                    descripcion
                    id
                    # wc
                    precio
                    # estacionamiento
                    # habitaciones
                    categoria {
                        nombre
                    }
                    # agentes {
                    #     nombre
                    #     telefono
                    #     email
                    # }
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
        // wc: articulo.wc,
        // estacionamiento: articulo.estacionamiento,
        // habitaciones: articulo.habitaciones,
        // agentes: proparticuloiedad.agentes,
        precio: articulo.precio,
        categoria: articulo.categoria
    }))
}

export default useProductos;