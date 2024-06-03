import { useEffect, useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { clearFilter, selectIsLoading } from '../../redux/EquipmentSlice';
import { getEquipments } from '../../redux/actions/Equipments';
import { useAppDispatch, useTypedSelector } from '../../redux/store';
import { filterEquipments } from '../../redux/EquipmentSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import Datalist from '../../components/DataList/Datalist';
import { Radio } from '@mui/material';
import { RenderOption } from '../../types/Datalist';

const EquipmentPage = () => {
  const dispatch = useAppDispatch();
  const loading = useTypedSelector(selectIsLoading)

  const isMounted = useRef(false)
// Fetch equipments
  useEffect(()=>{
    if(!isMounted.current){
      dispatch(getEquipments())
      isMounted.current = true
    }
  }, [isMounted, dispatch])

  const [renderOption, setRenderOption] = useState<RenderOption>('DataGrid');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: RenderOption = event.target.value as RenderOption;
    setRenderOption(value);
  };

  const handleValueChanged = (target : any) =>{
    // If something is typed in search bar
    if(target.value.length >= 1){
      dispatch(filterEquipments(target.value))
    }else {
      dispatch(clearFilter())
    }
  }

    return (
    loading ?  <CircularProgress /> : 
    <div>
      <SearchBar handleValueChange={handleValueChanged}/>
      <>
      <label >
      <Radio
      checked={renderOption === 'DataGrid'}
      onChange={handleChange}
      value="DataGrid"
      name="radio-buttons"
      />
      Liste
      </label>
    <label>
    <Radio
    checked={renderOption === 'List'}
    onChange={handleChange}
    value="List"
    name="radio-buttons"
    />
    Cards
    </label>
      </>
      <Datalist option={renderOption}/>
    </div>
  )
}

export default EquipmentPage