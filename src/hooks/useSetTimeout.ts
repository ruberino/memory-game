import { useRef } from "react";

const useSetTimeout = (): [timeout: (callback: any, ms?: number) => void, clear: () => void] => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const timeout = (callback: any, ms?: number) => {
        timer.current = setTimeout(callback, ms)
    }
    const clear = () => {
        if(timer.current)
        clearTimeout(timer.current);   
    }
    return [timeout, clear] 
}
export default useSetTimeout;