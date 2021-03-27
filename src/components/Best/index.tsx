import cashImg from '../../assets/cash.svg'
import rotateImg from '../../assets/rotate.svg'
import bankImg from '../../assets/bank.svg'
import phoneImg from '../../assets/phone.svg'
import {Section} from './styles'

export function Best() {
    return(
        <Section>
            <div className="best">
                <div className="flex-item-auto">
                    <h3>O melhor</h3>
                    <h1>Por que sanet?</h1>
                </div>
                <div className="best-item">
                    <img src={cashImg} alt=""/>
                    <p>Preço</p>
                </div>
                <div className="best-item">
                    <img src={rotateImg} alt=""/>
                    <p>Manutenção</p>
                </div>
                <div className="best-item">
                    <img src= {bankImg} alt=""/>
                    <p>Pagamento</p>
                </div>
                <div className="best-item">
                    <img src={phoneImg} alt=""/>
                    <p>Suporte</p>
                </div>
            </div>
        </Section>
    )
}