export interface Issue {
  state: string;
  created_at: Date;
  title: string;
  body: string;
  url: string;
  user: {
    login: string;
    url: string;
  };
}
export type Issues = Issue[];
