"use client";

import { Plus } from 'lucide-react';
import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';

function NewActionButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='aspect-square'>
                    <button className='w-full h-full rounded-md border border-green-300 bg-slate-200 flex items-center justify-center opacity-60 hover:opacity-100 transition'>
                        <Plus className='text-green-600' />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className='bg-transparent max-w-120 border-none py-0 ring-0'>
                <DialogTitle className='sr-only'>Create Organization</DialogTitle>
                <div className='bg-white rounded-md'>
                    <CreateOrganization />
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default NewActionButton