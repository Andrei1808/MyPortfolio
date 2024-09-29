import { useEffect, useState } from "react";



export const useScrollPosition = () => {

    const [scrollPosition, setScrollPosition] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScrollPosition(window.scrollY);

            const handleResize = () => {
                setScrollPosition(window.scrollY);
            };

            window.addEventListener('scroll', handleResize);
            return () => {
                window.removeEventListener('scroll', handleResize);
            };
        }
    }, []);

    return scrollPosition;
}