"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../ui/empty';

function EmptyState() {
    return (
        <>
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

        </>
    )
}

export function EmptyBoards() {
    return (
        <>
            <div className='w-full h-full flex-1 justify-center items-center 3xl:pt-8'>
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="default">
                            <Image priority src={"/images/empty.jpg"} alt="logo" width={650} height={650} />
                        </EmptyMedia>
                        <EmptyTitle className='lg:text-2xl text-xl font-semibold text-primary'>No Boards Found</EmptyTitle>
                        <EmptyDescription className='text-xs sm:text-sm'>Your organization has no boards to begin with</EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button variant="secondary">Create New Board</Button>
                    </EmptyContent>
                </Empty>
            </div>

        </>
    );
}


export function EmptyFavorites() {
    return (
        <>
            <div className='w-full h-full flex-1 justify-center items-center 3xl:pt-8'>
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="default">
                            <Image priority src={"/images/empty.jpg"} alt="logo" width={650} height={650} />
                        </EmptyMedia>
                        <EmptyTitle className='lg:text-2xl text-xl font-semibold text-primary'>No Favorite Boards</EmptyTitle>
                        <EmptyDescription className='text-xs sm:text-sm'>Mark your favorite boards</EmptyDescription>
                    </EmptyHeader>
                </Empty>
            </div>

        </>
    );
}

export function EmptySearchBoards() {
    return (
        <>
            <div className='w-full h-full flex-1 justify-center items-center 3xl:pt-8'>
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="default">
                            <Image priority src={"/images/empty.jpg"} alt="logo" width={650} height={650} />
                        </EmptyMedia>
                        <EmptyTitle className='lg:text-2xl text-xl font-semibold text-primary'>Search Results Not Found</EmptyTitle>
                    </EmptyHeader>
                    <EmptyContent>
                        {/* <Button variant="secondary">Create Organization</Button> */}
                    </EmptyContent>
                </Empty>
            </div>

        </>
    );
}

export default EmptyState