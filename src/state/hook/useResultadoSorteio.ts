import { useRecoilValue } from "recoil"
import { resultadoAmigo } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigo)
}