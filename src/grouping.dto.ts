export class HciGroupingDto {

  fields: string[];
  groupQuery: boolean;

  constructor(fields: string[], groupQuery?: boolean) {
    this.fields = fields;
    this.groupQuery = groupQuery;
  }

  getFields(): string[] {
    return this.fields;
  }

  setFields(fields: string[]): void {
    this.fields = fields;
  }

  getGroupQuery(): boolean {
    return this.groupQuery;
  }

  setGroupQuery(groupQuery: boolean): void {
    this.groupQuery = groupQuery;
  }
}
