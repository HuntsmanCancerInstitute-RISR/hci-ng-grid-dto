export class HciPagingDto {

  page: number = 0;
  pageSize: number = -1;
  dataSize: number = 0;
  numPages: number = 0;

  toString(): string {
    return "PageInfo: page: " + this.page + "; pageSize: " + this.pageSize + "; dataSize: " + this.dataSize + "; numPages: " + this.numPages;
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
  }

  getNumPages(): number {
    return this.numPages;
  }

  setNumPages(numPages: number) {
    this.numPages = numPages;
  }
}
