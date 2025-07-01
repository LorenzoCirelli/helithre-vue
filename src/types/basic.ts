export interface DefaultElementType {
  text: string;
  id: string;
}

export class DefaultElement implements DefaultElementType {
  text: string;
  id: string;
  constructor(text: string, id: string) {
    this.text = text;
    this.id = id;
  }
}
