import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Equipment } from '../../types/Equipements'

const GridContainer = ({
columns,
data
}:{
    columns : GridColDef[]
    data : Equipment[]
} ) => {
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
        />
      
  )
}

export default GridContainer