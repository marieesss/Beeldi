import { clearFilter, newFilter } from '../../redux/FilterSlice';
import { selectEquipments } from '../../redux/EquipmentSlice';
import { Equipment } from '../../types/Equipements';
import { useAppDispatch, useTypedSelector } from '../../redux/store';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

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
      dispatch(clearFilter());
    }
  };

  return (
    <Select fullWidth label="Status" defaultValue={""} onChange={handleChange}>
      <MenuItem value={""}>Default</MenuItem>
      {output.map((option: Equipment) => (
        <MenuItem key={option[filterKey] as string} value={option[filterKey]}>
          {option[filterKey]}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Filter;