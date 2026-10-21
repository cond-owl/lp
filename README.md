# CondoOwl — landing page

Página de apresentação do CondoOwl em React + Vite, tema escuro.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ (estático, pode subir em qualquer hospedagem)
```

## Pendências antes de publicar de verdade

- `src/App.jsx`: o botão "Marcar uma conversa" abre o WhatsApp (`WHATSAPP`) com mensagem pronta. Conferir se o número está completo.
- Os avisos do mural e os horários da churrasqueira são exemplos de demonstração.

## Decisões de conteúdo

- Textos usam só o que o material original afirmava (mural, reservas, perfis, financeiro e prestadores na próxima fase). Sem números, clientes ou prazos inventados.
- Linguagem sem jargão técnico de propósito: o público é síndico e morador, não desenvolvedor.

## Versão HTML estática

`design/condoowl-design.html` é a mesma página em um arquivo só (CSS e JS embutidos), feita para mostrar no Claude Design sem rodar o React. O CSS é uma cópia de `src/styles.css`: se o estilo mudar, regenerar o arquivo. Fica fora do build do Vite.
