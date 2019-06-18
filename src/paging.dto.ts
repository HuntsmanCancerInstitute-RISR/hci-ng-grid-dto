export class HciPagingDto {

  page: number = 0;
  pageSize: number = -1;
  dataSize: number = 0;
  numPages: number = 0;

  constructor(page?: number, pageSize?: number, dataSize?: number, numPages?: number) {
    this.page = page;
    this.pageSize = pageSize;
    this.dataSize = dataSize;
    this.numPages = numPages;
  }

  getPage(): number {
    return this.page;
  }

  setPage(page: number) {
    this.page = page;
  }

  getPageSize(): number {
    return this.pageSize;
  }

  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
  }

  getDataSize(): number {
    return this.dataSize;
  }

  setDataSize(dataSize: number) {
    this.dataSize = dataSize;

    this.numPages = Math.ceil(this.dataSize / this.pageSize);
  }

  getNumPages(): number {
    return this.numPages;
  }

  setNumPages(numPages: number) {
    this.numPages = numPages;
  }
}
