export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    }
  } else {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
}
