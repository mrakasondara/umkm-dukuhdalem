const FormData = ({nama, setNama, alamat, setAlamat, kontak, setKontak, owner, setOwner, harga, setHarga, deskripsi, setDeskripsi, onSelectFile, onSubmit, labelButton}) =>{
    const path = location.pathname.split('/')[1]
    const isUbah = path == 'ubahproduk' 
    return (
        <form onSubmit={onSubmit} className="my-2 flex flex-col gap-2">
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="nama">Nama Produk</label>
                    <input required onChange={(ev) => setNama(ev.target.value)} value={nama || '' } type="text" name='nama' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' placeholder='Masukkan Nama Produk'/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="alamat">Alamat</label>
                    <input required onChange={(ev) => setAlamat(ev.target.value)} value={alamat || ''} type="text" name='alamat' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' placeholder='Masukkan Alamat'/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="owner">Owner</label>
                    <input required value={owner || ''} onChange={(ev) => setOwner(ev.target.value)}  type="text" name='owner' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' placeholder='Masukkan Nama Owner'/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="kontak">Kontak</label>
                    <input required onChange={(ev) => setKontak(ev.target.value)} value={kontak || ''} type="number" name='kontak' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' placeholder='Masukkan Kontak Aktif'/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="harga">Harga Produk</label>
                    <input required onChange={(ev) => setHarga(ev.target.value)} value={harga || ''} type="number" name='harga' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' placeholder='Masukkan Harga Jual'/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="deskripsi">Deskripsi</label>
                    <textarea className="border border-1 border-black rounded-lg p-3" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 text-[14px]">
                    <label htmlFor="gambar">Gambar Produk</label>
                    <input type="file" accept="image/*" name='gambar' className='border border-1 border-black shadow-lg rounded-md px-2 py-1' onChange={(e) => onSelectFile(e)}/>
                    <p className={`${isUbah ? 'block' : 'hidden'} text-Primary text-sm`}>Isi bila gambar ingin di ubah</p>
                </div>
                <button className='w-3/4 md:w-full bg-green-500 rounded-lg text-center px-2 py-1 my-2 text-white hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500 font-semibold'>{labelButton}</button>
        </form>
    )
}
export default FormData