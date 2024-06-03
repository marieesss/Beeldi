import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import EquipementsService from "../../data/services/EquipmentService";
import { EquipmentDetails } from "../../types/Equipements";
import { GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import GridContainer from "../../components/GridContainer/GridContainer";
import EquipementInfos from "../../components/EquipementInfos/EquipementInfos";
import { Checkpoint } from "../../types/Checkpoints";

const EquipementDetails = () => {
  const { id } = useParams();
  const [equipement, setEquipment] = useState<EquipmentDetails>();
  const [checkpoint, setCheckpoints] = useState<Checkpoint[]>();

  const retrieveEquipementDetails = useCallback(async (id: string) => {
    const service = EquipementsService();
    const data: EquipmentDetails = await service.getEquipment(id);
    setCheckpoints(data.checkpoints);
    setEquipment(data);
  }, []);

  useEffect(() => {
    if (id) {
      retrieveEquipementDetails(id);
    }
  }, [retrieveEquipementDetails]);

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      renderCell: (params) => (
        <Avatar variant="square" alt={"image"} src={params.value} />
      ),
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "fault",
      headerName: "Fault",
      flex: 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "recommandation",
      headerName: "Recommandations",
      flex: 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
          {params.value}
        </div>
      ),
    },
  ];

  return (
    <>
      {equipement ? (
        <div>
          <img src={equipement.photo} alt="equipementPhoto" />
          <EquipementInfos data={equipement} />
          {checkpoint && <GridContainer data={checkpoint} columns={columns} />}
        </div>
      ) : null}
    </>
  );
};

export default EquipementDetails;
