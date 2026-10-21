import { useState } from 'react'

const HORARIOS = [
  { id: 'a', faixa: '08h–12h', texto: '08h às 12h', ocupado: false },
  { id: 'b', faixa: '12h–16h', texto: '12h às 16h', ocupado: false },
  { id: 'c', faixa: '16h–20h', texto: '16h às 20h', ocupado: true },
  { id: 'd', faixa: '20h–00h', texto: '20h à meia-noite', ocupado: false },
]

const INICIAL = { tipo: '', texto: 'Escolha um horário. Vale tentar o que já está reservado.' }

export default function Reservas() {
  const [minha, setMinha] = useState(null)
  const [aviso, setAviso] = useState(INICIAL)

  function escolher(h) {
    if (h.ocupado) {
      setAviso({ tipo: 'erro', texto: `Esse horário (${h.texto}) já tem dono. Não dá pra marcar dois no mesmo horário.` })
    } else if (minha === h.id) {
      setMinha(null)
      setAviso({ tipo: '', texto: 'Reserva cancelada. O horário ficou livre de novo.' })
    } else {
      setMinha(h.id)
      setAviso({ tipo: 'ok', texto: `Pronto, churrasqueira reservada das ${h.texto}.` })
    }
  }

  return (
    <div className="cartao">
      <div className="cartao-titulo">Churrasqueira, sábado: tente reservar</div>
      <div className="slots" role="group" aria-label="Horários de sábado">
        {HORARIOS.map((h) => (
          <button
            key={h.id}
            type="button"
            className="slot"
            aria-disabled={h.ocupado || undefined}
            aria-pressed={h.ocupado ? undefined : minha === h.id}
            onClick={() => escolher(h)}
          >
            <b>{h.faixa}</b>
            <span>{h.ocupado ? 'Já reservado' : minha === h.id ? 'Sua reserva' : 'Livre'}</span>
          </button>
        ))}
      </div>
      <p key={aviso.texto} className={`recado ${aviso.tipo}`} role="status">{aviso.texto}</p>
    </div>
  )
}
