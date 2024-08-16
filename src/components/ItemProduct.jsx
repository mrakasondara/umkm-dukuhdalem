import { useNavigate, Link } from "react-router-dom"
import ScrollAnimation from "react-animate-on-scroll" 
import { CiLocationOn } from "react-icons/ci";


const ItemProduct = ({gambar, nama, alamat, deskripsi, id, kontak}) =>{
    const navigate = useNavigate()
    
    const detailPage = (id) =>{
        navigate(`/produk/${id}`)
    }

    const pesan = (no) =>{
        location.href = "https://wa.me/085559425346"
    }
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-col rounded-md transition shadow shadow-lg">
                <img src={gambar} className="h-[10rem] md:h-[17rem] rounded-t-md hover:cursor-pointer" alt="image produk" onClick={ () => detailPage(1)}/>
                <div className="flex flex-col px-2 py-1 gap-3">
                    <h3 className="font-Poppins font-bold">{nama}</h3>
                    <div className="w-full overflow-hidden items-center gap-2 flex text-[12px] bg-Primary my-1 h-10 md:h-5 font-semibold font-Poppins px-2 rounded-lg">
                        <span className="text-[14px]">
                            <CiLocationOn/>
                            </span>
                        <span>{alamat}
                        </span>
                    </div>
                    <p className="w-full font-Open text-[12px] text-justify h-20 overflow-hidden">{deskripsi}</p>
                    <div className="my-3 text-center font-Poppins font-semibold text-white w-full flex gap-1">
                        <Link className="shadow-md w-1/2 rounded-md px-2 py-1 bg-Primary hover:bg-transparent hover:border text-sm md:text-md hover:text-Primary" to={`/produk/${id}`}>Detail</Link>
                        <button onClick={ (no) => pesan('no')} className="shadow-md w-1/2 rounded-md px-2 py-1 bg-green-500 hover:bg-transparent hover:border text-sm md:text-md hover:text-green-500">Pesan</button>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}
export default ItemProduct