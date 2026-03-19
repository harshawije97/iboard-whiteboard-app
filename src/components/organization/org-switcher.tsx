"use client";

import { OrganizationSwitcher } from '@clerk/nextjs';

function OrgSwitcher() {
    return (
        <OrganizationSwitcher hidePersonal
            appearance={{
                elements: {
                    rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "376px",
                    },
                    organizationSwitcherTrigger: {
                        padding: "6.5px",
                        width: "100%",
                        borderRadius: "4px",
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                        border: "1px solid #e5e7eb",
                        justifyContent: "center",
                    }
                }
            }} />
    )
}

export default OrgSwitcher;