export type Filter = {
  id: string;
  func: (item: any) => boolean;
};
