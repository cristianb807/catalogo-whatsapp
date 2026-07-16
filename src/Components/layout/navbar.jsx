import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";
import logo from "../../assets/images/logo.png";


function Navbar({ busqueda, setBusqueda }) {


    const [openCart, setOpenCart] = useState(false);


    const { cart } = useContext(CartContext);



    const cantidadProductos = cart.reduce(
        (total, item) => total + item.cantidad,
        0
    );



    return (

        <>


        <header className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">


            <div className="max-w-7xl mx-auto">


                <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">



                    {/* Logo */}

                    <div className="flex items-center gap-3 cursor-pointer">


                       <img

src={logo}

alt="CatalogApp"

className="w-12 h-12 rounded-xl object-cover"

/>



                        <div>

                            <h1 className="text-xl font-bold">
                                Catalogo
                            </h1>


                            <p className="text-slate-400 text-sm">
                                Compra fácil
                            </p>


                        </div>


                    </div>





                    {/* Carrito */}


                    <button

                        onClick={() => setOpenCart(true)}

                        className="relative order-2"

                    >


                        <FaShoppingCart

                            className="text-3xl hover:text-emerald-400 transition"

                        />



                        <span className="absolute -top-2 -right-2 bg-emerald-500 text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">


                            {cantidadProductos}


                        </span>


                    </button>







                    {/* Buscador */}


                    <div className="order-3 w-full md:order-none md:w-[420px] flex items-center bg-slate-900 rounded-xl px-4 py-3">


                        <FiSearch className="text-slate-500 text-xl" />



                        <input


                            type="text"


                            value={busqueda}


                            onChange={(e) => setBusqueda(e.target.value)}


                            placeholder="Buscar productos..."


                            className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-slate-500"


                        />


                    </div>



                </div>


            </div>


        </header>




        <CartDrawer


            open={openCart}


            close={() => setOpenCart(false)}


        />



        </>

    );


}


export default Navbar;