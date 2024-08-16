import { useEffect, useState, useContext, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import FormData from '../components/FormData'
import { getDetailProduk, updateNoImages, updateWithImages } from '../utils/data'
import { AlertSuccess } from '../utils/Alert'

const EditProduct = () =>{
    const {id} = useParams()
    document.title = 'Edit Produk - TendaUMKM'

    const {setUserInfo, userInfo} = useContext(UserContext)

    const [gambar, setGambar] = useState('')
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [kontak, setKontak] = useState('')
    const [harga, setHarga] = useState('')
    const [owner, setOwner] = useState('')


    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getDetailProduk(id)
            setNama(data.nama)
            setAlamat(data.alamat)
            setKontak(data.kontak)
            setHarga(data.harga)
            setOwner(data.owner)
            setDeskripsi(data.deskripsi)
        }
        
        fetchData()
        .catch(console.error)
        
    },[])

    if(!userInfo){
        location.href = '/'
    }

    const editData = (ev) =>{
        ev.preventDefault()
        const data = {nama, alamat, kontak, harga, owner, deskripsi}
        if(gambar){
            updateWithImages({data, id, gambar}).catch(console.error)
            AlertSuccess('Produk Berhasil Diubah!')
            setTimeout(() => {
                location.href = `/`
            }, 2000);
        }else{
            AlertSuccess('Produk Berhasil Diubah!')
            location.href = `/dashboard`
            updateNoImages(data,id)
        }
    }

    const onSubmit = editData
    const labelButton = 'Ubah Produk'


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setGambar(undefined)
            return
        }
        setGambar(e.target.files[0])

        
    }

    const props = {nama, setNama, alamat, setAlamat, kontak, setKontak, owner, setOwner, harga, setHarga, deskripsi, setDeskripsi, onSelectFile, onSubmit, labelButton}


    return (
        <div className="w-full font-Poppins flex flex-col p-4 ">
            <h2 className="text-lg font-semibold">Ubah Produk</h2>
            <div className="my-5 rounded-lg shadow-lg flex flex-col mx-auto w-3/4 md:w-1/2 p-3">
            <Suspense fallback={<p>Loading</p>}>
                <FormData {...props}/>
            </Suspense>
            </div>
        </div>
    )
}
export default EditProduct