import { Container } from './styles';

export function SuportCentral() {
    return (
        <Container id="sup">
            <div id="box-suport">
                <h1>CENTRAL DE SUPORTE</h1>
                <form action="">
                    <input type="text" placeholder="Nome" />
                    <input type="tel" placeholder="Celular" />
                    <div id="msg">
                        <textarea name="msg" rows={15} cols={73} placeholder="Mensagem" ></textarea>
                    </div>
                    <input type="submit" id="submitForms" value="Enviar" />
                </form>
            </div>
        </Container>
    )
}