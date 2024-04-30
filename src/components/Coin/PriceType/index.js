import * as React from 'react';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css'

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  
  return (
    <div className='toggle-btn2'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "&.Mui-selected":{
            color:"var(--blue) !important",
        },
        borderColor:"var(--blue)",
        border:"unset !important",
        "& .MuiToggleButtonGroup-grouped":{
            border:"1px solid !important",
            borderColor:"unset",
            color:"var(--blue)",
        },
        "& .MuiToggleButton-standard":{
            color:"var(--blue)"
        },
      }}
    >
      <ToggleButton value="prices" >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" >
        Market Cap 
      </ToggleButton>
      <ToggleButton value="total_volume" >
        Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
