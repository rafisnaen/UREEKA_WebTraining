//gaperlu interface post, karna gapake struktur post
//response dari api weatherstack bukan array of post, tapi object cuaca.
//pr : gimana cara biar ga statis di jakarta (di next js)?, taruh input textbox dan response button,
// ubah api nya jadi `http://api.weatherstack.com/current?access_key=90d723939f41ab682ea234fcdc2df058&query=${xx}`
//client side, on click di button, sisanya masih blm tau
import { FloatingNav } from "@/components/ui/floating-navbar";

const navbarItems = [
    { name: "Home", link: "/", icon: null },
    { name: "About", link: "/about", icon: null },
    { name: "Contact", link: "/contact", icon: null },
    { name: "Experience", link: "/experience", icon: null },
    { name: "Resume", link: "/resume", icon: null },
    { name: "Weather", link: "/blog", icon: null },
  ];

export default async function WeatherPage() {
  const res = await fetch(
    'http://api.weatherstack.com/current?access_key=90d723939f41ab682ea234fcdc2df058&query=Jakarta'
  )
    if (!res.ok) {
        throw new Error('Gabisa fetch data cuacanya')
    }

  const data = await res.json()

  return (
    <>
        <FloatingNav navItems={navbarItems} />
        <div className="bg-black text-white pt-28 flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-white pt-5 text-4xl font-bold text-center">Cuaca di 
            <span className="text-blue-500"> {data.location.name}, {data.location.country}</span> 
        </h1>
        <p>Suhu: {data.current.temperature}°C</p>
        <p>Deskripsi: {data.current.weather_descriptions[0]}</p>
        <p>Waktu: {data.location.localtime}</p>
        <p>Kelembapan: {data.current.humidity}%</p>
        <p>Kecepatan Angin: {data.current.wind_speed} km/jam</p>
        </div>
    </>
  )
}
