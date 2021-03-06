import {HciFilterDto} from "./filter.dto";
import {HciSortDto} from "./sort.dto";
import {HciPagingDto} from "./paging.dto";
import {HciGroupingDto} from "./grouping.dto";

export class HciGridDto {

  filters: HciFilterDto[] = [];
  sorts: HciSortDto[] = [];
  paging: HciPagingDto = new HciPagingDto();
  grouping: HciGroupingDto = new HciGroupingDto();

  constructor(filters: HciFilterDto[] = [], sorts: HciSortDto[] = [], paging: HciPagingDto = new HciPagingDto(), grouping: HciGroupingDto = new HciGroupingDto()) {
    this.filters = filters;
    this.sorts = sorts;
    this.paging = paging;
    this.grouping = grouping;
  }

  getFilters(): HciFilterDto[] {
    return this.filters;
  }

  setFilters(filters: HciFilterDto[]) {
    this.filters = filters;
  }

  getSorts(): HciSortDto[] {
    return this.sorts;
  }

  setSorts(sorts: HciSortDto[]) {
    this.sorts = sorts;
  }

  getPaging(): HciPagingDto {
    return this.paging;
  }

  setPaging(paging: HciPagingDto) {
    this.paging = paging;
  }

  getGrouping(): HciGroupingDto {
    return this.grouping;
  }

  setGrouping(grouping: HciGroupingDto) {
    this.grouping = grouping;
  }
}
