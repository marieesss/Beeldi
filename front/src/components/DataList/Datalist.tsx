import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useTypedSelector } from "../../redux/store";
import {
  selectEquipments,
  selectFilteredEquipments,
} from "../../redux/EquipmentSlice";
import { Avatar, Button } from "@mui/material";
import { RenderOption } from "../../types/Datalist";
import GridContainer from "../GridContainer/GridContainer";
import CardContainer from "../CardContainer/CardContainer";
import { Link } from "react-router-dom";

const Datalist = ({ option }: { option: RenderOption }) => {
  const equipments = useTypedSelector(selectEquipments) || [];
  const equipmentsFiltered = useTypedSelector(selectFilteredEquipments) || [];

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      renderCell: (params) => (
        <Avatar variant="square" alt={"image"} src={params.value} />
      ),
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

  return (
    <div>
      {option === "DataGrid" ? (
        <GridContainer
          columns={columns}
          data={equipmentsFiltered.length > 0 ? equipmentsFiltered : equipments}
        />
      ) : (
        <CardContainer
          data={equipmentsFiltered.length > 0 ? equipmentsFiltered : equipments}
        />
      )}
    </div>
  );
};

export default Datalist;
