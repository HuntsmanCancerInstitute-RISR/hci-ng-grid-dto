
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
  expect((new HciGridDto()).getFilters().length).toBe(0);
  expect((new HciFilterDto()).getDataType()).toBe("string");
  expect((new HciSortDto()).getField()).toBe(undefined);
  expect((new HciPagingDto()).getDataSize()).toBe(0);
  expect((new HciGroupingDto()).getFields().length).toBe(0);
  expect((new HciQueryParameterDto()).getField()).toBe(undefined);
});

it ("DTOs should be have default values.", () => {
  expect((new HciSortDto()).getAsc()).toBe(true);
});

it ("Data should be defined.", () => {
  let dto: HciDataDto = new HciDataDto([], new HciGridDto(), []);

  expect(dto.getData().length).toBe(0);
  expect(dto.getDataCounts().length).toBe(0);
  expect(dto.getGridDto() !== undefined).toBe(true);
});

it ("Post should be defined.", () => {
  let dto: HciPostWrapperDto = new HciPostWrapperDto(new HciGridDto(), []);

  expect(dto.getParameters().length).toBe(0);
  expect(dto.getGridDto() !== undefined).toBe(true);
});

it ("Grid should be defined.", () => {
  let dto: HciGridDto = new HciGridDto([], [], new HciPagingDto(), new HciGroupingDto());

  expect(dto.getFilters().length).toBe(0);
  expect(dto.getSorts().length).toBe(0);
  expect(dto.getPaging() !== undefined).toBe(true);
  expect(dto.getGrouping() !== undefined).toBe(true);
});

it ("Filter should be defined.", () => {
  let dto: HciFilterDto = new HciFilterDto("firstName", "string", "0", "1", "E", true);

  expect(dto.getDataType() === "string");
  expect(dto.getField() === "firstName");
  expect(dto.getHighValue() === "1");
  expect(dto.getOperator() === "E");
  expect(dto.getValid() === true);
  expect(dto.getValue() === "0");
});

it ("Sort should be defined.", () => {
  let dto: HciSortDto = new HciSortDto("firstName", false);

  expect(dto.getField() === "firstName");
  expect(!dto.getAsc());
});

it ("Paging should be defined.", () => {
  let dto: HciPagingDto = new HciPagingDto(3, 4, 1, 2);

  expect(dto.getDataSize() === 1);
  expect(dto.getPage() === 2);
  expect(dto.getNumPages() === 3);
  expect(dto.getPageSize() === 4);
});

it ("Grouping should be defined.", () => {
  let dto: HciGroupingDto = new HciGroupingDto([], true);

  expect(dto.getFields().length === 0);
  expect(dto.getGroupQuery());
});

it ("Query Parameter should be defined.", () => {
  let dto: HciQueryParameterDto = new HciQueryParameterDto("firstName", "Bob", "string");

  expect(dto.getField() === "firstName");
  expect(dto.getValue() === "Bob");
  expect(dto.getDataType() === "string");
});
