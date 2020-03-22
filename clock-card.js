class ClockCard extends Polymer.Element {
  
  static get template() {
    return Polymer.html`
          <style>
        :host {
          cursor: pointer;
        }
        .content {
          padding: 8px 8px 8px;
        }
        .name {
          margin-left: 16px;
          font-size: 16px;
          color: var(--secondary-text-color);
        }
        .now {
          justify-content: space-between;
          align-items: center;
		  text-align: center;
          flex-wrap: wrap;
        }
        .main {
          display: inline-block;
          align-items: center;
        }
        .main .clock {
          font-size: 105px;
		  font-weight: bold;
          line-height: 1em;
          position: relative;
        }
      </style>
      <ha-card>
        <div class="content">
          <div class="now">
            <div class="main">
              <div class="clock" id="time"></div>
            </div>
          </div>
        </div>
      </ha-card>
     `
  }
  
  static get properties() {
    return {
      _hass: Object
    }
  }
  
  ready() {
    super.ready();
    this.time = this.$.time;
    
    this._updateTime();
    setInterval(() => this._updateTime(), 5000);
  }
  
  setConfig(config) {
    this.config = config;
  }
  
  set hass(hass) {
    this._hass = hass;
  }

  _updateTime(force = false) {
    this.time.innerHTML = moment().format('HH:mm');
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define('clock-card', ClockCard);
