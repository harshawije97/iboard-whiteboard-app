import { UserButton } from '@clerk/nextjs'
import React from 'react'

function TrialPage() {
  return (
    <div className='container mx-auto md:max-w-6xl'>
      <div>Trial Dashboard</div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default TrialPage