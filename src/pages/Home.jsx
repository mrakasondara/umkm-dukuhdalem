import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import image from '../public/hero.png'

const Home = () =>{
    document.title = 'Home - TendaUMKM'
    
    return (
        <div className="w-full flex flex-col gap-2 py-[5rem]">
            <div className="w-full flex flex-col md:flex-row">
                <div className="order-2 md:order-1 px-[2rem] py-[2rem] w-full flex flex-col md:w-1/2 gap-2 justify-center">
                    <p className="text-lg font-Poppins text-xl font-bold text-center md:text-start">UMKM Hebat, Ekonomi Kuat!</p>
                    <p className="text-sm text-justify font-Open">Aplikasi <span className='font-bold'>TendaUMKM</span> adalah platform digital yang dirancang khusus untuk mendukung pertumbuhan dan keberlanjutan Usaha Mikro, Kecil, dan Menengah (UMKM) di Dukuhdalem. Dengan fitur-fitur inovatif dan antarmuka yang ramah pengguna, <span className='font-bold'>TendaUMKM</span> memberikan solusi lengkap bagi para pelaku usaha untuk mempromosikan produk mereka, menjangkau pasar yang lebih luas, dan meningkatkan penjualan.</p>
                    <Link to={'/produk'} className="mt-4 rounded-lg w-1/2 md:w-1/4 px-2 py-1 bg-Primary font-Poppins text-white hover:bg-white hover:border hover:border-1 hover:text-Primary text-center">Selengkapnya</Link>
                </div>
                <div className="order-1 md:order-2 w-full md:w-1/2">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-5 px-5 mt-[5rem]">

                <div className="flex justify-center w-full md:w-1/2 px-[3rem] mb-[2rem] md:mb-0">
                    <ScrollAnimation animateIn="bounceInLeft" animateOut='bounceOutRight'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.94097662934!2d108.50407862718531!3d-6.9222200877909446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1731b764ea11%3A0xbe08dfe06ba14d8e!2sDukuhdalem%2C%20Kec.%20Japara%2C%20Kabupaten%20Kuningan%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1722608495581!5m2!1sid!2sid" allowFullScreen="" className='rounded-lg shadow-xl h-[20rem]' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </ScrollAnimation>
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 px-[3rem]">
                    <ScrollAnimation animateIn="fadeIn">
                        <h3 className="font-Poppins text-center text-lg font-semibold">Deksripsi Desa</h3>
                        <p className="font-Open text-[15px] text-center md:text-start mt-[2rem] md:mt-0">Secara umum Desa Dukuhdalem merupakan bagian dari Wilayah Kecamatan Japara terletak pada ketinggian 470 M dari permukaan laut. Suhu rata-rata harian mencapai 25 – 32oC kelembaban udara mencapai 32oC dan curah hujan rata-rata 3.000 – 3.200, mm/tahun sedangkan jarak orbitrasi jarak ke ibu kota Kecamatan 2 Km. Jarak ke ibu kita Kabupaten 12 Km, jarak ke Ibu kota Provinsi 250 Km dan jarak ke ibu kita Negara 350 Km.</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Home