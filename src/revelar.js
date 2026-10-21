// Faz os blocos marcados com .revelar aparecerem suavemente ao entrar na tela.
export function iniciarRevelar() {
  const itens = document.querySelectorAll('.revelar')
  if (!('IntersectionObserver' in window)) {
    itens.forEach((el) => el.classList.add('visto'))
    return () => {}
  }
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visto')
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  itens.forEach((el) => obs.observe(el))
  return () => obs.disconnect()
}
