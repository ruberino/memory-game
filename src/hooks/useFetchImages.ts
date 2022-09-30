import { useEffect, useMemo, useState } from "react";

export default function useFetchImages(numberOfImages: number): [string[], boolean, boolean]{
    const [data, setData] = useState<string[]>([])
    const [hasError, setHasError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)


    const promises:(Promise<Response> | undefined)[] = useMemo(() => [],[])
    useEffect(() => {
        const fetcher = async () => {
            try{
              return await fetch('https://loremflickr.com/320/240/dog');
            }catch(e){
                console.log(e)
                setHasError(true)
            }
        }
        const fetchAll = async () => {
            const ittrArray = Array.from({ length: numberOfImages}, (_, i) => i);
            const promiseArray = ittrArray.map(() => fetcher())
            setHasError(false);
            setLoading(true);
            const res = await Promise.all(promiseArray)
            setData(res.map((x) => x?.url || ''))
            setLoading(false);
        }
        fetchAll();
    }, [numberOfImages, promises])

    return [data, hasError, loading]
}