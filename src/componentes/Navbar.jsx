 import React, {useState} from "react"
 import styled from "styled-components"
 import BurgerButton from "./BurgerButton"

 function Navbar() {
    const [clicked, setClicked]= useState(false)
    console.log(clicked)
    const handleClick = () => {
        //Cuando esta true lo passa a false y vice versa
        setClicked(!clicked)

    }
    return(
        <>
        
        <Navcontainer>
            <h2>Juan Perez <span>Vintage</span></h2>
            <div className={`links ${clicked ? `active` : ""}`}>
                <a onClick={handleClick} href="#h">Home</a>
                <a onClick={handleClick} href="#h">Mujer</a>
                <a onClick={handleClick} href="#h">Hombre</a>
                <a onClick={handleClick} href="#h">Niño</a>
                <a onClick={handleClick} href="#h">Arte</a>
                <a onClick={handleClick} href="#h">Otro</a>
                <a onClick={handleClick} href="#h">Contacto</a>
                <a onClick={handleClick} href="#h">Nosotros</a>
                <a onClick={handleClick} href="#h">Tu cuenta</a>
            </div>
            <div>
            <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <bgDiv className={`initial ${clicked ? `active` : ""}`}></bgDiv>
        </Navcontainer>

        </>
    )
 }

 export default Navbar

 const Navcontainer = styled. nav`
 h2{
    color: white;
    font-weight:400; 
    span{
        font-weight:bold;
    }
 }

 padding: .4rem;
 background-color: #000000;
 display: flex;
 align-items: center;
 justify-content:space-between;
 a{
    color: white;
    text-decoration:none;
    margin-right: 1rem;
 }
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right:0;
    margin-left: auto;
    margin-right:auto;
    text-align: center;
    transition:all .5s ease;
    a{
        color:#333;
        font-size: 2rem;
        display:block;
    }
    @media(min-width: 768px){   
        position:initial;
        margin:0;
        a{
            font-size: 1rem;
            color: red;
            display:inline;
        }
    }
}
.links.active{
    width:100;
    display:block;
    position: absolute;
    margin-left: auto;
    margin-right:auto;
    top: 30%;
    left: 0;
    right:0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color:#333;
    }
}
  .Burger{
    @media(min-width: 768px){
        display:none;
   }
}
 `

 const bgDiv = styled.div`
 background-color: #333;
 position: absolute;
 top: -700px;
 left: -1000px;
 width:100%;
 height: 100%;
 z-index:-1;
 transition:all .6s ease;
    &.active{
    border-radies: 0 0  80% 0;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
   
  }

 `

 