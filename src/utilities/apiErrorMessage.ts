export default class APIError {
  public message: string;
  public code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  public toString() {
    return `Error: ${this.message}`;
  }
}
