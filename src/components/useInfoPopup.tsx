import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

type UseInfoPopupOptions = {
    url: string;
    options?: RequestInit;
};

function useLockBodyScroll(locked: boolean) {
    useEffect(() => {
        if (!locked) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [locked]);
}

export function useInfoPopup({ url, options }: UseInfoPopupOptions) {
    const [isOpen, setIsOpen] = useState(false);
    const { data, isLoading, error, hasError, fetchData } = useFetch();

    useLockBodyScroll(isOpen);

    const open = async () => {
        setIsOpen(true);
        await fetchData(url, options);
    };

    const close = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        isLoading,
        data,
        error,
        hasError,
        open,
        close,
    };
}