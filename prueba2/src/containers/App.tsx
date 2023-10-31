import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import Productos  from '../components/Lista';


export const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>
            {
            loading ? <Loading /> : (<Productos/>)
            }
        </div>
    )
}