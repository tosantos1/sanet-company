import { Container, Content } from "./styles";
import apple from '../../assets/apple.png';
import GPlay from '../../assets/playstore.png';
import logo from '../../assets/logotipo.svg';
import face from '../../assets/facebook.png';
import you from '../../assets/youtube.png';
import insta from '../../assets/instagram.png';

export function InfoBar() {
    return (
        <Container>
            <Content>
                <section>
                    <ul>
                        <li>
                            <h2>SAnet</h2>
                            <a href="#">Sobre nós</a>
                            <a href="#">Carreiras</a>
                            <a href="#">Perguntas frequentes</a>
                            <a href="#">Contato</a>
                            <a href="#">Impresa</a>
                        </li>
                        <li>
                            <h2>Produtos</h2>
                            <a href="#">SA Familia</a>
                            <a href="#">SA Master</a>
                            <a href="#">SA Ultra</a>
                        </li>
                        <li>
                            <h2>Fale com a gente</h2>
                            <a href="#">0800 608 6236</a>
                            <a href="#">meajuda@sanet.com.br</a>
                            <a href="#">Atendimento 24h</a>
                        </li>
                    </ul>
                </section>
                <section id="APP">
                    <h2>Baixe o App</h2>
                    <button>
                        <img src={apple} alt="apple" />
                        <p>Download via <p>Apple Store</p></p>
                    </button>
                    <button>
                        <img src={GPlay} alt="playstore" />
                        <p>Download via <p>Google Play</p></p>
                    </button>
                </section>
                <div id="line"></div>
                <section id="lastBar">
                    <div id="lastBarLogo">
                        <img src={logo} alt="logo" />
                        <p>Sanet xx.xxx.xxx/xxxx-xxx
                        <p>Rua --------, -- Natal-RN - xxxxxx - xxx</p>
                        </p>
                    </div>
                    <div id="socialMedias">
                        <img src={face} alt="Facebook" />
                        <img src={you} alt="Youtube" />
                        <img src={insta} alt="Instagram" />
                    </div>
                </section>
            </Content>
        </Container>
    )
}