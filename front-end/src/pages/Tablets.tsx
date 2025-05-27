import { useEffect, useState } from "react"
import Header from "../components/header"
import Product from "../components/product"
import type IProduct from "../interfaces/product"

export default function Tablets() {
    const [tablets, setTablets] = useState<IProduct[] | null>(null)
    const [message , setMessage] = useState ('')
    useEffect (() => {
        fetch (' http://localhost:3000/tablets')
        .then(json  => json.json() )
        .then (data => {
            console.log(data);
            setTablets(data.data)    
        })
    },[])

    return (
        <>
            <Header />
            {
                tablets && tablets.length !== 0 ? (
                    <>
                        {tablets.map((tablet) => (
                            <Product 
                                message={message} 
                                setMessage={setMessage} 
                                key={tablet._id} 
                                {...tablet}
                            />
                        ))}
                    </>
                ) : <p 
                    style={{
                    display : 'flex',
                    justifyItems : 'center',
                    alignItems : 'center',
                    justifyContent : 'center',
                    fontSize : '40px',
                    color : 'red'
                }}>Պլանշետներ առկա չեն</p>
            }
        </>
    )
}
