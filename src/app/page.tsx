"use client"
import Image from 'next/image'
import {useEffect, useState} from "react";
import {classList} from "@/helpers/classList";
import Trainers from "@/components/Trainers";
import News from "@/components/News";
import {EffectFade,Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useRouter} from "next/navigation";

export default function Home() {

    const links = [
        {
            name: 'Главная',
            link: '#main'
        },
        {
            name: 'Расписание',
            link: ''
        },
        {
            name: 'Новости',
            link: '#news'
        },
        {
            name: 'О нас',
            link: '#about'
        },
        {
            name: 'Сборы',
            link: '#meetings'
        },
    ]

    const router=useRouter()

    const [activeLink, setActiveLink] = useState(links[0])

    const swapAnchor=()=> {
        if (window.pageYOffset < window.innerHeight) {
            setActiveLink(links[0])
        }
    }

    useEffect(()=>{
        document.addEventListener('scroll',swapAnchor)
    },[])

    return (
        <main className={'overflow-y-scroll scroll-smooth'}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap" rel="stylesheet"/>

            {/*ПЕРВЫЙ БЛОК*/}

            <div id={'main'}
                className={'bg-center h-screen sm:min-h-screen flex flex-col justify-between py-5 sm:py-10 px-[20px] sm:px-[60px] w-full relative'}>
                <div className={'absolute sm:flex left-0 z-[-1] top-0 w-full h-full'}>
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        modules={[EffectFade,Autoplay]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper h-full w-full"
                    >
                        <SwiperSlide className={'w-full h-full'}>
                            <img className={'w-full object-cover h-full'} src="/images/main_bg.png" />
                        </SwiperSlide>
                        <SwiperSlide className={'w-full h-full'}>
                            <img className={'w-full object-cover h-full'} src="/images/main_bg2.png" />
                        </SwiperSlide>
                        <SwiperSlide className={'w-full h-full'}>
                            <img className={'w-full object-cover h-full'} src="/images/main_bg3.png" />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <motion.div className={'flex items-center justify-between'}
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7,delay:1.5}}>
                    <div className={'p-2 w-16 aspect-square flex items-center justify-center rounded-full'}>
                        <img src={'/images/logo.png'}/>
                    </div>
                    <p className={'font-raleway sm:block hidden text-white text-right text-2xl'}>+7(906)-720-32-32</p>
                    <div className={'p-2 w-16 aspect-square sm:hidden flex items-center justify-center rounded-full'}>
                        <img src={'/images/burger.svg'}/>
                    </div>
                </motion.div>
                <div className={'grid grid-cols-1 sm:grid-cols-12 items-center'}>
                    <div className={'sm:col-span-6 gap-8 flex flex-col'}>
                        <motion.p className={'text-gold sm:leading-[82%] font-oranienbaum sm:text-left text-center text-4xl sm:text-7xl'}
                                  initial={{x: -100, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}>Художественная
                            и воздушная гимнастика</motion.p>
                        <motion.p className={'text-white sm:text-left sm:text-lg text-xl text-center font-raleway opacity-80'}
                                  initial={{y: -30, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Описание того какие мы крутые ваще суперские
                            (покупайте наши курсы)</motion.p>
                        <motion.button className={'p-3 hover:bg-gold hover:border-gold font-raleway text-white border-white border-2 w-full sm:w-1/3'}
                                       initial={{y: -20, opacity: 0}}
                                       whileInView={{y: 0, opacity: 1}}
                                       viewport={{once: true}}
                                       transition={{ease: 'easeInOut', duration: 0.7,delay:0.6}}>Записаться
                        </motion.button>
                    </div>
                    <div className={'col-start-11 opacity-80 col-span-2 gap-3 hidden sm:flex flex-col'}>
                        {links.map((link,counter) => {
                            return (
                                <motion.a className={classList('cursor-pointer transition-all duration-300 text-right font-raleway', link.name == activeLink.name ? 'text-gold font-medium text-2xl' : 'text-white text-xl font-normal')}
                                          initial={{x: 20, opacity: 0}}
                                          whileInView={{x: 0, opacity: 1}}
                                          viewport={{once: true}}
                                          transition={{ease: 'easeInOut', duration: 0.7,delay:0.1*counter+1}}
                                   onClick={() => {
                                       setActiveLink(link)
                                       setTimeout(()=>{
                                           window.location.href=link.link
                                       },300)

                                   }}>{link.name}</motion.a>
                            )
                        })}
                    </div>
                </div>
                <motion.div className={'flex sm:flex-row flex-col gap-4 sm:gap-0 items-center justify-between'}
                            initial={{y: 30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7,delay:1.5}}>
                    <p className={'font-raleway opacity-80 text-white sm:text-right text-center sm:text-xl'}>Москва, ул. Марксисткая, д.
                        2</p>
                    <p className={'font-raleway sm:hidden text-white text-right text-xl'}>+7(906)-720-32-32</p>
                    <div className={'flex gap-3 items-center justify-center'}>
                        <img src={'/images/vk.svg'}/>
                        <img src={'/images/telegram.svg'}/>
                    </div>
                </motion.div>
            </div>

            {/*ВТОРОЙ БЛОК*/}

            <div id={'about'}
                className={'bg-white sm:h-[687px] gap-x-6 w-full overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-center sm:py-0 sm:px-0 py-10 px-[20px] sm:pl-[60px]'}>
                <div className={'flex gap-7 sm:col-span-5 flex-col items-start'}>
                    <motion.p className={'font-oranienbaum text-5xl sm:text-6xl'}
                              initial={{x: -30, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>О нас</motion.p>
                    <motion.p className={'font-raleway text-lg sm:text-xl leading-[140%]'}
                              initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых.<br/> Мы учим основам гимнастики и акробатики, а
                        также
                        созданию композиций на аппаратах. Занятия проходят
                        в группах и индивидуально, а наш опытный тренер
                        поможет каждому ученику достичь своих целей.</motion.p>
                    <motion.p className={'sm:block hidden font-raleway text-xl leading-[140%]'}
                    initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых. <br/>Мы учим основам гимнастики и акробатики, а
                        также созданию композиций на аппаратах. </motion.p>
                    <motion.p className={'sm:block hidden font-raleway text-xl leading-[140%]'}
                    initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых. <br/>Мы учим основам гимнастики и акробатики, а
                        также </motion.p>
                </div>
                <img className={'sm:col-span-7 mt-9 sm:mt-0 w-full h-full object-cover'} src={'/images/girl.png'}/>
            </div>

            {/*ТРЕТИЙ БЛОК*/}

            <div id={'meetings'}
                className={'h-[400px] flex items-center justify-center bg-cover bg-[url("/images/meet_bg.png")] sm:px-0 px-[20px] w-full'}>
                <div className={'flex flex-col gap-8 items-center justify-center'}>
                    <motion.p className={'font-oranienbaum text-gold text-5xl text-center sm:text-left sm:text-6xl'}
                    initial={{scale: 0.7, opacity: 0}}
                              whileInView={{scale: 1, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>Летние сборы в Сочи</motion.p>
                    <motion.p className={'font-raleway text-white font-medium opacity-80 text-2xl sm:text-3xl'}
                    initial={{scale: 0.7, opacity: 0}}
                              whileInView={{scale: 1, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>12-23 июля</motion.p>
                    <motion.button className={'p-3 font-raleway text-white border-white border-2 w-60'}
                    initial={{scale: 0.7, opacity: 0}}
                              whileInView={{scale: 1, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>Записаться
                    </motion.button>
                </div>
            </div>

            {/*ЧЕТВЁРТЫЙ БЛОК*/}
            <div className={'bg-white h-fit pb-40 overflow-hidden px-[20px] sm:px-[60px]'}>
                <div className={'w-full grid grid-cols-1 sm:grid-cols-12 items-start'}>
                    <div className={'sm:col-span-5 py-10 sm:py-20 gap-7 flex flex-col'}>
                        <motion.p className={'text-gold font-oranienbaum text-5xl sm:text-5xl'}
                                  initial={{x: -30, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}>Наши направления</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-2xl sm:text-3xl'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Воздушная
                            гимнастика</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-lg sm:text-xl'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Это захватывающее и
                            сложное искусство, которое требует от спортсмена не только физической подготовки,
                            но и гибкости, координации движений и умения работать
                            в команде.</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-lg sm:text-xl'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Это захватывающее и
                            сложное искусство, которое требует от спортсмена не только физической подготовки,
                            но и гибкости, координации движений и умения работать
                            в команде.</motion.p>
                        <motion.button className={'p-3 font-raleway text-gold border-gold border-2 w-full sm:w-72'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Записаться
                        </motion.button>
                    </div>
                    <div className={'sm:col-end-13 row-start-1 flex justify-center sm:row-auto h-96 sm:h-auto sm:col-span-5 relative'}>
                        <motion.img className={'w-full absolute z-10'} src={'/images/first_track.png'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.6}}/>
                        <motion.img className={'w-96 animate-spin-slow absolute sm:top-52 z-0 sm:left-32 aspect-square'}
                             src={'/images/coroleva_team.svg'}
                        initial={{y: -30, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7,delay:0.6}}/>
                    </div>
                </div>
                <div className={'w-full grid sm:mt-32 grid-cols-1 sm:grid-cols-12 items-start'}>
                    <motion.div className={'sm:col-span-5 sm:h-auto h-96 flex justify-center w-full relative'}
                                initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}>
                        <img className={'w-full absolute z-10'} src={'/images/second_track.png'}/>
                        <img className={'w-96 animate-spin-slow absolute sm:top-20 z-0 sm:right-0 aspect-square'}
                             src={'/images/coroleva_team.svg'}/>
                    </motion.div>
                    <div className={'sm:col-span-5 sm:col-end-13 py-20 gap-7 flex flex-col'}>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-2xl sm:text-3xl'}
                        initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Художественная
                            гимнастика</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-lg sm:text-xl'}
                        initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Художественная
                            гимнастика является одним из самых красивых и грациозных видов спорта, который развивает
                            гибкость, координацию движений, силу и выносливость.</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-lg sm:text-xl'}
                        initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Художественная
                            гимнастика требует от спортсменов не только физической подготовки, но и психологической
                            устойчивости. Дети учатся контролировать свои эмоции и концентрироваться на выполнении
                            упражнений.</motion.p>
                        <motion.p className={'font-raleway text-black font-medium opacity-80 text-lg sm:text-xl'}
                        initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Кроме того,
                            художественная гимнастика имеет множество преимуществ для здоровья. Она укрепляет мышцы,
                            улучшает осанку и координацию движений, а также помогает
                            бороться со стрессом и тревожностью.</motion.p>
                        <motion.button className={'p-3 font-raleway text-gold border-gold border-2 w-full sm:w-72'}
                        initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Записаться
                        </motion.button>
                    </div>

                </div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white sm:mt-48 py-10 sm:py-20 px-[20px] sm:px-[60px]'}>
                <motion.p className={'text-gold mb-7 font-oranienbaum text-4xl sm:text-left text-center sm:text-5xl'}
                          initial={{x: -30, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Уникальный преподавательский <br/> состав</motion.p>
                <Trainers></Trainers>
            </div>

            {/*СЕДЬМОЙ БЛОК*/}

            <div id={'news'} className={'bg-white mt-3 pt-10 pb-32 px-[20px] sm:px-[60px]'}>
                <motion.p className={'text-gold mb-7 font-oranienbaum sm:text-left text-center text-5xl sm:text-5xl'}
                          initial={{x: -30, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Новости</motion.p>
                <News></News>
            </div>

            {/*ВОСЬМОЙ БЛОК*/}

            <div className={'bg-black py-32 flex justify-center px-[20px] sm:px-[60px]'}>
                <div className={'w-full'}>
                    <motion.p className={'text-gold mb-8 font-oranienbaum w-full text-5xl sm:text-5xl'}
                              initial={{x: -30, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>Фотогаллерея</motion.p>
                    <motion.div className={'flex sm:flex-row flex-col gap-4 sm:h-[700px] items-center justify-center'}
                                initial={{scale: 1.2, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}>
                        <div className={'flex-col w-full gap-4 sm:gap-0 sm:w-1/3 object-cover h-full sm:justify-between flex items-center'}>
                            <div className={'overflow-hidden'}><img onClick={()=>{router.push('/')}} className={'cursor-pointer hover:scale-125 transition-all duration-300'} src={'/images/photogallery/4.png'}/></div>
                            <div className={'overflow-hidden'}><img onClick={()=>{router.push('/')}} className={'cursor-pointer hover:scale-125 transition-all duration-300'} src={'/images/photogallery/2.png'}/></div>
                        </div>
                        <div className={'w-full h-full sm:w-1/3 overflow-hidden'}><img onClick={()=>{router.push('/')}} className={'cursor-pointer hover:scale-125 transition-all duration-300 h-full w-full object-cover'} src={'/images/photogallery/1.png'}/></div>
                        <div className={'flex-col w-full gap-4 sm:gap-0 sm:w-1/3 object-cover h-full sm:justify-between flex items-center'}>
                            <div className={'overflow-hidden'}><img onClick={()=>{router.push('/')}} className={'cursor-pointer hover:scale-125 transition-all duration-300'} src={'/images/photogallery/3.png'}/></div>
                            <div className={'overflow-hidden'}><img onClick={()=>{router.push('/')}} className={'cursor-pointer hover:scale-125 transition-all duration-300'} src={'/images/photogallery/5.png'}/></div>
                        </div>
                    </motion.div>
                    <p onClick={()=>{router.push('/')}} className={'text-gold cursor-pointer text-right mt-4 font-raleway w-full underline text-xl sm:text-2xl'}>Смотреть всю
                        галерею</p>
                </div>
            </div>

            <div className={'bg-black px-[20px] py-10 sm:py-32 sm:px-[60px]'}>
                <motion.p className={'text-gold font-oranienbaum mb-9 w-full text-5xl sm:text-5xl'}
                          initial={{x: -30, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Контакты</motion.p>
                <div className={'grid grid-cols-1 sm:grid-cols-12 w-full'}>
                    <div className={'w-full sm:col-span-5 flex flex-col gap-6'}>
                        <div className={'w-full flex sm:flex-row flex-col gap-6 sm:gap-0 sm:items-center justify-between'}>
                            <motion.div className={'flex flex-col'}
                            initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>
                                <p className={'text-xl sm:text-3xl text-white font-raleway font-medium'}>Адрес</p>
                                <p className={'font-raleway sm:text-lg text-sm text-white font-raleway font-normal'}>м. ВДНХ, проспект
                                    Мира, 146</p>
                            </motion.div>
                            <motion.div className={'flex flex-col'}
                            initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>
                                <p className={'text-xl sm:text-3xl text-white font-raleway font-medium'}>Часы работы</p>
                                <p className={'font-raleway sm:text-lg text-sm text-white font-raleway font-normal'}>9.00 - 18.00 по
                                    будням</p>
                            </motion.div>
                        </div>
                        <motion.p className={'text-xl sm:text-3xl font-raleway font-medium text-white'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Как к нам пройти</motion.p>
                        <motion.p className={'font-raleway text-sm sm:text-lg font-normal text-white'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Для начала нужно выйти из метро
                            ВДНХ и
                            перейти дорогу. Затем нужно идти вдоль аллеи к павильонам ВДНХ до тех пор, пока не увидите
                            большое здание с вывеской ВДНХ на фасаде. Это будет павильон ВДНХ. Войдите в него через
                            главный вход. Далее пройдите через большой зал и найдите выход. Выйдя на проспект Мира вы
                            сможете дойти до нужного дома по этому проспекту.</motion.p>
                        <motion.p className={'text-lg sm:text-3xl font-raleway font-medium text-white'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Как с нами связаться</motion.p>
                        <motion.div className={'flex items-center gap-3'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>
                            <img src={'/images/phone.svg'}/>
                            <p className={'text-xl font-normal font-raleway text-white'}>+7 (999) 999-99-99</p>
                        </motion.div>
                        <motion.div className={'flex items-center gap-3'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>
                            <img src={'/images/email.svg'}/>
                            <p className={'text-xl font-normal font-raleway text-white'}>korolevateam@mail.ru</p>
                        </motion.div>
                    </div>
                    <motion.div className={'w-full sm:col-span-6 sm:col-end-13'}
                                initial={{scale: 0.7, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}>
                        <div className={'h-full w-full'}><a
                            href="https://yandex.ru/maps/org/dinamika/180706369619/?utm_medium=mapframe&utm_source=maps"
                        >Динамика</a><a
                            href="https://yandex.ru/maps/213/moscow/category/sports_school/184107305/?utm_medium=mapframe&utm_source=maps"
                        >Спортивная школа в
                            Москве</a><a
                            href="https://yandex.ru/maps/213/moscow/category/sports_club/184107297/?utm_medium=mapframe&utm_source=maps"
                        >Спортивный клуб, секция в
                            Москве</a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.679744%2C55.730117&mode=search&oid=180706369619&ol=biz&z=16"
                                width="100%" style={{position: 'relative'}} height="100%" frameBorder="1"
                                allowFullScreen="true"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className={'bg-black sm:py-32 py-10 px-[20px] sm:px-[60px]'}>
                <div className={'grid grid-cols-1 sm:grid-cols-12 items-center w-full'}>
                    <div className={'sm:col-span-5 flex flex-col gap-6'}>
                        <motion.p className={'text-gold font-oranienbaum sm:mb-9 w-full text-4xl sm:text-5xl'}
                        initial={{x: -30, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Обратная связь</motion.p>
                        <motion.p className={'text-xl sm:text-3xl font-raleway font-medium text-white'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7,delay:0.3}}>Остались вопросы?</motion.p>
                        <motion.p className={'font-raleway text-sm sm:text-lg font-normal text-white'}
                        initial={{y: -30, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7,delay:0.6}}>Оставьте свои контактные данные, и
                            мы свяжемся с вами</motion.p>
                        <motion.form className={'flex flex-col gap-3'}
                                     initial={{y: -30, opacity: 0}}
                                     whileInView={{y: 0, opacity: 1}}
                                     viewport={{once: true}}
                                     transition={{ease: 'easeInOut', duration: 0.7,delay:0.9}}>
                            <input className={'w-full p-3 font-raleway text-white text-opacity-80 border-2 border-opacity-30 border-white bg-transparent h-12'} placeholder={'Ваше имя'}/>
                            <input className={'w-full p-3 font-raleway text-white text-opacity-80 border-2 border-opacity-30 border-white bg-transparent h-12'} placeholder={'Ваше телефон'}/>
                            <textarea className={'w-    full p-3 font-raleway text-white text-opacity-80 border-2 border-opacity-30 border-white bg-transparent h-24'} placeholder={'Текст сообщения'}/>
                            <input className={'w-full flex items-center bg-gold p-4 font-raleway text-white font-medium justify-center'} type={'submit'}/>
                        </motion.form>

                    </div>
                    <div className={'mt-8 sm:mt-0 sm:col-span-6 sm:col-end-13'}>
                        <motion.div className={'w-full h-[600px]'}
                                    initial={{scale: 0.7, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                        >
                            <iframe
                                style={{height: '100%', width: '100%', overflow: 'scroll'}}
                                src="https://yandex.ru/maps-reviews-widget/180706369619?comments"></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={'bg-black sm:py-16 py-10 px-[20px] sm:px-[60px]'}>
                <div className={'grid sm:grid-cols-12 items-center'}>
                    <div className={'flex flex-col gap-4 sm:gap-1 sm:col-span-4'}>
                        <p className={'font-oranienbaum text-white text-5xl text-opacity-80'}>KorolevaTeam </p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Студия воздушной и художественной гимнастики</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>м. ВДНХ, проспект Мира, 146</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>КоролеваТим © Все права защищены. 2023</p>
                    </div>
                    <div className={'flex sm:mt-0 mt-4 flex-col gap-4 sm:gap-1 sm:col-start-7 sm:col-span-2'}>
                        <p className={'font-raleway text-white text-3xl text-opacity-80'}>Контакты </p>
                        <p className={'font-raleway text-opacity-80 text-white'}>+7 (999) 999-99-99</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>korolevateam@mail.ru</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Вконтакте</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Телеграм</p>
                    </div>
                    <div className={'flex sm:block hidden flex-col gap-1 sm:col-end-12 sm:col-span-1'}>
                        <p className={'font-raleway text-white text-3xl text-opacity-80'}>Меню </p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Расписание</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>О нас</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Сборы</p>
                        <p className={'font-raleway text-opacity-80 text-white'}>Новости</p>
                    </div>
                </div>
            </div>

        </main>
    )
}
