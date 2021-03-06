/* eslint-disable jsx-a11y/anchor-is-valid */
import logoImg from '../../assets/logo.svg'
import logotipoImg from '../../assets/logotipo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {

    return (
        <Container>
            {/* HEADER DESKTOP */}
            <nav className="navbar-desktop">
                <div className="item-1">
                    <a href="#plans"><img src={logoImg} alt="logo" /></a>
                </div>
                <div className="item-2">
                    <ul className="navlist-desktop">
                        <li><a href="#plans" className="navlink-desktop">Inicio</a></li>
                        <li><a href="#plans" className="navlink-desktop">Vantagens</a></li>
                        <li><a href="#plans" className="navlink-desktop">Planos</a></li>
                        <li><a href="#plans" className="navlink-desktop">Contato</a></li>
                        <li><a href="#plans" className="navlink-desktop">Assinante</a></li>
                    </ul>
                </div>
            </nav>

            {/* HEADER MOBILE */}
            <nav className="navbar-mobile">
                <div className="logo-m">
                    <a href="#plans"><img src={logotipoImg} alt="logo" /></a>
                </div>
                <button type="button" onClick={onOpenModal} className="bx" id="bx"></button>
            </nav>

            {/* HEADER MENU */}
            <nav className="menu-mobile">
                <ul className="navlist-mobile">
                    <li><a href="#plans" className="navlink-mobile">Inicio</a></li>
                    <li><a href="#plans" className="navlink-mobile">Vantagens</a></li>
                    <li><a href="#plans" className="navlink-mobile">Planos</a></li>
                    <li><a href="#plans" className="navlink-mobile">Contato</a></li>
                    <li><a href="#plans" className="navlink-mobile">Assinante</a></li>
                </ul>
            </nav>
        </Container>
    )
}
