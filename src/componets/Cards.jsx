import { Card } from "flowbite-react";
import { IconBadge4k } from '@tabler/icons-react'

export default function Cards({ current, location }) {

    return (
        <Card className="w-max bg-transparent border-transparent text-white shadow-lg bg-blue-950 hover:scale-105 transition-all">
            <article className="flex flex-col space-y-5">
                <header>
                    <p><strong>El tiempo actual</strong></p>
                    <small>{location.localtime}</small>
                </header>
                <div className="flex items-center space-x-3">
                    <img src={current.condition.icon} alt={current.condition.text} />
                    <div className=' flex space-x-2 items-center'>
                        <h2 className='text-5xl'>{current.temp_c}&deg;</h2>
                        <div>
                            <p>{current.condition.text}</p>
                            <small>Sensación térmica: {current.feelslike_c}&deg;</small>
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl font-bold ">
                    {location.name}, {location.region}, {location.country} ({location.tz_id})
                </h5>
                <footer className="flex flex-wrap justify-start space-x-10">
                    <div className="flex flex-col">
                        <small>
                            Viento
                            <IconBadge4k stroke={2} />
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