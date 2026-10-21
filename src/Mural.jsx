import { useState } from 'react'

const CATEGORIAS = [
  { id: 'todos', nome: 'Todos' },
  { id: 'aviso', nome: 'Avisos' },
  { id: 'manut', nome: 'Manutenções' },
  { id: 'reuniao', nome: 'Reuniões' },
  { id: 'evento', nome: 'Eventos Sociais' },
]

const EXEMPLOS = [
  { cat: 'aviso', rotulo: 'Aviso', titulo: 'Água cortada na quinta, das 8h às 12h' },
  { cat: 'manut', rotulo: 'Manutenção', titulo: 'Revisão do portão da garagem' },
  { cat: 'reuniao', rotulo: 'Reunião', titulo: 'Assembleia de moradores' },
  { cat: 'evento', rotulo: 'Evento Social', titulo: 'Festa junina do condomínio' },
]

export default function Mural() {
  const [filtro, setFiltro] = useState('todos')
  const lista = EXEMPLOS.filter((e) => filtro === 'todos' || e.cat === filtro)

  return (
    <div className="cartao">
      <div className="cartao-titulo">Teste o mural</div>
      <div className="filtros" role="group" aria-label="Filtrar por categoria">
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filtro"
            aria-pressed={filtro === c.id}
            onClick={() => setFiltro(c.id)}
          >
            {c.nome}
          </button>
        ))}
      </div>
      <ul className="feed" aria-live="polite" key={filtro}>
        {lista.map((e) => (
          <li key={e.cat} className="item">
            <span className={`etiqueta e-${e.cat}`}>{e.rotulo}</span>
            <div className="item-texto">{e.titulo}</div>
          </li>
        ))}
      </ul>
      <p className="legenda">Avisos de exemplo, só pra você ver como fica.</p>
    </div>
  )
}
