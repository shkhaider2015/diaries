import { useEffect, useRef, useState } from "react";

export const useDropDown = (initialVisibleValue:boolean) =>
{
    const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialVisibleValue);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}