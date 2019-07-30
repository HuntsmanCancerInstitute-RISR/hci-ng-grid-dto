export class HciPagingDto {

  page: number = 0;
  pageSize: number = -1;
  dataSize: number = 0;
  numPages: number = 0;

  constructor(page: number = 0, pageSize: number = -1, dataSize: number = 0, numPages: number = 1) {
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

    if (this.dataSize && this.pageSize && this.pageSize > 0) {
      this.numPages = Math.ceil(this.dataSize / this.pageSize);
    } else if (this.pageSize && this.pageSize <= 0) {
      this.numPages = 1;
    }
  }

  getNumPages(): number {
    return this.numPages;
  }

  setNumPages(numPages: number) {
    this.numPages = numPages;
  }

  toFirstPage(): void {
    if (this.getPage() > 0) {
      this.setPage(this.getPage() - 1);
    }
  }

  toNextPage(): void {
    if (this.getPage() < this.getNumPages() - 1) {
      this.setPage(this.getPage() + 1);
    }
  }

  toLastPage(): void {
    this.setPage(this.getNumPages() - 1);
  }

  toPreviousPage(): void {
    if (this.getPage() > 0) {
      this.setPage(this.getPage() - 1);
    }
  }
}
