import React from "react"; 
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Header from "../Header/Header"
import Player from "../Player/Player";
import CenterBlock from "../CenterBlock/CenterBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Main.module.css";


function Main() { 
    return ( 
       <div>  <Header/>
            <section className="main">
                <BurgerMenu/>
                <CenterBlock/>
                <NavigationMenu/>
            </section>
            <Player/>
        </div>
    )
} 
 
export default Main; 