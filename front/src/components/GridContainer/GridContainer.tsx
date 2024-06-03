import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Equipment } from "../../types/Equipements";
import { Checkpoint } from "../../types/Checkpoints";
const GridContainer = ({
  columns,
  data,
}: {
  columns: GridColDef[];
  data: Equipment[] | Checkpoint[];
}) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      disableColumnSorting
      disableColumnFilter
      disableColumnMenu
      getRowHeight={() => "auto"}
    />
  );
};

export default GridContainer;
