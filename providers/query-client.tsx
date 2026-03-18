"use client";

import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MyQueryClientProvider = ({children}: {children: React.ReactNode}) => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default MyQueryClientProvider


// 三個常用 QueryClient API :
// 1. useQuery -> Get API
// 2. useMutation -> Post(add): 塞數據到後端
// 3. useQueryClient -> 刷新頁面