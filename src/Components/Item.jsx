import React, { useState } from 'react'
import {BsTrashFill} from "react-icons/bs";

export default function Item() {
    const [done, setDone] = useState(false);
    return (
        <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between`}>
            <div>
                <span className='pr-2 text-[14px] text-slate-400'>
                    13:00 WIB
                </span>
                <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
                    Item
                </span>
            </div>
            <div>
                <BsTrashFill className='text-red-600'/>
            </div>
        </div>
  )
}
