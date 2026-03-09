"use client";

import React from 'react'
import { BarLoader } from 'react-spinners';

function PreLoader() {
    return (
        <div className='h-screen w-full flex items-center justify-center gap-y-4'>
            <BarLoader
                color="#0dee1d"
                speedMultiplier={2}
            />
        </div>
    )
}

export default PreLoader