import { Container } from "./styles";

import iconsImg from "../../assets/emoticons.svg";

export function Sicons(){
    return (
        <Container> 
            <div className="overflow">
                <img src={iconsImg} alt=""/>
            </div>
            
        </Container>
    )
}