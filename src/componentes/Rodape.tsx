import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../state/hook/useListaParticipantes"
import './Rodape.css'

export const Rodape = () => {

    const participantes = useListaParticipantes()
    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return(
        <footer className="rodape-configuracoes">
            <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
            <img src="/imagens/sacolas.png"/>
        </footer>
    )
}