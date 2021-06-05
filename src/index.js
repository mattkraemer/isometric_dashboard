import _ from 'lodash';
import './style.scss'

let i;

for(i = 0; i < 48; i++) {
  const itemElement = document.createElement('div');

  itemElement.setAttribute('class', 'item item-' + i);

  itemElement.innerHTML = `<h1>Block No ${i}</h1><span class="shadow-1"></span><span class="shadow-2"></span>`

  document.querySelector('#grid').appendChild(itemElement)
}

const addItemContent = (item, count) => {
  const itemListParent = document.createElement('ul');
  itemListParent.setAttribute('class', 'itemListParent')
  const targetElement = document.querySelector('.item-' + item).appendChild(itemListParent);

  for(i = 0; i < count; i++) {
    const itemListChild = document.createElement('li');
    itemListChild.setAttribute('class', 'itemListChild');
    itemListChild.innerHTML = `<span>Item Child Content</span>`;

    let i;
    
    targetElement.appendChild(itemListChild)
  }
}

addItemContent(21, 3)