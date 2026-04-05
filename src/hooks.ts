import { useState } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState<string | null>(null);
    
    return {
        isLoading,
        items,
        error
    }
}