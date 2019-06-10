import {} from "jasmine";

import {HciPostWrapperDto} from "../post-wrapper.dto";
import {HciSortDto} from "../sort.dto";
import {HciQueryParameterDto} from "../query-parameter.dto";
import {HciGroupingDto} from "../grouping.dto";
import {HciPagingDto} from "../paging.dto";
import {HciFilterDto} from "../filter.dto";
import {HciGridDto} from "../grid.dto";
import {HciDataDto} from "../data.dto";

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

it ("Sort should be defined.", () => {
  let dto: HciSortDto = new HciSortDto();
  dto.setField("firstName");
  dto.setAsc(false);

  expect(dto.getField() === "firstName");
  expect(!dto.getAsc());
});

it ("Paging should be defined.", () => {
  let dto: HciPagingDto = new HciPagingDto();
  dto.setDataSize(1);
  dto.setNumPages(2);
  dto.setPage(3);
  dto.setPageSize(4)

  expect(dto.getDataSize() === 1);
  expect(dto.getPage() === 2);
  expect(dto.getNumPages() === 3);
  expect(dto.getPageSize() === 4);
});

it ("Grouping should be defined.", () => {
  let dto: HciGroupingDto = new HciGroupingDto();
  dto.setFields([]);
  dto.setGroupQuery(true);

  expect(dto.getFields().length === 0);
  expect(dto.getGroupQuery());
});

it ("Query Parameter should be defined.", () => {
  let dto: HciQueryParameterDto = new HciQueryParameterDto();
  dto.setField("firstName");
  dto.setValue("Bob");
  dto.setDataType("string");

  expect(dto.getField() === "firstName");
  expect(dto.getValue() === "Bob");
  expect(dto.getDataType() === "string");
});
