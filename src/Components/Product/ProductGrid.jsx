import productos from "../../assets/data/productos";
import ProductCard from "./ProductCard";


function ProductGrid({ busqueda }) {


    const productosFiltrados = productos.filter((producto) =>

        producto.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase())

    );



    return (

       <section 
    id="productos"
    className="max-w-7xl mx-auto px-6 py-20"
>
            <div className="flex justify-between items-center mb-12">


                <div>

                    <h2 className="text-4xl font-black">

                        Nuestros Productos

                    </h2>


                    <p className="text-slate-400 mt-2">

                        Descubre nuestra colección.

                    </p>


                </div>



                <span className="bg-slate-900 px-5 py-3 rounded-xl">

                    {productosFiltrados.length} Productos

                </span>


            </div>





            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


                {

                    productosFiltrados.map(producto => (


                        <ProductCard

                            key={producto.id}

                            producto={producto}

                        />


                    ))

                }


            </div>



        </section>

    )

}


export default ProductGrid;