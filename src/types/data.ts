export type Instance = {
  front: number;
  back: number;
  db: number;
};

export interface Response {
  title: string;
  dev: Instance;
  test: Instance;
  prod: Instance;
  norm: number;
}
