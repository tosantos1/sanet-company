import { Container } from "./styles";


export function Plans() {
    return (
        <Container>
            <h3>Conheça Nossos</h3>
            <h1><strong>planos</strong>net</h1>
            <div className="cards">
                <div className="card-item">
                    <h5>Plano Residencial</h5>
                    <h1>50</h1>
                    <h2>mega</h2>
                    <h3>sa família</h3>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <div className="cash">
                        <p>R$</p>
                        <h4>70,00</h4>
                    </div>
                    <div className="btn">
                        <a href="">Assine Agora</a>
                    </div>
                </div>
                <div className="card-item">
                    <h5>Plano Residencial</h5>
                    <h1>100</h1>
                    <h2>mega</h2>
                    <h3>sa master</h3>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <div className="cash">
                        <p>R$</p>
                        <h4>80,00</h4>
                    </div>
                    <div className="btn"><a href="">Assine Agora</a></div>
                    
                </div>
                <div className="card-item">
                    <h5>Plano Residencial</h5>
                    <h1>200</h1>
                    <h2>mega</h2>
                    <h3>sa ultra</h3>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <div className="cash">
                        <p>R$</p>
                        <h4>100,00</h4>
                    </div>
                    <div className="btn"><a href="">Assine Agora</a></div>
                </div>
            </div>
        </Container>
    )
}