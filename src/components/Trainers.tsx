import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {motion} from "framer-motion";

interface trainersInterface {
    trainers: Array<{
        name: string,
        surname: string,
        nativity: string,
        photo: string,
        description: string,
    }>
}

const Trainers = () => {

    const trainers = [
        {
            name: "Королева",
            surname: "Екатерина",
            nativity: "Александровна",
            photo: "/images/trainer.png",
            description: "Мастер спорта России по художественной гимнастике. Многократная победительница и призерка турниров и открытых первенств по художественной гимнастике. Чемпионка мира по воздушной гимнастике. 2 место в чемпионате России по художественной гимнастике. 10 лет опыта тренерской деятельности."
        },
        {
            name: "Иванова",
            surname: "Анна",
            nativity: "Сергеевна",
            photo: "/images/trainer.png",
            description: "Мастер спорта России по художественной гимнастике. Участница международных соревнований. Тренирует спортсменок среднего и старшего возраста. 5 лет опыта тренерской деятельности."
        },
        {
            name: "Петрова",
            surname: "Мария",
            nativity: "Алексеевна",
            photo: "/images/trainer.png",
            description: "Мастер спорта России по художественной гимнастике. Призерка чемпионатов города и области. Тренирует детей младшего возраста. 3 года опыта тренерской деятельности."
        },
        {
            name: "Смирнова",
            surname: "Ольга",
            nativity: "Ивановна",
            photo: "/images/trainer.png",
            description: "Мастер спорта России по художественной гимнастике. Участница национальных соревнований. Тренирует спортсменок подросткового возраста. 7 лет опыта тренерской деятельности."
        },
        {
            name: "Васильева",
            surname: "Елена",
            nativity: "Алексеевна",
            photo: "/images/trainer.png",
            description: "Мастер спорта России по художественной гимнастике. Победительница региональных соревнований. Тренирует спортсменок юношеского возраста. 4 года опыта тренерской деятельности."
        }
    ];
    const [currentTrainer, setCurrentTrainer] = useState(trainers[0])



    return (
        <>
            <div className={'w-full sm:grid  hidden grid grid-cols-12 items-center'}>
                <motion.div className={'col-span-3 gap-7 flex flex-col items-start'}
                            initial={{x: -30, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <p className={'font-medium font-raleway text-3xl'}>{currentTrainer.name} {currentTrainer.surname} {currentTrainer.nativity}</p>
                    <p className={'font-raleway'}>{currentTrainer.description}</p>
                </motion.div>
                <motion.div className={'col-span-6 flex items-center justify-center'}
                            initial={{scale: 0.7, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <img src={currentTrainer.photo}/>
                </motion.div>
                <div className={'col-span-3 flex flex-col items-end'}>
                    {trainers.map((trainer) => {
                        return (
                            <p className={classList('font-raleway cursor-pointer transition-all duration-300 font-medium',currentTrainer.description==trainer.description?'text-gold text-2xl':'text-black text-xl')} onClick={()=>{setCurrentTrainer(trainer)}}>{trainer.name} {trainer.surname}</p>
                        )
                    })}
                </div>
            </div>
            <div className={'w-full sm:hidden block'}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {trainers.map((trainer,counter)=>{
                        return(
                            <SwiperSlide className={'flex pb-20 h-fit flex-col'}>
                                <p className={'font-medium font-raleway text-3xl'}>{trainer.name} {trainer.surname} {trainer.nativity}</p>
                                <img src={trainer.photo}/>
                                <p className={'font-raleway'}>{trainer.description}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default Trainers;