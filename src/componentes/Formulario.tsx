import React, { useRef, useState } from "react"
import { useMensagemErro } from "../state/hook/useMensagemErro"
import { userAdicionarParticipante } from "../state/hook/userAdicionarParticipante"

const Formulario = () => {
    const [nome, setNome] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const adicionarLista = userAdicionarParticipante()
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
            {mensagemErro &&<p role='alert'>{mensagemErro}</p>}
        </form>
    )
}

export default Formulario