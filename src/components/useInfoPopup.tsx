import { useState } from "react";

type UseInfoPopupOptions<T> = {
    loadItems: () => Promise<T[]>;
};

export function useInfoPopup<T>({ loadItems }: UseInfoPopupOptions<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);

    const open = async () => {
        setIsOpen(true);
        setIsLoading(true);
        setError(null);

        try {
            const result = await loadItems();
            setItems(result);
        } catch {
            setError("Could not load data.");
        } finally {
            setIsLoading(false);
        }
    };

    const close = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        isLoading,
        items,
        error,
        open,
        close,
    };
}