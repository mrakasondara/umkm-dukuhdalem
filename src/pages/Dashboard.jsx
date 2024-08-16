import { Link } from 'react-router-dom'
import TableProduct from '../components/TableProduct'
import { Suspense, useEffect, useState } from 'react'
import { getAllProduk } from '../utils/data'
const Dashboard = () =>{
    const [produk, setProduk] = useState({})
    document.title = 'Dashboard Admin - TendaUMKM'

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getAllProduk()
            setProduk(data)
        }
        fetchData().catch(console.error)
        console.log(produk)
    }, [])

    return(
       <div className="w-full font-Poppins flex flex-col p-4">
        <h2 className="text-lg font-semibold">Dashboard Admin</h2>
        <Link to={'/tambahproduk'} className="w-2/4 md:w-[20%] bg-green-500 rounded-lg text-center px-2 py-1 my-2 text-white hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500 font-semibold text-sm md:text-md">Tambah Data</Link>
        <Suspense fallback={<p>Loading</p>}>
            <table className="border-separate mx-auto my-2 w-full md:w-[85%] border-collapse border text-[11px] md:text-[15px] border-slate-500 rounded-md shadow-lg p-2">
                <tbody>
                    <tr className="font-semibold text-center">
                        <td>Nama Produk</td>
                        <td>Alamat</td>
                        <td>Aksi</td>
                    </tr>
                    {produk.length >=1 && produk.map(prod=>(
                        <TableProduct {...prod} key={prod.id}/>
                    ))}
                </tbody>
            </table>
        </Suspense>
       </div>
    )
}
export default Dashboard