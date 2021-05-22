import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface OpenModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function OpenModal({ isOpen, onRequestClose }: OpenModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <ul>
                    <li><a href="#plans">Inicio</a></li>
                    <li><a href="#plans">Vantagens</a></li>
                    <li><a href="#plans">Planos</a></li>
                    <li><a href="#plans">Contato</a></li>
                    <li><a href="#plans">Assinante</a></li>
                </ul>
            </Container>

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
        </Modal>
    )
}