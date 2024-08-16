import { Link } from "react-router-dom"
import { deleteProduct } from "../utils/data"
import { AlertSuccess } from "../utils/Alert"

const TableProduct = ({nama, alamat, id}) => {
    const hapusProduct = () =>{
        deleteProduct(id)
        AlertSuccess('Produk Berhasil Dihapus!')
        setTimeout(()=>{
            location.reload()
        },1700)
    }
    
    return (
            <tr className="text-[11px] md:text-[15px]">
                <td>{nama}</td>
                <td>{alamat}</td>
                <td className="flex justify-center gap-2 text-[11px] md:text-sm font-normal">
                    <Link to={`/ubahproduk/${id}`} className="px-2 py-1 rounded-md bg-green-500 text-white hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500">Edit 
                    </Link>
                    <button onClick={()=> hapusProduct()} className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-transparent hover:border hover:border-red-500 hover:text-red-500">Hapus</button>
                </td>
            </tr>
    )
}
export default TableProduct