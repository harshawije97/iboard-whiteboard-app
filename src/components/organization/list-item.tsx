"use client";

import { cn } from '@/lib/utils';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'
import Hint from '../shared/hint';

interface ListItemProps {
    id: string
    name: string
    imageUrl: string
}


function ListItem({ id, name, imageUrl }: ListItemProps) {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onActionClick = () => {
        if (!setActive) {
            return null;
        }

        setActive({ organization: id })
    }
    return (
        <Hint label={name} side='right' align='start' sideOffset={12}>
            <div className='aspect-square relative'>
                <Image src={imageUrl} alt={name} onClick={() => onActionClick()} fill className={
                    cn("rounded-md cursor-pointer opacity-75 hover:opacity-100 transition", isActive && "opacity-100")
                } />
            </div>
        </Hint>
    )
}

export default ListItem