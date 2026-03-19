"use client";

import React from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../ui/empty';
import { Button } from '../ui/button';
import { useOrganization } from '@clerk/nextjs';
import Image from 'next/image';

function BoardsContainer() {
  const { organization } = useOrganization();
  return (
    <>
      {organization ? (<div>
        <h2>Boards List</h2>
      </div>) : (
        <div className='w-full h-full flex-1 justify-center items-center 3xl:pt-8'>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="default">
                <Image priority src={"/images/empty.jpg"} alt="logo" width={650} height={650} />
              </EmptyMedia>
              <EmptyTitle className='lg:text-2xl text-xl font-semibold text-primary'>Welcome to iBoard</EmptyTitle>
              <EmptyDescription className='text-xs sm:text-sm'>New organization is required before your creativity</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="secondary">Create Organization</Button>
            </EmptyContent>
          </Empty>
        </div>
      )}
    </>
  )
}

export default BoardsContainer