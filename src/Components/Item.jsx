import React, { useState } from 'react'
import {BsTrashFill} from "react-icons/bs";

export default function Item(props) {
    const [done, setDone] = useState(false);
    return (
        <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between`}>
            <div>
                <span className='pr-2 text-[14px] text-slate-400'>
                    {props.time}
                </span>
                <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
                    {props.item}
                </span>
            </div>
            <div onClick={() => props.removeHandler(props.id)}>
                <BsTrashFill className='text-red-600'/>
            </div>
        </div>
  )
} 
