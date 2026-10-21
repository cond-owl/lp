import { useEffect } from 'react'
import Owl from './Owl.jsx'
import { iniciarRevelar } from './revelar.js'
import Mural from './Mural.jsx'
import Reservas from './Reservas.jsx'

const WHATSAPP = '558496094804'
const CONTATO = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Quero marcar uma conversa sobre o CondoOwl.')}`

function Topo() {
  return (
    <header className="miolo topo">
      <a className="logo" href="#inicio" aria-label="CondoOwl, início">
        <Owl />
        <span>Condo<b>Owl</b></span>
      </a>
      <nav className="menu" aria-label="Principal">
        <a href="#avisos">Avisos</a>
        <a href="#reservas">Reservas</a>
        <a href="#em-breve">Em breve</a>
        <a className="btn btn-linha btn-pequeno" href={CONTATO} target="_blank" rel="noopener noreferrer">Marcar conversa</a>
      </nav>
    </header>
  )
}

function Inicio() {
  return (
    <section className="miolo inicio" id="inicio">
      <div className="inicio-texto revelar">
        <h1>Chega de recado colado <span>no elevador</span>.</h1>
        <p className="abertura">
          Os avisos e as reservas do condomínio num lugar só, no celular de cada morador.
          O síndico para de correr atrás de todo mundo.
        </p>
        <div className="acoes">
          <a className="btn btn-indigo" href={CONTATO} target="_blank" rel="noopener noreferrer">Quero ver no meu condomínio</a>
          <a className="btn btn-linha" href="#avisos">Como funciona</a>
        </div>
        <div className="situacao">
          <div><b className="ja">Já tem</b>Mural de avisos e reserva de espaços.</div>
          <div><b className="vem">Vem aí</b>Pagar o condomínio pelo app e lista de prestadores de confiança.</div>
        </div>
      </div>

      <div className="cena revelar" style={{ '--d': '120ms' }} role="img" aria-label="Um bilhete de papel colado ao lado do mural do aplicativo">
        <div className="bilhete">
          Elevador em manutenção terça. <s>Avisem os vizinhos!</s>
          <br />— Síndico
        </div>
        <div className="mural-mini">
          <div className="mural-mini-topo"><b>Mural do condomínio</b><span>exemplo</span></div>
          <div className="item">
            <span className="etiqueta e-manut">Manutenção</span>
            <div className="item-texto">Elevador social parado na terça</div>
          </div>
          <div className="item">
            <span className="etiqueta e-reuniao">Reunião</span>
            <div className="item-texto">Assembleia: pauta e horário</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Avisos() {
  return (
    <section className="faixa com-base" id="avisos">
      <div className="miolo duas">
        <div className="coluna revelar">
          <div className="quando">Quinta-feira, 7h. Vão cortar a água.</div>
          <h2>Todo mundo fica sabendo, sem depender de quem passou na portaria.</h2>
          <p>
            Hoje o aviso vira bilhete na portaria, mensagem perdida no grupo, e metade dos vizinhos
            só descobre quando abre a torneira.
          </p>
          <p>
            Aqui o síndico posta uma vez e diz o que é: <strong>aviso, manutenção, reunião ou festa</strong>.
            Cada morador olha só o que interessa e o recado oficial fica num lugar só.
          </p>
        </div>
        <div className="coluna revelar"><Mural /></div>
      </div>
    </section>
  )
}

function Reserva() {
  return (
    <section className="claro" id="reservas">
      <div className="miolo duas">
        <div className="coluna revelar"><Reservas /></div>
        <div className="coluna revelar">
          <div className="quando">Sábado. Duas famílias querem a churrasqueira.</div>
          <h2>Acabou a briga por horário.</h2>
          <p>
            O morador pede o espaço pelo celular em poucos toques. Se o horário já tem dono, o app
            avisa na hora, e o síndico não precisa decidir quem tem razão.
          </p>
          <div className="comparacao">
            <div className="antes"><b>Antes</b>Caderno na portaria e dois nomes no mesmo horário.</div>
            <div className="depois"><b>Com o CondoOwl</b>Horário ocupado não dá pra marcar.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PASSOS = [
  { n: 1, titulo: 'Letra que dá pra ler', texto: 'Telas limpas, sem bagunça.' },
  { n: 2, titulo: 'Sem perder o lugar', texto: 'Avisos e reservas abrem por cima da tela, com o fundo esmaecido.' },
  { n: 3, titulo: 'Cada um com a sua tela', texto: 'Síndico e morador não veem a mesma coisa. Cada um só vê o que precisa.' },
]

function NoCelular() {
  return (
    <section className="miolo celular">
      <div className="quando">No celular, do jeito que o morador usa.</div>
      <h2>Pensado pra quem resolve tudo de pé, com uma mão só.</h2>
      <div className="passos">
        {PASSOS.map((p, i) => (
          <div className="passo revelar" key={p.n} style={{ '--d': `${i * 100}ms` }}>
            <div className="num">{p.n}</div>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function EmBreve() {
  return (
    <section className="faixa" id="em-breve">
      <div className="miolo breve">
        <div className="quando">Ainda não está no ar</div>
        <h2>O que vem depois é o que mais dá trabalho pro síndico.</h2>
        <div className="lista">
          <article className="revelar">
            <div className="cabeca">
              <h3>Pagar o condomínio pelo app</h3>
              <span className="selo">Em breve</span>
            </div>
            <p>
              O morador paga por <strong>Pix ou boleto</strong> e o app já marca a conta como paga.
              O síndico não precisa mais conferir comprovante um por um.
            </p>
          </article>
          <article className="revelar">
            <div className="cabeca">
              <h3>Prestadores de confiança</h3>
              <span className="selo">Em breve</span>
            </div>
            <p>
              Aquele eletricista que alguém indicou no grupo e ninguém sabe se é bom? A ideia é uma
              lista de eletricista, encanador e outros profissionais <strong>aprovados pelo condomínio</strong>.
              Um toque e abre a ligação ou o WhatsApp.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section className="miolo contato" id="contato">
      <div className="contato-caixa revelar">
        <div>
          <h2>Bora ver no seu condomínio?</h2>
          <p>Marque uma conversa e a gente mostra o app funcionando.</p>
        </div>
        <a className="btn btn-sol" href={CONTATO} target="_blank" rel="noopener noreferrer">Marcar uma conversa</a>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => iniciarRevelar(), [])
  return (
    <div className="pagina">
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>
      <Topo />
      <main id="conteudo">
        <Inicio />
        <Avisos />
        <Reserva />
        <NoCelular />
        <EmBreve />
        <Contato />
      </main>
      <footer className="miolo rodape">
        <span>© CondoOwl</span>
        <span>Gestão inteligente. Condomínio em harmonia.</span>
      </footer>
    </div>
  )
}
