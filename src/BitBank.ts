import {Pair} from './const';

export default class BitBank implements BrokerAdapter {
  private name: string;
  private ticker: {
    sell: string,
    buy: string,
    high: string,
    low: string,
    last: string,
    vol: string,
    timestamp: number
  };

  constructor() {
    console.log('SimpleTicker constructor');
    console.log(`Node version: ${process.version}`);
    this.name = 'SimpleTicker';
  }

  fetch(aPair: Pair): void {
    // https://public.bitbank.cc/btc_jpy/ticker
  }

  get price(): string {
    if (!this.ticker) {
      return '';
    }
    return this.ticker.last;
  }

  get timestamp(): number {
    if (!this.ticker) {
      return -1;
    }
    return this.ticker.timestamp;
  }
}
