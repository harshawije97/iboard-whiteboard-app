"use client";
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardNavbar() {
  return (
    <div className='flex gap-x-4 p-5 items-center bg-teal-300'>
      <div className='hidden lg:flex flex-1'>
      </div>
      <UserButton />
    </div>
  )
}

export default DashboardNavbar