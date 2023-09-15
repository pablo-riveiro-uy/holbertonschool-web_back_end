export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Building) console.error('Error: Class extending Building must override evacuationWarningMessage');
  }
}
