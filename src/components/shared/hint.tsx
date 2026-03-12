"use client";

import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}

function Hint({ label, children, align, alignOffset, side, sideOffset }: HintProps) {
    return (
        <>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className='text-white bg-slate-700'
                    side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                    <p className='font-semibold capitalize'>{label}</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}

export default Hint