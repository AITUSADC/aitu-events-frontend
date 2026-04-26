export interface User {
  name: string;
  barcode: string;
  tg: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  registered: boolean;
}

export interface AuthRouteState {
  name: string;
  barcode: string;
  tg?: string;
}
