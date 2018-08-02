/* global google */
import PokeElement from '../PokeElement'
export class PokeMarker extends PokeElement {
  constructor () {
    super()
    this._marker = null
  }
  static get is () {
    return 'poke-marker'
  }

  connectedCallback () {
    this.draw()
  }

  disconnectedCallback () {
    this._marker && this._marker.setMap(null)
  }

  draw () {
    const map = this.parentElement && this.parentElement.map
    if (!map && google.maps.Marker) {
      return
    }
    this._marker = new google.maps.Marker({
      position: { lat: +this.lat, lng: +this.lng },
      map: map
    })
  }

  get marker () {
    return this._marker
  }
}

export default PokeMarker
