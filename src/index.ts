import BitBank from './BitBank';
import TickerType from './TickerType';
import {Pair} from './const';

const bitbank = new BitBank();

(async() => {
  await bitbank.fetch(Pair.BTC, (aTicker) => {
    const {last, timestamp} = aTicker;
    console.log(`price: ${last}, timestamp: ${timestamp}`);
  });

  console.log(`price: ${bitbank.price}, timestamp: ${bitbank.timestamp}`);
})();
