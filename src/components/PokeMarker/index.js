/* global google, CustomEvent */
import PokeElement from '../PokeElement'
export class PokeMarker extends PokeElement {
  constructor () {
    super()
    this._marker = null
  }
  static get is () {
    return 'poke-marker'
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'lat' || name === 'lng') {
      this._changePosition(+this.lat, +this.lng)
    }
  }

  connectedCallback () {
    this.draw()
  }

  disconnectedCallback () {
    this._marker && this._marker.setMap(null)
  }

  _changePosition (lat, lng) {
    this._marker && this._marker.setPosition({ lat, lng })
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
    this._marker.addListener('click', this.dispatchClick.bind(this))
  }

  get marker () {
    return this._marker
  }

  dispatchClick () {
    const position = this._marker.getPosition()
    this.dispatchEvent(new CustomEvent('marker-click', {
      detail: { lat: position.lat(), lng: position.lng() }, bubbles: true
    }))
  }
}

export default PokeMarker
