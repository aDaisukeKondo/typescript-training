import BitBank from './app';
import {Pair} from './const';

const bitbank = new BitBank();
bitbank.fetch(Pair.BTC);

console.log(bitbank.price);
console.log(bitbank.timestamp);
