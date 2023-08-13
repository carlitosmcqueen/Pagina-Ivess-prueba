// import React,{useState,useEffect} from 'react';

// const Micomponente = ({miProp})=>{
//     const [contador, setContador] = useState(0)
//     const [numero, setNumero] = useState(0)

//     //para promesas ----> pasa algo y luego hace otra cosa por eso el efecto
//     //emula cuando el componente se monta y cuando el componente se actualiza
//     useEffect(()=>{
//         setTimeout(()=>{
//             setNumero(numero + 1)
//             //el numero aumenta despues de 2 segundos despues de una actualizacion de contador
//         },2000)
//         //console.log("se ejecuta el useEffect") cuando contador se actualiza
//     },[contador])
//    //cada ves que se ejecuta un cambio se activa el useEffect, primero se actualiza(o monta la primera vez) el componente y despues se activa el useEffect
//    // poniendo un array de dependencia le digo que se ejecutae cuando pase algo en el contador

//    useEffect(()=>{
//     const interval = setInterval(()=>{
//         console.log("intervalo")
//     },1000)
//     return()=>{
//         clearInterval(interval)
//         //cuando se desmonta se detiene
//     }
//    },[])
//    //el [] significa cuando el componente se monta

//     const handlerClickSumar = () =>{
//         setContador(contador +1)
//     }

//     const handlerClickQuitar = () =>{
//         setContador(contador - 1)
//     }
//     const reset = () =>{
//         setContador(0)
//     }


//     return (
//         <>
//         <div>{miProp}</div>
//         <button onClick ={handlerClickSumar}>click</button>
//         <button onClick ={handlerClickQuitar}>click</button>
//         <button onClick ={reset}>click</button>

//         </>
//     )
// }

// export default Micomponente

// //useEffect 




// import React from "react";
// import {Link,NavLink} from "react-router-dom";
// const navItems = [
//     {
//         id:1,
//         label:"CATEGORY",
//         link:"/category/",
//     },
//     {
//         id:2,
//         label:"HOME",
//         link:"/",
//     },
// ]

// const NavBar = ()=>{
//     return(
//         <div className="nav">
//             <nav>
//                 {navItems.map((navItems)=>(<NavLink id="idlinkNav" key={navItems.id} to= {navItems.link}>{navItems.label}</NavLink> ))}
//             </nav>
           

//         </div>
//     )
// }
// export default NavBar;







