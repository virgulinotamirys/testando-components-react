import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const resultadoAmigo = atom<Map<string, string>>({
    key: 'resultadoAmigo',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})