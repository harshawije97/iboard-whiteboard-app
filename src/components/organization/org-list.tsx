"use client";

import { useOrganizationList } from '@clerk/nextjs';
import React from 'react'
import ListItem from './list-item';
import { Skeleton } from '../ui/skeleton';

function OrganizationList() {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    });

    if (!userMemberships) {
        return null;
    }

    return (
        <ul className='space-y-4'>
            {userMemberships.isFetching && (
                <Skeleton className="h-8.75 w-8.75 rounded-md" />
            )}
            {userMemberships.data?.map((m) => (
                <li key={m.organization.id}>
                    <ListItem
                        key={m.organization.id}
                        id={m.organization.id}
                        name={m.organization.name}
                        imageUrl={m.organization.imageUrl} />
                </li>
            ))}
        </ul>
    )
}

export default OrganizationList