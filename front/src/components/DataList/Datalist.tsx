import {GridColDef } from '@mui/x-data-grid';
import { useTypedSelector } from '../../redux/store';
import { selectEquipments, selectFilteredEquipments } from '../../redux/EquipmentSlice';
import { Avatar } from '@mui/material';
import { RenderOption } from '../../types/Datalist';
import GridContainer from '../GridContainer/GridContainer';
import CardContainer from '../CardContainer/CardContainer';

const Datalist = ({ option }: { option: RenderOption }) => {
  const equipments = useTypedSelector(selectEquipments) || [];
  const equipmentsFiltered = useTypedSelector(selectFilteredEquipments) || [];

  const columns: GridColDef[] = [
    { field: 'photo', headerName: 'Photo', renderCell: (params) => <Avatar variant="square" alt={'image'} src={params.value} /> },
    { field: 'name', headerName: 'Name' },
    { field: 'domain', headerName: 'Domaine' },
    { field: 'nbFaults', headerName: 'nbFaults' },
  ];

  return (
    <div>
      {option === 'DataGrid' ? (
        <GridContainer columns={columns} data={equipmentsFiltered.length > 0 ? equipmentsFiltered : equipments}/>
      ): 
      <CardContainer data={equipmentsFiltered.length > 0 ? equipmentsFiltered : equipments}/>}
    </div>
  );
};

export default Datalist;
