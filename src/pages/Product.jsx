import ListProduct from '../components/ListProduct'
const Product = () =>{
    document.title = 'List Produk - TendaUMKM'

    return (
        <div className="w-full p-4 flex flex-col">
            <div className="my-4 w-full flex items-center justify-center bg-cover bg-center bg-hero-produk h-[20rem] md:h-[30rem] rounded-md">
                <h1 className="text-4xl font-bold text-white font-Poppins">List Produk</h1>
            </div>
            <ListProduct/>
        </div>
    )
}
export default Product