const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                }
            }
            allStrapiArticulos {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);
    // TODO: Traer también Pedidos y detalle-pedidos?

    // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Si hay resultados generar los archivos estaticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const articulos = resultado.data.allStrapiArticulos.nodes;

    // crear los templates para paginas
    paginas.forEach( pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/paginas.js'),
            context: {
                id: pagina.id
            }
        })
    } )

    // Crear los templates de articulos
    articulos.forEach( articulo => {
        actions.createPage({
            path: urlSlug( articulo.nombre ),
            component: require.resolve('./src/components/productos.js'),
            context: {
                id: articulo.id
            }
        })
    } )
} 
