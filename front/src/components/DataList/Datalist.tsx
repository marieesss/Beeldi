import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useTypedSelector } from "../../redux/store";
import { selectEquipments } from "../../redux/EquipmentSlice";
import { Avatar, Button } from "@mui/material";
import { RenderOption } from "../../types/Datalist";
import GridContainer from "../GridContainer/GridContainer";
import CardContainer from "../CardContainer/CardContainer";
import { Link } from "react-router-dom";
import { selectFilters, selectSearch } from "../../redux/FilterSlice";
import { filterData } from "../../utils/utils";

const Datalist = ({ option }: { option: RenderOption }) => {
  const equipments = useTypedSelector(selectEquipments) || [];
  const search = useTypedSelector(selectSearch);
  const filters = useTypedSelector(selectFilters);

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      renderCell: (params) => <Avatar variant="square" alt={"image"} src={params.value} />,
    },
    { field: "name", headerName: "Name" },
    { field: "domain", headerName: "Domaine" },
    { field: "nbFaults", headerName: "nbFaults" },
    {
      field: "id",
      headerName: "",
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <strong>
          <Link to={`/${params.value}`}>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              tabIndex={params.hasFocus ? 0 : -1}
            >
              Open
            </Button>
          </Link>
        </strong>
      ),
    },
  ];

  const filteredData = filterData(equipments, filters, search)
  
  return (
    <div>
      {filteredData.length < 1 ? 
        <>No data</>
      : option === "DataGrid" ? (
        <GridContainer columns={columns} data={filteredData} />
      ) : (
        <CardContainer data={filteredData} />
      )}
    </div>
  );
};

export default Datalist;
