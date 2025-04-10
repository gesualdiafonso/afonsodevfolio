'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type LoadingContextType = {
    isLoading: boolean;
};

const LoadingContext = createContext<LoadingContextType>({ isLoading: false });

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Inicia o loader sempre que o pathname mudar
        setIsLoading(true);

        const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 1500); // Delay de estilo cyberpunk
        };

        if (document.readyState === 'complete') {
        handleLoad();
        } else {
        window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, [pathname]);

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
