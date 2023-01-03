import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { Rodape } from "./Rodape";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test('o botao nao pode ser iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['José', 'Maria', 'Tamirys'])
    })

    test('o botao pode ser iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })

    test('o botao foi iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})