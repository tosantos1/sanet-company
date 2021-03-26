import logoImg from '../../assets/logo.svg'
import logotipoImg from '../../assets/logotipo.svg'
import { Container } from './styles'

export function Header(){
    return (
        <Container>
            {/* HEADER DESKTOP */}
            <nav className="navbar-desktop">
                <div className="item-1">
                    <a href=""><img src={logoImg} alt="logo"/></a>
                </div>
                <div className="item-2">
                    <ul className="navlist-desktop">
                        <li><a href="" className="navlink-desktop">Inicio</a></li>
                        <li><a href="" className="navlink-desktop">Vantagens</a></li>
                        <li><a href="" className="navlink-desktop">Planos</a></li>
                        <li><a href="" className="navlink-desktop">Contato</a></li>
                        <li><a href="" className="navlink-desktop">Assinante</a></li> 
                    </ul>
                </div>
            </nav>

            {/* HEADER MOBILE */}
            <nav className="navbar-mobile">
                <div className="logo-m">
                    <a href=""><img src={logotipoImg} alt="logo"/></a>
                </div>
                <div className="bx" id="bx"></div>
            </nav>

            {/* HEADER MENU */}
            <nav className="menu-mobile">
                <ul className="navlist-mobile">
                    <li><a href="" className="navlink-mobile">Inicio</a></li>
                    <li><a href="" className="navlink-mobile">Vantagens</a></li>
                    <li><a href="" className="navlink-mobile">Planos</a></li>
                    <li><a href="" className="navlink-mobile">Contato</a></li>
                    <li><a href="" className="navlink-mobile">Assinante</a></li>  
                </ul>
            </nav>

            

        </Container>
    )
}
