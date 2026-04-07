import { useState } from "react";

export function useFetch() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchData = async (url: string, options = {}) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(url, options);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result?.message || "Could not load data."
                );
            }

            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unknown error.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        isLoading,
        hasError: Boolean(error),
        error,
        fetchData,
    };
}