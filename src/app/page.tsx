"use client"
import Image from 'next/image'
import {useState} from "react";
import {classList} from "@/helpers/classList";
import Trainers from "@/components/Trainers";
import News from "@/components/News";

export default function Home() {

    const links = [
        {
            name: 'Главная',
            link: ''
        },
        {
            name: 'Расписание',
            link: ''
        },
        {
            name: 'Новости',
            link: ''
        },
        {
            name: 'О нас',
            link: ''
        },
        {
            name: 'Сборы',
            link: ''
        },
    ]

    const [activeLink, setActiveLink] = useState(links[0])

    return (
        <main className={''}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap" rel="stylesheet"/>

            {/*ПЕРВЫЙ БЛОК*/}

            <div
                className={'bg-center min-h-screen flex flex-col justify-between py-10 px-[60px] w-full bg-[url("/images/main_bg.png")] bg-cover'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'bg-gold p-2 w-16 aspect-square flex items-center justify-center rounded-full'}>
                        <img src={'/images/logo.svg'}/>
                    </div>
                    <p className={'font-raleway text-white text-right text-2xl'}>+7(906)-720-32-32</p>
                </div>
                <div className={'grid grid-cols-12 items-center'}>
                    <div className={'col-span-6 gap-8 flex flex-col'}>
                        <p className={'text-gold leading-[82%] font-oranienbaum text-7xl'}>Художественная
                            и воздушная гимнастика</p>
                        <p className={'text-white font-raleway opacity-80'}>Описание того какие мы крутые ваще суперские
                            (покупайте наши курсы)</p>
                        <button className={'p-3 font-raleway text-white border-white border-2 w-1/3'}>Записаться
                        </button>
                    </div>
                    <div className={'col-start-11 opacity-80 col-span-2 gap-3 flex flex-col'}>
                        {links.map((link) => {
                            return (
                                <a className={classList('cursor-pointer transition-all duration-300 text-right font-raleway', link.name == activeLink.name ? 'text-gold font-medium text-2xl' : 'text-white text-xl font-normal')}
                                   onClick={() => {
                                       setActiveLink(link)
                                   }}>{link.name}</a>
                            )
                        })}
                    </div>
                </div>
                <div className={'flex items-center justify-between'}>
                    <p className={'font-raleway opacity-80 text-white text-right text-xl'}>Москва, ул. Марксисткая, д.
                        2</p>
                    <div className={'flex gap-3 items-center justify-center'}>
                        <img src={'/images/vk.svg'}/>
                        <img src={'/images/telegram.svg'}/>
                    </div>
                </div>
            </div>

            {/*ВТОРОЙ БЛОК*/}

            <div
                className={'bg-white h-[687px] gap-x-6 w-full overflow-hidden grid grid-cols-12 items-center pl-[60px]'}>
                <div className={'flex gap-7 col-span-5 flex-col items-start'}>
                    <p className={'font-oranienbaum text-6xl'}>О нас</p>
                    <p className={'font-raleway text-xl leading-[140%]'}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых.<br/> Мы учим основам гимнастики и акробатики, а
                        также
                        созданию композиций на аппаратах. Занятия проходят
                        в группах и индивидуально, а наш опытный тренер
                        поможет каждому ученику достичь своих целей.</p>
                    <p className={'font-raleway text-xl leading-[140%]'}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых. <br/>Мы учим основам гимнастики и акробатики, а
                        также созданию композиций на аппаратах. </p>
                    <p className={'font-raleway text-xl leading-[140%]'}>Наша студия проводит занятия по художественной
                        и воздушной гимнастике для детей и взрослых. <br/>Мы учим основам гимнастики и акробатики, а
                        также </p>
                </div>
                <img className={'col-span-7 w-full h-full object-cover'} src={'/images/girl.png'}/>
            </div>

            {/*ТРЕТИЙ БЛОК*/}

            <div
                className={'h-[400px] flex items-center justify-center bg-cover bg-[url("/images/meet_bg.png")] w-full'}>
                <div className={'flex flex-col gap-8 items-center justify-center'}>
                    <p className={'font-oranienbaum text-gold text-6xl'}>Летние сборы в Сочи</p>
                    <p className={'font-raleway text-white font-medium opacity-80 text-3xl'}>12-23 июля</p>
                    <button className={'p-3 font-raleway text-white border-white border-2 w-60'}>Записаться
                    </button>
                </div>
            </div>

            {/*ЧЕТВЁРТЫЙ БЛОК*/}
            <div className={'bg-white h-fit px-[60px]'}>
                <div className={'w-full grid grid-cols-12 items-start'}>
                    <div className={'col-span-5 py-20 gap-7 flex flex-col'}>
                        <p className={'text-gold font-oranienbaum text-5xl'}>Наши направления</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-3xl'}>Воздушная
                            гимнастика</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-xl'}>Это захватывающее и
                            сложное искусство, которое требует от спортсмена не только физической подготовки,
                            но и гибкости, координации движений и умения работать
                            в команде.</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-xl'}>Это захватывающее и
                            сложное искусство, которое требует от спортсмена не только физической подготовки,
                            но и гибкости, координации движений и умения работать
                            в команде.</p>
                        <button className={'p-3 font-raleway text-gold border-gold border-2 w-72'}>Записаться
                        </button>
                    </div>
                    <div className={'col-end-13 col-span-5 relative'}>
                        <img className={'w-full absolute z-10'} src={'/images/first_track.png'}/>
                        <img className={'w-96 absolute top-52 z-0 left-32 aspect-square'}
                             src={'/images/coroleva_team.svg'}/>
                    </div>
                </div>
                <div className={'w-full grid mt-32 grid-cols-12 items-start'}>
                    <div className={'col-span-5 relative'}>
                        <img className={'w-full absolute z-10'} src={'/images/second_track.png'}/>
                        <img className={'w-96 absolute top-20 z-0 right-0 aspect-square'}
                             src={'/images/coroleva_team.svg'}/>
                    </div>
                    <div className={'col-span-5 col-end-13 py-20 gap-7 flex flex-col'}>
                        <p className={'font-raleway text-black font-medium opacity-80 text-3xl'}>Художественная
                            гимнастика</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-xl'}>Художественная
                            гимнастика является одним из самых красивых и грациозных видов спорта, который развивает
                            гибкость, координацию движений, силу и выносливость.</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-xl'}>Художественная
                            гимнастика требует от спортсменов не только физической подготовки, но и психологической
                            устойчивости. Дети учатся контролировать свои эмоции и концентрироваться на выполнении
                            упражнений.</p>
                        <p className={'font-raleway text-black font-medium opacity-80 text-xl'}>Кроме того,
                            художественная гимнастика имеет множество преимуществ для здоровья. Она укрепляет мышцы,
                            улучшает осанку и координацию движений, а также помогает
                            бороться со стрессом и тревожностью.</p>
                        <button className={'p-3 font-raleway text-gold border-gold border-2 w-72'}>Записаться
                        </button>
                    </div>

                </div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white mt-48 py-20 px-[60px]'}>
                <p className={'text-gold mb-7 font-oranienbaum text-5xl'}>Уникальный преподавательский <br/> состав</p>
                <Trainers></Trainers>
            </div>

            {/*СЕДЬМОЙ БЛОК*/}

            <div className={'bg-white mt-3 pt-10 pb-32 px-[60px]'}>
                <p className={'text-gold mb-7 font-oranienbaum text-5xl'}>Новости</p>
                <News></News>
            </div>

        </main>
    )
}
