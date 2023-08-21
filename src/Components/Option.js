import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Option = () => {
  return (
    <div className='option'>
      <div className='option-all'>
        <Link to='/'>
           <HomeOutlinedIcon htmlColor='black'/>
        </Link>
      </div>
      <div className='option-all'>
        <Link to='/products'>
           <WidgetsOutlinedIcon htmlColor='black'/>
        </Link>
      </div>
      <div className='option-all'>
        <Link to='/cartitems'>
           <ProductionQuantityLimitsOutlinedIcon htmlColor='black'/>
        </Link>
      </div>
      <div className='option-all'>
        <Link to='/login'>
           <PersonOutlineOutlinedIcon htmlColor='black'/>
        </Link>
      </div>
    </div>
  )
}

export default Option
