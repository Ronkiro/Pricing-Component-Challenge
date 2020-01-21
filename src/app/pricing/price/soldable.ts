export class Soldable {
  type: string;
  price: number;
  storage: string;
  maxUsers: number;
  maxGB: string;

  /**
   *
   */
  constructor(init: Partial<Soldable>) {
    Object.assign(this, init);
  }
}
