import BrokerAdapter from './BrokerAdapter';
import TickerType from './TickerType';
import {Pair} from './const';
import fetch from 'node-fetch';

export default class BitBank implements BrokerAdapter {
  private origin = 'https://public.bitbank.cc';
  private name: string;
  private ticker: TickerType;

  constructor() {
    console.log('BitBank constructor');
    console.log(`Node version: ${process.version}`);

    this.origin = 'https://public.bitbank.cc';
    this.name = 'BitBank';
    this.ticker = { // TODO: Is there more suitable codes ?
      sell: '',
      buy: '',
      high: '',
      low: '',
      last: '',
      vol: '',
      timestamp: 0
    };
  }

  async fetch(aPair: Pair, aCallback: (aTicker: TickerType) => void) {
    const url = `${this.origin}/${aPair}/ticker`;

    return fetch(url)
      .then(aResult => aResult.json())
      .then(aJSON => {
        this.ticker = aJSON.data;
        aCallback(aJSON.data);
      });
  }

  get price(): number {
    if (!this.ticker) {
      return 0;
    }
    return +this.ticker.last; // TODO: cast
  }

  get timestamp(): number {
    if (!this.ticker) {
      return -1;
    }
    return this.ticker.timestamp;
  }
}
