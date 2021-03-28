import { Section } from "./styles";

import gamerImg from '../../assets/gamer.png'
import diversaoImg from '../../assets/diversao.png';
import hofImg from '../../assets/hof.png';

export function Benefits() {
    return(
        <Section>
            <h3>Nossas</h3>
            <h1><strong>vantagens</strong></h1>
            <div className="cards-benefits">
                <div className="card-benefits">
                    <h2>Gamer</h2>
                    <img src={gamerImg} alt=""/>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="card-benefits">
                    <h2>Diversao</h2>
                    <img src={diversaoImg} alt=""/>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="card-benefits">
                    <h2>Home Office</h2>
                    <img src={hofImg} alt=""/>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </Section>
        
    )
}