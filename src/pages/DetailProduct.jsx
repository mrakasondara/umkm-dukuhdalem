import { useState, useEffect, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { IoLocation} from 'react-icons/io5'
import {BsShop} from "react-icons/bs"
import { getDetailProduk } from '../utils/data'
import ItemSkeleton from '../components/ItemSkeleton'
const DetailProduct = () =>{
    const {id} = useParams()

    const [produk, setProduk] = useState({})
    const {gambar, nama, owner, deskripsi, alamat, harga, kontak} = produk

    document.title = `${nama} - TendaUMKM`


    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getDetailProduk(id)
            setProduk(data)
        }
        fetchData()
        .catch(console.error)
    })


    const pesan = (no) =>{
        location.href = `https://wa.me/${no}`
    }

    const formatRupiah = (number) =>{
        return new Intl.NumberFormat("id-ID", {
            style: 'currency',
            currency: "IDR"
        }).format(number)
    }

    return (
        <div className="w-full font-Poppins flex p-4 ">
            <Suspense fallback={<ItemSkeleton/>}>
                <div className="my-5 rounded-lg shadow-lg flex flex-col md:flex-row w-3/4 p-3 mx-auto">
                    <img src={gambar} alt="gambar produk" className='my-[5px] rounded-lg shadow-lg h-[17rem]'/>
                    <div className="w-full py-3 md:p-5 flex gap-3 flex-col">
                        <h2 className="text-lg font-bold">{nama}</h2>
                        <p className="flex -mt-2 font-bold items-center gap-2 text-[12px]"><BsShop/> {owner}</p>
                        <h4 className="text-[13px] font-Open">{deskripsi}</h4>
                        <div className="flex w-full bg-Primary px-2 py-1 gap-3 rounded-lg items-center">
                        <IoLocation/> <span className="font-semibold text-[12px]">{alamat}</span></div>
                        <div className="w-full flex mt-auto gap-3">
                            <p className="shadow-md w-1/2 rounded-md p-2 text-[11px] md:text-md border-1 border text-center border-red-500  font-bold text-red-500">{harga ? formatRupiah(harga) : 'Rp. -'}</p>
                            <button onClick={ () => pesan(kontak)} className="shadow-md w-1/2 rounded-md p-2 bg-green-500 hover:bg-transparent hover:border text-sm md:text-md hover:text-green-500 hover:border-green-500 font-bold text-white">Pesan</button>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )      
}
export default DetailProduct