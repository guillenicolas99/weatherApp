// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const hour = date.getHours()
const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
const dateString = `${year}-${month}-${day} ${hour}:${minute}`

export default function Slider({ forecastday }) {

    const [hours, setHours] = useState([]);

    useEffect(() => {
        // Acumulador temporal para almacenar todas las horas
        const allHours = [];

        // Itera sobre los días y horas
        forecastday?.map((days) => {
            days.hour.forEach((hour) => {
                allHours.push(hour);
            });
        });

        // Actualiza el estado una sola vez con todos los datos concatenados
        setHours(allHours);
    }, [forecastday]);


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 10,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    hours?.map((hour, index) => {
                        if (hour.time < dateString) return null
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col text-center gap-1 shadow-lg bg-blue-900 transition-all my-3 p-3 rounded-md">
                                    <small>{new Date(hour.time).getHours() < 10 ? `0${new Date(hour.time).getHours()}` : new Date(hour.time).getHours()}:{new Date(hour.time).getMinutes() < 10 ? `0${new Date(hour.time).getMinutes()}` : new Date(hour.time).getMinutes()}</small>
                                    <img className='text-center mx-auto' src={hour.condition.icon} alt={hour.condition.text} width={32} />
                                    <h2 className='text-center'>{hour.temp_c}&deg;</h2>
                                    <small>💧{hour.humidity}%</small>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
            </Swiper>
        </>
    );
}
