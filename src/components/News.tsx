import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {motion} from "framer-motion";

const News = () => {
    const types = ['Новости', 'Мероприятия', 'Объявления']
    const [currentType, setCurrentType] = useState(types[0])

    const news = [
        {
            type: 'Новости',
            title: 'Название новости',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Новости',
            title: 'Название новости',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Новости',
            title: 'Название новости',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Новости',
            title: 'Название новости',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Мероприятия',
            title: 'Название мероприятия',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Мероприятия',
            title: 'Название мероприятия',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Мероприятия',
            title: 'Название мероприятия',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Мероприятия',
            title: 'Название мероприятия',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Объявления',
            title: 'Объявление',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Объявления',
            title: 'Объявление',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Объявления',
            title: 'Объявление',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        },
        {
            type: 'Объявления',
            title: 'Объявление',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
            date:'10.06.2023',
            image:'/images/news_temp.jpg'
        }
    ]

    const [currentPost,setCurrentPost]=useState(news[0])
    const [isPopOpen,setIsPopOpen]=useState(false)
    return (
        <div className={''}>
            <motion.div className={'hidden sm:flex items-center justify-end'}
                        initial={{y: -30, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: 'easeInOut', duration: 0.7}}>
                {types.map((category)=>{
                    return(
                        <div key={category} className={classList('p-4 flex font-raleway items-center duration-300 transition-all justify-center border-2 border-gold',category==currentType?'bg-gold text-white text-center':'text-gold cursor-pointer')} onClick={()=>{setCurrentType(category)}}>
                            {category}
                        </div>
                    )
                })}
            </motion.div>
            <div className={'grid mt-12 grid-cols-1 sm:grid-cols-2 gap-20'}>
                {news.map((post,counter)=>{
                    if(post.type==currentType){
                        return (
                            <motion.div key={counter} className={'flex gap-3 flex-col'}
                                        initial={{y: -30, opacity: 0}}
                                        whileInView={{y: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7}}>
                                <img className={'w-full aspect-video object-cover'} src={post.image}/>
                                <p className={'text-gold font-raleway text-2xl sm:text-3xl'}>{post.title}</p>
                                <p className={'font-raleway text-justify text-sm sm:text-lg w-full'}>{post.description.split(' ').slice(0, 30).join(' ')} ...</p>
                                <div className={'flex items-center justify-between'}>
                                    <p className={'underline cursor-pointer font-raleway text-gold text-sm sm:text-xl'} onClick={()=>{
                                        setCurrentPost(post);setIsPopOpen(true)
                                    }}>Читать полностью</p>
                                    <p className={'font-raleway'}>{post.date}</p>
                                </div>
                            </motion.div>
                        )
                    }
                })}
            </div>
            {isPopOpen?
                <div className={'fixed left-0 z-50 top-0 w-full h-screen bg-black bg-opacity-70 flex items-center justify-center'}>
                    <div className={'bg-white w-full sm:w-3/4 p-10 h-screen sm:h-[700px] overflow-y-scroll'}>
                        <div className={'flex gap-3 flex-col'}>
                            <img className={'w-full aspect-video object-cover'} src={currentPost.image}/>
                            <p className={'font-raleway'}>{currentPost.date}</p>
                            <p className={'text-gold font-raleway text-3xl'}>{currentPost.title}</p>
                            <p className={'font-raleway text-justify w-full'}>{currentPost.description}</p>
                        </div>
                    </div>
                    <div className={'absolute cursor-pointer right-5 top-5 text-xl sm:text-4xl font-bold font-raleway text-black sm:text-white'} onClick={()=>{setIsPopOpen(false)}}>
                        X
                    </div>
                </div>
                :null}
        </div>
    );
};

export default News;