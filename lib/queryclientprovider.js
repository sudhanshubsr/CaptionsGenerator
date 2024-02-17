"use client"

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const Provider = ({ children }) => {
    const [client] = useState(new QueryClient())

    return( 
    
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
    
    )
} 
