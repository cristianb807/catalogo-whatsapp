import heroBg from "../../assets/images/herol.jpg";


function Hero() {

  return (

    <section

      className="relative min-h-[650px] flex items-center bg-cover bg-center"

      style={{
        backgroundImage: `url(${heroBg})`
      }}

    >


      {/* Overlay oscuro */}

      <div className="
        absolute
        inset-0
        bg-slate-950/80
      "></div>




      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        py-24
      ">


        <div className="max-w-3xl">


          <span className="
            text-emerald-400
            uppercase
            tracking-[6px]
            font-semibold
          ">

            Catálogo Digital

          </span>




          <h2 className="
            text-5xl
            md:text-6xl
            font-black
            mt-6
            leading-tight
          ">


            Compra tus productos


            <span className="text-emerald-400">

              {" "}desde WhatsApp

            </span>


          </h2>





          <p className="
            text-slate-300
            mt-8
            text-xl
            leading-9
          ">


            Explora nuestro catálogo, agrega productos al carrito
            y envía tu pedido directamente por WhatsApp en segundos.


          </p>





          <div className="flex flex-col sm:flex-row gap-5 mt-10">

<button

onClick={() =>
    document
    .getElementById("productos")
    .scrollIntoView({
        behavior:"smooth"
    })
}

className="
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
hover:scale-105
transition
"

>

Ver Productos

</button>



            <button className="
              border
              border-slate-600
              px-8
              py-4
              rounded-xl
              hover:border-emerald-400
              transition
            ">

              Conocer más

            </button>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Hero;