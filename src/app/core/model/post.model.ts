export class viewAllPost {
  page: number = 1;
  pageSize: number = 30;
  tag?: string | undefined = '';
  title?: string | undefined = '';
  keyword?: string | undefined = '';
  categoryId?: string | undefined = '';
  userName?: string | undefined = '';
  status?: number | undefined = 0;
  createDate?: string | undefined = '';
  [key: string]: any;
}
