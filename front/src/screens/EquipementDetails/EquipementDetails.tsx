import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EquipementsService from '../../data/services/EquipmentService';
import { Checkpoint, Equipment, EquipmentDetails } from '../../types/Equipements';
import { GridColDef } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import GridContainer from '../../components/GridContainer/GridContainer';

const EquipementDetails = () => {
const { id } = useParams();
const [equipementDetails, setEquipementDetails] = useState<EquipmentDetails>();

const retrieveEquipementDetails = useCallback(async(id : string) => {
    const service = EquipementsService()
    const data : EquipmentDetails= await service.getEquipment(id)
    console.log(data)
    setEquipementDetails(data)
  }, []); 

  useEffect(() => {
    if(id){
    retrieveEquipementDetails(id);
    }
  }, [id, retrieveEquipementDetails]);

  const columns: GridColDef[] = [
    { field: 'photo', headerName: 'Photo', renderCell: (params) => <Avatar variant="square" alt={'image'} src={params.value} />, flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1, renderCell: (params) => <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</div> },
    { field: 'fault', headerName: 'Fault', flex: 1, renderCell: (params) => <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</div> },
    { field: 'recommandation', headerName: 'Recommandations', flex: 1, renderCell: (params) => <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{params.value}</div> }
  ];


  return (
    <>
    {
        equipementDetails ? 
        <div>
            <img src={equipementDetails.photo}/>
            {equipementDetails.checkpoints &&

            <GridContainer data={equipementDetails.checkpoints} columns={columns}/>
            
            }
        </div>
        : null
    }
    </>
  )
}

export default EquipementDetails
