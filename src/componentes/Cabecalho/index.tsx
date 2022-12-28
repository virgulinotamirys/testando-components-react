import './estilo.css'

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
            <div className='imagem-logo' role='img' aria-aria-label='Logo do sorteador'/>
            <img className='participante' src='/imagens/participante.png' />
        </header>
    )
}

export default Cabecalho