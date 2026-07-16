import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({producto}){

    const { addToCart } = useContext(CartContext);

    console.log("Producto cargado:", producto.nombre);

    return(

        <article className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-3">
            <div className="relative">

                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                   className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {
                    producto.oferta && (

                        <span className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full font-bold text-sm">

                            Oferta

                        </span>

                    )
                }

            </div>

            <div className="p-6">

                <p className="text-emerald-400 text-sm">

                    {producto.categoria}

                </p>

                <h3 className="text-2xl font-bold mt-2">

                    {producto.nombre}

                </h3>

                <p className="text-slate-400 mt-3">

                    {producto.descripcion}

                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-3xl font-black text-emerald-400">

                        ${producto.precio.toLocaleString("es-CO")}

                    </span>
<button
    onClick={() => addToCart(producto)}
    className="bg-emerald-500 hover:bg-emerald-400 text-black p-4 rounded-xl transition-all duration-300 hover:scale-110"
>
    <FaShoppingCart />
</button>
                </div>

            </div>

        </article>

    )

}

export default ProductCard