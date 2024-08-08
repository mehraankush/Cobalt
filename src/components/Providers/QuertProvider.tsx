'use client'

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            // retry: false,
            staleTime: 1000 * 60 * 5,
        },
    },
});

type Props = {
    children: ReactNode;
};

const QueryClientProviderWrapper = ({ children }: Props) => {
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>;
};

export default QueryClientProviderWrapper;