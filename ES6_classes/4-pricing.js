import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = Currency) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    this._amount = amount;
    this._currency = currency;
  }

  // Getter

  get amaunt() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters

  set setAmount(newAmount) {
    this._amount = newAmount;
  }

  set setCurrency(newCurrency) {
    if (typeof newCurrency !== 'number') throw TypeError('Amount must be a number');
    this._amount = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amauntToConvert, conversionRate) {
    return amauntToConvert * conversionRate;
  }
}
