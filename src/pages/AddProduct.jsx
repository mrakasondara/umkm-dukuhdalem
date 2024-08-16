import { useEffect, useState, useContext } from 'react'
import Swal from 'sweetalert2'
import preview from '../public/preview.png'
import FormData from '../components/FormData'
import { UserContext } from '../UserContext'
import { pushProduk } from '../utils/data'
import { AlertSuccess } from '../utils/Alert'

const AddProduct = () =>{
    const {setUserInfo, userInfo} = useContext(UserContext)
    const [content, setContent] = useState(false)
    const [previewImage, setPreviewImage] = useState(preview)
    const [gambar, setGambar] = useState("")
    const [nama, setNama] = useState("")
    const [alamat, setAlamat] = useState("")
    const [kontak, setKontak] = useState("")
    const [owner, setOwner] = useState("")
    const [harga, setHarga] = useState("")
    const [deskripsi, setDeskripsi] = useState("")

    document.title = 'Tambah Produk - TendaUMKM'

    if(!userInfo){
        location.href = '/'
    }

    useEffect(() => {
        if (!gambar) {
            setPreviewImage(preview)
            return
        }

        
    })

    const addData = (ev) =>{
        ev.preventDefault()
        const data = {nama, alamat, kontak, gambar, owner,harga, deskripsi}
        const thumbnail = gambar 
        const result = pushProduk({data, thumbnail})
        AlertSuccess('Produk Berhasil Ditambahkan')
        setTimeout(()=>{
            location.href = '/dashboard'
        }, 2000)
    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setGambar(undefined)
            return
        }

        setGambar(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }

    const onSubmit = addData
    const labelButton = 'Tambah Produk'

    const props = {nama, setNama, alamat, setAlamat, kontak, setKontak, owner, setOwner, harga, setHarga, deskripsi, setDeskripsi, onSelectFile, onSubmit, labelButton}


    return (
        <div className="w-full font-Poppins flex flex-col p-4 ">
            <h2 className="text-lg font-semibold">Tambah Produk</h2>
            <div className="my-5 rounded-lg shadow-lg flex flex-col mx-auto w-3/4 md:w-1/2 p-3">
            <img src={previewImage} alt="preview image" className='my-[5px] rounded-lg shadow-lg h-[15rem] md:h-[17rem]'/>
            <FormData {...props}/>
            </div>
        </div>
    )
}
export default AddProduct