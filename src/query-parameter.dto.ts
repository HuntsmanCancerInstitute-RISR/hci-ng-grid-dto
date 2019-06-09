export class HciQueryParameterDto {

  field: string;
  value: any;
  dataType: string;

  constructor(field: string, value: any, dataType?: string) {
    this.field = field;
    this.value = value;
    this.dataType = dataType;
  }

  getField(): string {
    return this.field;
  }

  setField(value: string) {
    this.field = value;
  }

  getValue(): any {
    return this.value;
  }

  setValue(value: any) {
    this.value = value;
  }

  getDataType(): string {
    return this.dataType;
  }

  setDataType(dataType: string) {
    this.dataType = dataType;
  }
}
