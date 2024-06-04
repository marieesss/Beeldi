import { newFilter, removeOneFilter } from '../../redux/FilterSlice';
import { selectEquipments } from '../../redux/EquipmentSlice';
import { Equipment } from '../../types/Equipements';
import { useAppDispatch, useTypedSelector } from '../../redux/store';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const Filter = ({ filterKey }: { filterKey: keyof Equipment }) => {
  const equipments = useTypedSelector<Equipment[]>(selectEquipments);
  const dispatch = useAppDispatch();

  const output = equipments.reduce((acc: Equipment[], b: Equipment) => {
    if (!acc.map((o: Equipment) => o[filterKey]).includes(b[filterKey])) {
      acc.push(b);
    }
    return acc;
  }, [] as Equipment[]);

  const handleChange = (evt: SelectChangeEvent<string>) => {
    if (evt.target.value.length >= 1) {
      dispatch(newFilter({ value: evt.target.value, keyFilter: filterKey }));
    } else {
      dispatch(removeOneFilter(filterKey))
    }
  };

  return (
    <>
    <InputLabel id="demo-multiple-name-label">{filterKey}</InputLabel>
    <Select fullWidth placeholder={filterKey}  onChange={handleChange} defaultValue=''>
      <MenuItem value={""}>Default</MenuItem>
      {output.map((option: Equipment) => (
        <MenuItem key={option[filterKey] as string} value={option[filterKey]}>
          {option[filterKey]}
        </MenuItem>
      ))}
    </Select>
      </>

  );
};

export default Filter;
