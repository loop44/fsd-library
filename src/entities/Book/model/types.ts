export enum FetchStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCSESS',
  ERROR = 'ERROR'
}

export type Book = {
  uid: string;
  title: string;
  description: string;
  authors: string[];
  favourite: 0 | 1 | number;
};
