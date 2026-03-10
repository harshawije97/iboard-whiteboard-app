"use client";

import { useOrganizationList } from '@clerk/nextjs';
import React from 'react'

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
            {userMemberships.data?.map((m) => (
                <li key={m.organization.id}>
                    <p className='text-secondary-foreground'>{m.organization.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default OrganizationList