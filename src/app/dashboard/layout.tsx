import React, { type ReactNode } from 'react'
import Sidebar from './components/Sidebar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen bg-gray-50 dark:bg-slate-950'>
        <div className='md:w-64 hidden md:block fixed'>
            <Sidebar/>
        </div>
        <div className='md:ml-64 h-fit bg-gray-50 pb-5 dark:bg-slate-950'>{children}</div>
      
    </div>
  )
}

export default layout
