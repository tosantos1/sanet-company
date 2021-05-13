import { Container } from './styles';

export function SuportCentral() {
    return (
        <Container>
            <div id="box-suport">
                <h1>CENTRAL DE SUPORTE</h1>
                <form action="">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="name" id="nome" />
                    <label htmlFor="tel">Celular</label>
                    <input type="tel" name="tel" id="tel" />
                    <textarea name="msg" rows={15} cols={73} >Mensagem</textarea>
                    <input type="submit" id="submitForms" value="Enviar" />
                </form>
            </div>
        </Container>
    )
}