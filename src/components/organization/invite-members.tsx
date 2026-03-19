"use client";

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { OrganizationProfile } from '@clerk/nextjs';

function InviteNewMembers() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}>
                    <div className='flex flex-row flex-wrap items-center ml-1.5'>
                        <AvatarGroup className="grayscale">
                            <Avatar size='sm'>
                                <AvatarImage src="https://github.com/harshawije97.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size='sm'>
                                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                            <Avatar size='sm'>
                                <AvatarImage
                                    src="https://github.com/evilrabbit.png"
                                    alt="@evilrabbit"
                                />
                                <AvatarFallback>ER</AvatarFallback>
                            </Avatar>
                        </AvatarGroup>
                    </div>
                    Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className='max-w-222.5 bg-transparent p-0'>
                <DialogTitle className='sr-only'>Invite Members</DialogTitle>
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}

export default InviteNewMembers