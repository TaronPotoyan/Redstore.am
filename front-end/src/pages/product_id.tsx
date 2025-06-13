import { useEffect } from "react"
import { useLocation, useParams  } from "react-router-dom"
import Header from "../components/header";


export default function  Sepctial_Product () {
    const { _id } = useParams();
    const  { state } = useLocation ();
    console.log(state , _id);
    
    useEffect (() => {
        fetch (`http://localhost:3000/phons/${_id}`)
        .then (json => json.json())
        .then (dataa => console.log (dataa))
    },[_id]);

   
    return (
        <>
            <Header />
            <div className="prd-Page">
                
            </div>
        </>
    )
}