import { useSetRecoilState } from "recoil"
import { resultadoAmigo } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useListaParticipantes } from "./useListaParticipantes"

export const useSorteador = () => {
    const participantes = useListaParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigo)

    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}