var _ = require('lodash');
import './style.css';
import './hello.scss';
// named import는
import {area, circumference} from './js/circle';
// default import: {}없고 이름을 바꿀수 있다.
var circle = require('./circle');
var cube = require('./cube');

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    return element;
}


console.log(circle.area(10));
console.log(circle.circumference(10));
console.log(cube.bulk(10));
document.body.appendChild(component());