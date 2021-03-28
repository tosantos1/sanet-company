import { Container } from "./styles";

import people1Img from "../../assets/people1.png"
import people2Img from "../../assets/people2.png"
import people3Img from "../../assets/people3.png"

export function Depositions() {
    return(
        <Container>
            <h3>Depoimentos</h3>
            <h1>todos amam nossos planos</h1>
            <div className="card-depositions">
                <div className="card-d">
                    <img src={people1Img} alt=""/>
                    <h4>Jorge Silva</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.</p>
                </div>
                <div className="card-d">
                    <img src={people2Img} alt=""/>
                    <h4>Anna Keller</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.</p>
                </div>
                <div className="card-d">
                    <img src={people3Img} alt=""/>
                    <h4>Marcela Sousa</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra.</p>
                </div>
            </div>
        </Container>


    )   
}