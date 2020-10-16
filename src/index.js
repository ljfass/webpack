import '../css/reset.css';
import '../css/style.css';
import MyImage from '../assets/images/image.svg'
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    // Lodash, now imported by this script
    element.innerHTML = '中国';

   // Add the image to our existing div.
   const myImage = new Image();
   myImage.src = MyImage;

   element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component()); 