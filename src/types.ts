export interface Dict<T> {
  [key: number]: T;
}

export type ClickHandler<T> = (param: T) => void;
