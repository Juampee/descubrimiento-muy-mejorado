import { UcjcDescubrimiento } from './element.js';

if (!customElements.get('ucjc-descubrimiento')) {
  customElements.define('ucjc-descubrimiento', UcjcDescubrimiento);
}

export default { nombre: 'descubrimiento', version: '0.1.0' };
