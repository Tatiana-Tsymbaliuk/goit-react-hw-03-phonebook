import React from 'react';
import './Filter.css'
const Filter =({value, onChangeFilter})=>{
return(
        <label className='filterData'>Find contacts by name<input className = 'filterInput' type='text' value={value} onChange={onChangeFilter}/>
        </label>
)
}


export default Filter;