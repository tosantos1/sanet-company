import { Container } from './styles';

export function SuportCentral() {
    return (
        <Container>
            <div id="box-suport">
                <h1>CENTRAL DE SUPORTE</h1>
                <form action="">
                    <input type="text" name="name" id="nome" value="Nome" />
                    <input type="tel" name="tel" id="tel" value="Celular" />
                    <div id="msg">
                        <textarea name="msg" rows={15} cols={73} >Mensagem</textarea>
                    </div>
                    <input type="submit" id="submitForms" value="Enviar" />
                </form>
            </div>
        </Container>
    )
}