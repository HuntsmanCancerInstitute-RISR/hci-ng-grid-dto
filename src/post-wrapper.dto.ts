import {HciGridDto} from "./grid.dto";
import {HciQueryParameterDto} from "./query-parameter.dto";

export class HciPostWrapperDto {

  gridDto: HciGridDto;
  parameters: HciQueryParameterDto[];

  constructor(gridDto?: HciGridDto, parameters?: HciQueryParameterDto[]) {
    this.gridDto = gridDto;
    this.parameters = parameters;
  }

  getGridDto(): HciGridDto {
    return this.gridDto;
  }

  setGridDto(gridDto: HciGridDto): void {
    this.gridDto = gridDto;
  }

  getParameters(): HciQueryParameterDto[] {
    return this.parameters;
  }

  setParameters(parameters: HciQueryParameterDto[]): void {
    this.parameters = parameters;
  }
}
