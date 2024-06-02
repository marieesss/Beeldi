import React from 'react'
import useEquipments from '../../utils/hooks/useEquipments';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';


const EquipmentPage = () => {
    const { equipments, loading } =  useEquipments();
    const columns: GridColDef[] = [
        {field : "photo", headerName : "Photo", renderCell: (params) =>  <Avatar variant="square" alt={"image"} src={params.value} />},
        {field : "name", headerName : "Name"},
        {field : "domain", headerName : "Domaine"},
        {field : "nbFaults", headerName : "nbFaults"},
    ]
    return (
    loading ?  <CircularProgress /> : 
    <div>
      <DataGrid
        rows={equipments}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}

export default EquipmentPage
