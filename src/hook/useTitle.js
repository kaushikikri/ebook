import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - eBook`;
    }, [title])

    return null;
}
 