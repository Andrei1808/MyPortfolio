import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

    useEffect(() => {        
        if (typeof window !== 'undefined') {         
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);     
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); 

    return windowWidth;
}