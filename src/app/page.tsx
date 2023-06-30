"use client"
import Image from 'next/image'
import {useState} from "react";
import {classList} from "@/helpers/classList";

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
            <div className={'bg-center min-h-screen flex flex-col justify-between py-10 px-[60px] w-full bg-[url("/images/main_bg.png")] bg-cover'}>
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
                                onClick={()=>{
                                    setActiveLink(link)
                                }}>{link.name}</a>
                            )
                        })}
                    </div>
                </div>
                <div className={'flex items-center justify-between'}>
                    <p className={'font-raleway opacity-80 text-white text-right text-xl'}>Москва, ул. Марксисткая, д. 2</p>
                    <div className={'flex gap-3 items-center justify-center'}>
                        <img src={'/images/vk.svg'}/>
                        <img src={'/images/telegram.svg'}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
