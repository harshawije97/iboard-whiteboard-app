"use client";

import BoardsList from '@/components/boards/boards-list';
import EmptyState from '@/components/boards/empty-state';
import { useOrganization } from '@clerk/nextjs';
import React from 'react'

interface SearchParams {
  search?: string
  favorite?: string
}

interface TrialPageProps {
  searchParams: Promise<SearchParams>
}

function TrialPage({ searchParams }: TrialPageProps) {
  const { organization } = useOrganization();
  const { search, favorite } = React.use<SearchParams>(searchParams);


  return (
    <div className='max-w-7xl h-[calc(100vh-80px)] flex-1'>
      <div className='w-full h-full flex flex-col lg:px-5 md:px-8 px-4'>
        {organization ? (<BoardsList orgId={organization.id} searchQn={{ search, favorite }} />) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

export default TrialPage