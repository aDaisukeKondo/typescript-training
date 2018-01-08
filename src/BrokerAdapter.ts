import {Pair} from './const';

export default interface BrokerAdapter {
  fetch(aPair: Pair, aCallBack: (aJSON: any) => void);
  price: number;
  timestamp: number;
}
