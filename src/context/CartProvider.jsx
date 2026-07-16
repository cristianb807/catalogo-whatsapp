import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";


function CartProvider({ children }) {


   const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
        ? JSON.parse(savedCart)
        : [];

});
useEffect(() => {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}, [cart]);

    const addToCart = (producto) => {


        setCart((prevCart) => {


            const existe = prevCart.find(
                item => item.id === producto.id
            );



            if(existe){


                return prevCart.map(item =>


                    item.id === producto.id

                    ?

                    {
                        ...item,
                        cantidad: item.cantidad + 1
                    }

                    :

                    item


                );


            }



            return [

                ...prevCart,

                {
                    ...producto,
                    cantidad:1
                }

            ];


        });


    };





    // AUMENTAR

    const increaseQuantity = (id) => {


        setCart(prevCart =>

            prevCart.map(item =>


                item.id === id

                ?

                {
                    ...item,
                    cantidad:item.cantidad + 1
                }

                :

                item


            )

        );


    };






    // DISMINUIR

    const decreaseQuantity = (id) => {


        setCart(prevCart =>


            prevCart.map(item =>


                item.id === id && item.cantidad > 1

                ?

                {
                    ...item,
                    cantidad:item.cantidad - 1
                }

                :

                item


            )


        );


    };






    // ELIMINAR

    const removeFromCart = (id) => {


        setCart(prevCart =>

            prevCart.filter(
                item => item.id !== id
            )

        );


    };





    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                increaseQuantity,

                decreaseQuantity,

                removeFromCart

            }}

        >

            {children}

        </CartContext.Provider>


    );

}


export default CartProvider;