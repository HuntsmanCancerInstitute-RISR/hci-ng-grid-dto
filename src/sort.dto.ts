export class HciSortDto {

  field: string;
  asc: boolean = true;

  constructor(field: string, asc?: boolean) {
    this.field = field;
    if (asc) {
      this.asc = asc;
    }
  }

  getField(): string {
    return this.field;
  }

  setField(field: string) {
    this.field = field;
  }

  getAsc(): boolean {
    return this.asc;
  }

  setAsc(asc: boolean) {
    this.asc = asc;
  }
}
