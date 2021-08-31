import { useEffect, useState } from "react"

export const useDetectDevice = ():boolean =>
{
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isMobile, setIsmobile] = useState<boolean>(false)

    const handleWindowSizeChange = () =>
    {
        setWidth(window.innerWidth);
    }

    useEffect(
        () => {
            window.addEventListener("resize", handleWindowSizeChange);
            return () => {
                window.removeEventListener("resize", handleWindowSizeChange);
            }
            // eslint-disable-next-line
        }, []
    )

    useEffect(
        () =>
        {
            width <= 786 ? setIsmobile(true) : setIsmobile(false)
        }, [width]
    )

    return isMobile;
}