import BoardsContainer from '@/components/boards/boards-container'
import React from 'react'

function TrialPage() {
  return (
    <div className='max-w-7xl h-[calc(100vh-80px)] flex-1'>
      <div className='w-full h-full flex flex-col lg:px-5 md:px-8 px-4'>
        <BoardsContainer   />
      </div>
    </div>
  )
}

export default TrialPage