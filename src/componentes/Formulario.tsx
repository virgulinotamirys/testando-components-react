import React, { useRef, useState } from "react"
import { useMensagemErro } from "../state/hook/useMensagemErro"
import { useAdicionarParticipante } from "../state/hook/userAdicionarParticipante"
import './Formulario.css'

const Formulario = () => {
    const [nome, setNome] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const adicionarLista = useAdicionarParticipante()
    const mensagemErro = useMensagemErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        adicionarLista(nome)
        evento.preventDefault()
        setNome('')
        //se o current for nulo
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className="grupo-input-btn">
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text" 
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>
                    Adicionar
                </button>
            </div>
            {mensagemErro &&<p className="alerta erro" role='alert'>{mensagemErro}</p>}
        </form>
    )
}

export default Formulario