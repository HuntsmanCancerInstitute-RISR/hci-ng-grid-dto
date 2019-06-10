import {HciGridDto} from "./grid.dto";

export class HciDataDto {

  data: Object[];
  dataCounts: number[];
  gridDto: HciGridDto;

  constructor(data?: Array<Object>, gridDto?: HciGridDto) {
    this.data = data;
    this.gridDto = gridDto;
  }

  getData(): Object[] {
    return this.data;
  }

  setData(data: Object[]) {
    this.data = data;
  }

  getGridDto(): HciGridDto {
    return this.gridDto;
  }

  setGridDto(gridDto: HciGridDto) {
    this.gridDto = gridDto;
  }

  getDataCounts(): number[] {
    return this.dataCounts;
  }

  setDataCounts(dataCounts: number[]): void {
    this.dataCounts = dataCounts;
  }
}
