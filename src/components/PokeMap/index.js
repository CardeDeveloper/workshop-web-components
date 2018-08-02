/* global window, google, HTMLElement */
import PokeMapStyle from './map-style'
class PokeMap extends HTMLElement {
  constructor () {
    super()
    this._map = {}
    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `
      <style>
        .map {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="map" class="map">
        <slot></slot>
      </div>
    `
  }

  static get is () {
    return 'poke-map'
  }

  connectedCallback () {
    this._loadMap()
  }

  disconnectedCallback () {
    this._map = null
  }

  _loadMap () {
    const config = {
      center: { lat: +this.lat, lng: +this.lng },
      zoom: +this.zoom,
      styles: PokeMapStyle
    }
    this._map = new google.maps.Map(this.shadowRoot.querySelector('#map'), config)
  }

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

  get map () {
    return this._map
  }

  get zoom () {
    return this.getAttribute('zoom')
  }

  set zoom (newZoom) {
    this.setAttribute('zoom', newZoom)
  }
}

export default PokeMap
