export class HciFilterDto {

  field: string;
  dataType: string = "string";
  value: any;
  highValue: any;
  operator: string = "LIKE";
  valid: boolean = false;

  constructor(field: string, dataType: string, value: any, highValue: any, operator: string, valid: boolean) {
    this.field = field;
    this.dataType = dataType;
    this.value = value;
    this.highValue = highValue;
    this.operator = operator;
    this.valid = valid;
  }

  getField(): string {
    return this.field;
  }

  setField(value: string) {
    this.field = value;
  }

  getDataType(): string {
    return this.dataType;
  }

  setDataType(value: string) {
    this.dataType = value;
  }

  getValue(): any {
    return this.value;
  }

  setValue(value: any) {
    this.value = value;
  }

  getHighValue(): any {
    return this.highValue;
  }

  setHighValue(value: any) {
    this.highValue = value;
  }

  getOperator(): string {
    return this.operator;
  }

  setOperator(value: string) {
    this.operator = value;
  }

  getValid(): boolean {
    return this.valid;
  }

  setValid(value: boolean) {
    this.valid = value;
  }
}
