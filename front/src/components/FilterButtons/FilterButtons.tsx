import React from 'react'
import { useAppDispatch, useTypedSelector } from '../../redux/store'
import { removeOneFilter, selectFilters } from '../../redux/FilterSlice'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const FilterButtons = () => {
const dispatch = useAppDispatch()
const filters = useTypedSelector(selectFilters)
  return (
    <div>
        {filters.map((filter)=>(
        <Button variant="contained" endIcon={<CloseIcon />} onClick={()=>dispatch(removeOneFilter(filter.keyFilter))}>
            {filter.keyFilter}
          </Button>
        ))
        }
      
    </div>
  )
}

export default FilterButtons
