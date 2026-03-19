"use client";

import React from 'react'
import NewActionButton from '../organization/new-button';
import OrganizationList from '../organization/org-list';
import Link from 'next/link';
import Image from 'next/image';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { LayoutDashboard, Star } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import OrgSwitcher from '../organization/org-switcher';

function AppSidebar() {
    return (
        <aside className='fixed z-1 left-0 border-r border-slate-400/30 h-full w-16 max-w-15 flex flex-col p-3 gap-y-4 text-slate-50'>
            <OrganizationList />
            <NewActionButton />
        </aside>
    )
}

export function OrganizationSidebar() {
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const path = pathName.split("/")[1];
    const favorites = searchParams.get("favorite");


    return (
        <aside className='hidden lg:flex flex-col space-y-6 w-51.5 pl-5 pt-5'>
            <Link href={`/${path}`}>
                <div className='flex items-center gap-x-2'>
                    <Image src="/logo.svg" alt="logo" width={25} height={25} />
                    <span className="font-semibold text-2xl text-slate-700">
                        iBoard
                    </span>
                </div>
            </Link>
            <OrgSwitcher />
            <div className='space-y-1 w-full'>
                <Button variant={favorites ? "ghost" : "secondary"} asChild className='font-normal justify-start px-2 w-full'>
                    <Link href={{
                        pathname: `/${path}`,
                        query: { teamBoards: "true" }
                    }}>
                        <LayoutDashboard className='size-4 mr-2' />
                        Team Boards
                    </Link>
                </Button>
                <Button variant={favorites ? "secondary" : "ghost"} asChild className='font-normal justify-start px-2 w-full'>
                    <Link href={{
                        pathname: `/${path}`,
                        query: { favorite: "true" }
                    }}>
                        <Star className='size-4 mr-2' />
                        Favorites
                    </Link>
                </Button>
            </div>
        </aside>
    )
}

export default AppSidebar