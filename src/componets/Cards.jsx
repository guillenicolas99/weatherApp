import { Card } from "flowbite-react";

export default function Cards({ current, location }) {

    return (
        <Card className="w-auto bg-transparent border-transparent text-white shadow-lg bg-blue-950 hover:scale-105 transition-all">
            <article className="flex flex-col space-y-5">
                <header className="font-sans flex flex-col">
                    <p><strong>El tiempo actual</strong></p>
                    <small>{location.localtime}</small>
                </header>
                <div className="flex flex-col space-x-5 md:flex-row">
                    <img src={current.condition.icon} alt={current.condition.text} width={64} />
                    <h2 className='text-5xl'>{current.temp_c}&deg;</h2>
                    <div className=' flex space-x-2 items-center'>
                        <div className="flex flex-col justify-start">
                            <p>{current.condition.text}</p>
                            <small>Sensación térmica: {current.feelslike_c}&deg;</small>
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl font-bold ">
                    {location.name}, {location.region}, {location.country} ({location.tz_id})
                </h5>
                <footer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:justify-start md:space-x-10">
                    <div className="flex flex-col">
                        <small>
                            Viento
                        </small>
                        <p>{current.wind_kph} km/h</p>
                    </div>
                    <div className="flex flex-col">
                        <small>Humedad</small>
                        <p>{current.humidity}%</p>
                    </div>
                    <div className="flex flex-col">
                        <small>Visibilidad</small>
                        <p>{current.vis_km} km</p>
                    </div>
                    <div className="flex flex-col">
                        <small>Presión</small>
                        <p>{current.pressure_mb} mbar</p>
                    </div>

                    <div className="flex flex-col">
                        <small>Punto de rocío</small>
                        <p>{current.dewpoint_c}&deg;</p>
                    </div>

                </footer>
            </article>
        </Card>
    )
}