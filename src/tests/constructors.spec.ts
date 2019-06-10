
import {} from "jasmine";

import {HciPostWrapperDto} from "../post-wrapper.dto";
import {HciSortDto} from "../sort.dto";
import {HciQueryParameterDto} from "../query-parameter.dto";
import {HciGroupingDto} from "../grouping.dto";
import {HciPagingDto} from "../paging.dto";
import {HciFilterDto} from "../filter.dto";
import {HciGridDto} from "../grid.dto";
import {HciDataDto} from "../data.dto";

it ("DTOs should be created.", () => {
  expect((new HciPostWrapperDto()).getGridDto()).toBe(undefined);
  expect((new HciDataDto()).getGridDto()).toBe(undefined);
  expect((new HciGridDto()).getFilters()).toBe(undefined);
  expect((new HciFilterDto()).getDataType()).toBe(undefined);
  expect((new HciSortDto()).getField()).toBe(undefined);
  expect((new HciPagingDto()).getDataSize()).toBe(undefined);
  expect((new HciGroupingDto()).getFields()).toBe(undefined);
  expect((new HciQueryParameterDto()).getField()).toBe(undefined);
});

it ("DTOs should be have default values.", () => {
  expect((new HciSortDto()).getAsc()).toBe(true);
});

it ("Data should be defined.", () => {
  let dto: HciDataDto = new HciDataDto();
  dto.setData([]);
  dto.setDataCounts([]);
  dto.setGridDto(new HciGridDto());

  expect(dto.getData().length).toBe(0);
  expect(dto.getDataCounts().length).toBe(0);
  expect(dto.getGridDto() !== undefined).toBe(true);
});

it ("Post should be defined.", () => {
  let dto: HciPostWrapperDto = new HciPostWrapperDto();
  dto.setGridDto(new HciGridDto());
  dto.setParameters([]);

  expect(dto.getParameters().length).toBe(0);
  expect(dto.getGridDto() !== undefined).toBe(true);
});

it ("Grid should be defined.", () => {
  let dto: HciGridDto = new HciGridDto();
  dto.setFilters([]);
  dto.setSorts([]);
  dto.setPaging(new HciPagingDto());
  dto.setGrouping(new HciGroupingDto());

  expect(dto.getFilters().length).toBe(0);
  expect(dto.getSorts().length).toBe(0);
  expect(dto.getPaging() !== undefined).toBe(true);
  expect(dto.getGrouping() !== undefined).toBe(true);
});

it ("Filter should be defined.", () => {
  let dto: HciFilterDto = new HciFilterDto();
  dto.setDataType("string");
  dto.setField("firstName");
  dto.setHighValue("1");
  dto.setOperator("E");
  dto.setValid(true);
  dto.setValue("0");

  expect(dto.getDataType() === "string");
  expect(dto.getField() === "firstName");
  expect(dto.getHighValue() === "1");
  expect(dto.getOperator() === "E");
  expect(dto.getValid() === true);
  expect(dto.getValue() === "0");
});
