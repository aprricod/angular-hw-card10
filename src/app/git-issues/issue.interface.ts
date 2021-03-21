export interface Issue {
  number: number;
  state: string;
  created_at: Date;
  title: string;
  url: string;
  userdata?: string;
  user: {
    login: string;
    url: string;
  };
  body: string;
}
export type Issues = Issue[];
