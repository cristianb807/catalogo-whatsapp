import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function CartDrawer({ open, close }) {


  const { 
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart

} = useContext(CartContext);



    const total = cart.reduce(
        (sum, item) => sum + (item.precio * item.cantidad),
        0
    );

const enviarWhatsApp = () => {


    let mensaje = "Hola 👋 quiero realizar este pedido:%0A%0A";


    cart.forEach(item => {

        mensaje += 
        `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString("es-CO")}%0A`;

    });


    mensaje += `%0ATotal: $${total.toLocaleString("es-CO")}`;



    const telefono = "573118563757";


    window.open(
        `https://wa.me/${telefono}?text=${mensaje}`,
        "_blank"
    );


};

    return (

        <div
            className={`
            fixed inset-0 z-50
            ${open ? "visible" : "invisible"}
            `}
        >


            {/* Fondo oscuro */}

            <div
                onClick={close}
                className={`
                absolute inset-0 bg-black/60
                transition-opacity
                ${open ? "opacity-100" : "opacity-0"}
                `}
            />


            {/* Panel */}

            <aside
                className={`
                absolute right-0 top-0
                h-full w-full sm:w-[420px]
                bg-slate-950
                p-6
                transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >


                <div className="flex justify-between items-center mb-8">


                    <h2 className="text-2xl font-black">
                        Mi carrito
                    </h2>


                    <button onClick={close}>

                        <FaTimes className="text-2xl"/>

                    </button>


                </div>




                {
                    cart.length === 0 ? (

                        <p className="text-slate-400">
                            Tu carrito está vacío
                        </p>

                    ) : (

                        cart.map(item => (

                            <div
                                key={item.id}
                                className="flex gap-4 mb-5 bg-slate-900 p-4 rounded-xl"
                            >

                                <img
                                    src={item.imagen}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />


                                <div>

                                    <h3 className="font-bold">
                                        {item.nombre}
                                    </h3>


                                   <div className="flex items-center gap-3 mt-3">


<button

onClick={() => decreaseQuantity(item.id)}

className="bg-slate-800 w-8 h-8 rounded-lg"

>

-

</button>



<span className="font-bold">

{item.cantidad}

</span>




<button

onClick={() => increaseQuantity(item.id)}

className="bg-emerald-500 text-black w-8 h-8 rounded-lg"

>

+

</button>



<button

onClick={() => removeFromCart(item.id)}

className="text-red-400 ml-3"

>

<FaTrash/>

</button>


</div>


                                    <p>
                                        $
                                        {(item.precio * item.cantidad)
                                        .toLocaleString("es-CO")}
                                    </p>


                                </div>


                            </div>

                        ))

                    )
                }



                <div className="border-t border-slate-800 pt-5 mt-5">
<button

onClick={enviarWhatsApp}

className="mt-6 w-full bg-emerald-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition flex items-center justify-center gap-3"

>

<FaWhatsapp className="text-2xl"/>

Enviar pedido por WhatsApp

</button>

                    <p className="text-xl font-bold">

                        Total:

                        <span className="text-emerald-400 ml-2">

                            ${total.toLocaleString("es-CO")}

                        </span>

                    </p>


                </div>



            </aside>


        </div>

    )

}


export default CartDrawer;