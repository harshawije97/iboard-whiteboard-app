"use client";

import React from 'react'
import NewActionButton from '../organization/new-button';
import OrganizationList from '../organization/org-list';

function AppSidebar() {
    return (
        <aside className='fixed z-1 left-0 border-r border-slate-400 h-full w-16 max-w-15 flex flex-col p-3 gap-y-4 text-slate-50'>
            <OrganizationList />
            <NewActionButton />
        </aside>
    )
}

export function OrganizationSidebar() {
    return (
        <aside className='hidden lg:flex flex-col space-y-6 w-51.5 pl-5 pt-5 bg-accent-foreground/5'>OrganizationSidebar</aside>
    )
}

export default AppSidebar