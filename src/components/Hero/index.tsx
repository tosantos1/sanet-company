import heroImg from '../../assets/plans.svg'
import { Container } from './styles'

export function Hero(){
    return(
        <Container>
            <div className="hero-home">
                <div className="text-btn">
                    <h1>Headlines para Wireframes Hero</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra lectus sed.</p>
                    <div className="btns">
                        <a href="#plans">Assinar Agora</a>
                        <a href="#plans">Suporte</a>
                    </div>
                </div>
                <div className="plans">
                    <img src={heroImg} alt=""/>
                </div>
            </div>
        </Container>
    )
}