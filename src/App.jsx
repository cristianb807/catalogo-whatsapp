import Layout from "./components/layout/Layout.jsx";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import ProductGrid from "./components/product/ProductGrid";
import { useState } from "react";


function App() {


  const [busqueda, setBusqueda] = useState("");



  return (

    <Layout>


      <Navbar

        busqueda={busqueda}

        setBusqueda={setBusqueda}

      />



      <Hero />



      <ProductGrid

        busqueda={busqueda}

      />


    </Layout>

  )

}


export default App;