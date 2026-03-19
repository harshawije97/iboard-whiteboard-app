"use client";
import { useOrganization, UserButton } from '@clerk/nextjs'
import React from 'react'
import SearchInput from './search-input';
import OrgSwitcher from '../organization/org-switcher';
import InviteNewMembers from '../organization/invite-members';

function DashboardNavbar() {
  const { organization } = useOrganization();

  return (
    <div className='flex gap-x-4 p-5 items-center bg-transparent'>
      <div className='hidden lg:flex flex-1'>
        <SearchInput />
      </div>
      <div className='block lg:hidden flex-1'>
        <OrgSwitcher />
      </div>
      {organization && <InviteNewMembers />}
      <UserButton />
    </div>
  )
}

export default DashboardNavbar