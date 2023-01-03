import shuffle from "just-shuffle";

export function realizarSorteio (participantes: string[]) {
    const totalParticipantes = participantes.length
    const random = shuffle(participantes)
    const resultado = new Map<string, string>()

    for (let index = 0; index < totalParticipantes; index++) {
        const indiceAmigo = index === (totalParticipantes -1) ? 0 : index+1;
        resultado.set(random[index], random[indiceAmigo])
    }

    return resultado
}