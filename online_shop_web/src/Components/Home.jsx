import { useEffect, useState } from "react";
import { getCollections } from "../api";
import { Menu } from "./Menu";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";

export function Home(){
    
    return(
        <div>
            <Menu></Menu>
            <div style={{height: '100px'}}></div>
            <Section2></Section2>
        </div>
    )
}