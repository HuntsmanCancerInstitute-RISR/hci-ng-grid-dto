# hci-ng-grid-dto

Contains DTOs related to filtering, sorting, paging and grouping of grids and lists required for backend calls.

This library is intended to be used by a variety of grid and or list angular components.  This library contains all
of the information that a backend data call might need to query data based on what the user interface is requesting.
There are multiple filters and sorts.  There is paging information and grouping information.  The information is wrapped
in a dto and the response also has its own dto.

Implementation can be seen in hci-ng-grid.
