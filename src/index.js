import _ from 'lodash';
import './style.scss'

let i;

for(i = 0; i < 48; i++) {
  const itemElement = document.createElement('div');

  itemElement.setAttribute('class', 'item item-' + i);

  itemElement.innerHTML = `<span class="shadow-1"></span><span class="shadow-2"></span>`

  document.querySelector('#grid').appendChild(itemElement)
}