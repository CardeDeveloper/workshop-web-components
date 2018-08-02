/* global HTMLElement */

class PokeElement extends HTMLElement {
  get lat () {
    return this.getAttribute('lat')
  }

  set lat (newLat) {
    this.setAttribute('lat', newLat)
  }

  get lng () {
    return this.getAttribute('lng')
  }

  set lng (newLng) {
    this.setAttribute('lng', newLng)
  }
}

export default PokeElement
