import Card from "../componentes/Card"
import Formulario from "../componentes/Formulario"
import { ListaParticipantes } from "../componentes/ListaParticipantes"
import { Rodape } from "../componentes/Rodape"

export const Configuracao = () => {
    return(
        <Card>
            <section>
                <h2>Start</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}