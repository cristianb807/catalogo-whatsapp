import chaqueta from "../images/chaqueta.png";
import casco from "../images/casco.png";
import guantes from "../images/guantes.png";
import botas from "../images/botas.png";
import maleta from "../images/maleta.png";
import rodilleras from "../images/rodilleras.png";
import intercomunicador from "../images/intercomunicador.png";
import impermeable from "../images/impermeable.png";


const productos = [

    {
        id:1,
        nombre:"Chaqueta Feral",
        categoria:"Chaquetas",
        precio:180000,
        imagen:chaqueta,
        descripcion:"Chaqueta impermeable de alta resistencia.",
        oferta:true
    },


    {
        id:2,
        nombre:"Casco MT",
        categoria:"Cascos",
        precio:420000,
        imagen:casco,
        descripcion:"Casco certificado DOT.",
        oferta:false
    },


    {
        id:3,
        nombre:"Guantes Fox",
        categoria:"Guantes",
        precio:90000,
        imagen:guantes,
        descripcion:"Máximo agarre y protección.",
        oferta:true
    },


    {
        id:4,
        nombre:"Botas Rider",
        categoria:"Botas",
        precio:310000,
        imagen:botas,
        descripcion:"Botas impermeables.",
        oferta:false
    },


    {
        id:5,
        nombre:"Maleta Adventure",
        categoria:"Accesorios",
        precio:270000,
        imagen:maleta,
        descripcion:"Maleta para viajes largos.",
        oferta:false
    },


    {
        id:6,
        nombre:"Rodilleras Pro",
        categoria:"Protección",
        precio:145000,
        imagen:rodilleras,
        descripcion:"Protección profesional.",
        oferta:true
    },


    {
        id:7,
        nombre:"Intercom BT",
        categoria:"Electrónica",
        precio:350000,
        imagen:intercomunicador,
        descripcion:"Comunicación Bluetooth.",
        oferta:false
    },


    {
        id:8,
        nombre:"Impermeable Moto",
        categoria:"Chaquetas",
        precio:125000,
        imagen:impermeable,
        descripcion:"Ideal para lluvia.",
        oferta:true
    }

];


export default productos;