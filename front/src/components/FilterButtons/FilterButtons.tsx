import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import { clearSearch, removeOneFilter, selectFilters, selectSearch } from '../../redux/FilterSlice'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const FilterButtons = () => {
const dispatch = useAppDispatch()
const filters = useTypedSelector(selectFilters)
const search = useTypedSelector(selectSearch)

  return (
    <div>
        {filters.map((filter)=>(
        <Button variant="contained" key={`${filter.keyFilter}-${filter.value}`} endIcon={<CloseIcon />} onClick={()=>dispatch(removeOneFilter(filter.keyFilter))}>
            {filter.keyFilter} :{filter.value }
          </Button>
        ))}

        {search.length > 0 &&
                <Button variant="contained" key={`search-${search}`} endIcon={<CloseIcon />} onClick={()=>dispatch(clearSearch())}>
                {search}
              </Button>
      }
      
    </div>
  )
}

export default FilterButtons
