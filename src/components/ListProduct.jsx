import { useEffect, useState, Suspense } from "react"
import {getAllProduk} from "../utils/data"
import ItemProduct from "./ItemProduct"
import ItemSkeleton from "./ItemSkeleton"

const ListProduct = () =>{
    const [produk, setProduk] = useState({})

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getAllProduk()
            setProduk(data)
        }
        fetchData()
        .catch(console.error)
    },[])

    return (
        <div className="my-[6rem] md:my-2 px-2 py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-[3rem] md:gap-y-[2rem]">
        <Suspense fallback={<ItemSkeleton/>}>
            {produk.length >= 1 && produk.map(prod=> (
                <ItemProduct {...prod} key={prod.id}/>
            ))}
            
        </Suspense>
        </div>
    )
}
export default ListProduct