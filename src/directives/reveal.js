export const reveal = {
  mounted(el, binding) {
    const opts = binding.value || {}
    const delay = opts.delay || 0
    const threshold = opts.threshold ?? 0.15
    const variant = opts.variant || 'up'

    el.classList.add('reveal', `reveal--${variant}`)
    if (delay) el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--in')
          io.unobserve(el)
        }
      })
    }, { threshold, rootMargin: '0px 0px -60px 0px' })

    io.observe(el)
  }
}
