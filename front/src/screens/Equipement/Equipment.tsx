import { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { selectIsLoading } from "../../redux/EquipmentSlice";
import { getEquipments } from "../../redux/actions/Equipments";
import { useAppDispatch, useTypedSelector } from "../../redux/store";
import SearchBar from "../../components/SearchBar/SearchBar";
import Datalist from "../../components/DataList/Datalist";
import { Grid, Radio } from "@mui/material";
import { RenderOption } from "../../types/Datalist";
import { clearSearch, newSearch } from "../../redux/FilterSlice";
import Filter from "../../components/Filter/Filter";
import FilterButtons from "../../components/FilterButtons/FilterButtons";

const EquipmentPage = () => {
  const dispatch = useAppDispatch();
  const loading = useTypedSelector(selectIsLoading);

  const isMounted = useRef(false);
  // Fetch equipments
  useEffect(() => {
    if (!isMounted.current) {
      dispatch(getEquipments());
      isMounted.current = true;
    }
  }, [isMounted, dispatch]);

  const [renderOption, setRenderOption] = useState<RenderOption>("DataGrid");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: RenderOption = event.target.value as RenderOption;
    setRenderOption(value);
  };

  const handleValueChanged = (target: any) => {
    // If something is typed in search bar
    if (target.value.length >= 1) {
      dispatch(newSearch(target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={2} padding={5}>
       <Grid item xs={8}>
      <SearchBar handleValueChange={handleValueChanged} />
      </Grid>
      <Grid item xs={4}>
        <label>
          <Radio
            checked={renderOption === "DataGrid"}
            onChange={handleChange}
            value="DataGrid"
            name="radio-buttons"
          />
          Liste
        </label>
        <label>
          <Radio
            checked={renderOption === "List"}
            onChange={handleChange}
            value="List"
            name="radio-buttons"
          />
          Cards
        </label>
        </Grid>
      <Grid item xs={2}>
      <Filter filterKey="status"/>
      </Grid>
      <Grid item xs={2}>
      <Filter filterKey={"niveau"}/>
      </Grid>
      <Grid item xs={2}>
      <Filter filterKey={"model"}/>
      </Grid>
      <Grid item xs={2}>
      <Filter filterKey="local"/>
      </Grid>
      <Grid item xs={10}>
      <FilterButtons/>
      </Grid>
      <Grid item xs={12}>
      <Datalist option={renderOption} />
      </Grid>
      </Grid>
  );
};

export default EquipmentPage;
