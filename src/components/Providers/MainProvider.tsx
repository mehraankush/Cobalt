"use client"

import QueryClientProviderWrapper from "./QuertProvider";
import ReduxProvider from "./ReduxProvider";
import SessionProviders from "./SessionProvider";
import { ThemeProviders } from "./theme-provider";


const MainProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <SessionProviders>
                <ThemeProviders>
                    <QueryClientProviderWrapper>
                        <ReduxProvider>
                            {children}
                        </ReduxProvider>
                    </QueryClientProviderWrapper>
                </ThemeProviders>
            </SessionProviders>
        </>
    )
}

export default MainProvider