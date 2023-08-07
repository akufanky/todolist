import React from 'react'
import {AiOutlinePlus} from "react-icons/ai";

export default function Input() {
  return (
    <div className='p-3 flex justify-around'>
        <input type="text" placeholder='Tulis Catatan...' className='rounded p-3 focus:outline-none w-[90%] border border-slate-400'/>
        <div className='cursor-pointer w-[50px] h-[50px] bg-indigo-900 text-white rounded-[50%] flex justify-center items-center'>
            <AiOutlinePlus/>
        </div>
    </div>
  )
}