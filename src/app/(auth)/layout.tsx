import ConvexClientProvider from '@/components/providers/convex-client-provider'
import AppSidebar, { OrganizationSidebar } from '@/components/shared/app-sidebar';
import DashboardNavbar from '@/components/shared/dashboard-navbar';
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-full min-h-screen'>
            <ClerkProvider>
                <ConvexClientProvider>
                    <AppSidebar />
                    <div className='pl-15 h-full'>
                        <div className="flex gap-x-3 h-full">
                            <OrganizationSidebar />
                            <div className='h-full flex-1'>
                                <DashboardNavbar />
                                {children}
                            </div>
                        </div>
                    </div>
                </ConvexClientProvider>
            </ClerkProvider>
        </div>
    )
}

export default ApplicationLayout