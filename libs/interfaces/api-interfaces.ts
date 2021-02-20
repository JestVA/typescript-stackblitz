export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
  price: number;
}

export interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}
