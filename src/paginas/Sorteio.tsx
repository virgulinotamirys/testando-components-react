import React, { useState } from "react"
import Card from "../componentes/Card"
import { useListaParticipantes } from "../state/hook/useListaParticipantes"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"
import './Sorteio.css'

export const Sorteio = () => {
    const participantes = useListaParticipantes()
    const [participanteAtual, setParticipanteAtual] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const resultado = useResultadoSorteio()
    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteAtual)) {
            setAmigoSecreto(resultado.get(participanteAtual)!)
        }
    }

    return (
        <Card>
            <section className="sorteio">
                <h2>Quem vai tirar o papelzinho</h2>
                <form onSubmit={sortear}>
                    <select 
                        required 
                        name="participanteAtual" 
                        id="participanteAtual" 
                        placeholder="Selecione o seu nome"
                        value={participanteAtual}
                        onChange={evento => setParticipanteAtual(evento.target.value)}
                        >
                            <option>Selecione seu nome</option>
                            {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </select>
                    <p>Clique em sortear para ver quem é seu amigo secreto</p>
                    <button className="botao-sortear">
                        Sortear
                    </button>
                </form>
                {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
                <footer className="sorteio">
                    <img src="/imagens/aviao.png" className="aviao"/>
                </footer>
            </section>
        </Card>
    )
}