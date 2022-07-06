import { useEffect, useState } from "react";

type FetchStatus = {
    fetching: boolean;
    error?: string
}

const useFetchData = <T>(url: string): [FetchStatus, T | undefined] => {

    const [status, setStatus] = useState<FetchStatus>({
        fetching: false,
    })
    const [data, setData] = useState<T>()

    useEffect(() => {
        const fetchData = async () => {
            setStatus({
                fetching: true,
                error: undefined
            });
           try{
            const res = await fetch(url);
            console.log(res)
            const json = await res.json();
            setData(json);
            setStatus({
                fetching: false
            });
           }catch(e){
            setStatus({
                fetching: false,
                error: (e as Error).message
            });
           }
            
        }
        if(!status.fetching)
        fetchData();
    }, [status.fetching])

    return [status, data]
}

export default useFetchData;