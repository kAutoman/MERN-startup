//import component
import React from 'react'
//import module
import Slider from "react-slick";
import { connect } from 'react-redux';
//import css
import './landing.view.css'
const Landing = ({isDark}) => {

    var feature_setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
         {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
    };

    const feedback_setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
            }
        }
        ]
    };


    return(
        <>
            <div className={`${isDark && 'dark'}`}>
                <div className={`dark:bg-[#1a2138] pt-[200px]`}>
                    {/* KENEK Card */}
                    <div id='landing' className='flex flex-col min-[1000px]:flex-row justify-between px-5 min-[1400px]:px-40'>
                        <div className='w-full'>
                            <p className='text-lg text-[rgb(143,120,45)] text-left font-semibold uppercase tracking-wide font'>Up your network game</p>
                            <p className='text-left'><span className='text-[#2D3748] dark:text-[#eeeeef] text-[50px] font-bold'>Get</span>  &nbsp;&nbsp;&nbsp; <span className='text-[65px] text-[#EAB301] font-extrabold md:tracking-[0.2em]'>KENEK</span> </p>
                            <p className='text-left text-[50px] md:text-[50px] text-[#2D3748] dark:text-[#eeeeef] font-bold'>Stay Connected</p>
                            <p className='text-gray-600 text-xl font-semibold mt-5 dark:text-[#eeeeef]'>We build software and hardware for smart digital name cards.</p>
                            {/* KENEK Kard Button */}
                            <div className='flex flex-row items-center gap-5 mt-10'>
                                <button className='bg-[#EEC12C] text-white px-3 py-3 rounded-xl hover:bg-yellow-400 '>
                                    BUY CARD NOW
                                </button>
                                <button className='text-[#EAB301] border border-[#EAB301] px-3 py-3 rounded-xl hover:bg-yellow-400 hover:text-white'>
                                    View Demo
                                </button>
                            </div>
                        </div>
                        <div className='w-full mt-10' id='kenek_card'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 200 98" className='p-2'>
                                <path fill="#dbae1a" d="M195.134 64.49l-54.279 31.44c-3.179 1.842-8.376 1.846-11.601 0L38.086 44.006c-3.229-1.839-3.264-4.824-.085-6.666l54.28-31.42c3.182-1.842 8.375-1.846 11.601 0l91.167 51.924c3.229 1.82 3.268 4.804.085 6.647z"></path>
                                <path fill="#dbae1a" d="M197.636 61.133l-54.275 31.42c-3.183 1.842-8.381 1.846-11.602 0L40.592 40.629c-3.23-1.839-3.268-4.824-.085-6.666L94.793 2.54c3.183-1.842 8.38-1.846 11.602 0l91.167 51.924c3.218 1.85 3.256 4.828.074 6.67z"></path>
                                <path fill="#dbae1a" d="M195.661 62.28L141.386 93.7c-3.183 1.841-8.38 1.845-11.601 0L38.617 41.774c-3.229-1.838-3.264-4.823-.081-6.665L92.81 3.69c3.183-1.843 8.38-1.846 11.601 0l91.168 51.924c3.24 1.854 3.264 4.823.081 6.665z"></path>
                                <path fill="url(#paint0_linear)" d="M195.66 62.276l-54.279 31.423a8.87 8.87 0 01-1.265.597c-3.163 1.219-7.509 1.019-10.34-.589L38.608 41.783c-3.225-1.835-3.264-4.82-.085-6.662l24.87-14.392 29.39-17.027c3.179-1.843 8.376-1.847 11.601 0l91.164 51.924c3.271 1.842 3.295 4.811.112 6.65z" opacity="0.58"></path>
                                <path fill="url(#paint1_linear)" d="M88.74 6.13l103.167 57.99-18.292 10.616L71.102 16.093 88.74 6.13z" opacity="0.58"></path>
                                <path fill="url(#paint2_linear)" d="M164.986 79.896l-24.87 14.397c-3.163 1.219-7.509 1.019-10.34-.589L38.608 41.78c-3.225-1.834-3.264-4.82-.085-6.662l24.87-14.392c3.16-1.22 7.51-1.02 10.34.588l91.168 51.92c3.225 1.84 3.264 4.824.085 6.662z" opacity="0.58"></path>
                                <path fill="#FDB523" d="M106.364 27.249l-11.679 6.754c-1.763 1.023-4.64 1.023-6.435 0l-14.308-8.15c-1.79-1.02-1.81-2.693-.046-3.697l11.678-6.761c1.764-1.02 4.64-1.023 6.435 0l14.309 8.15c1.79 1.03 1.809 2.685.046 3.704z"></path>
                                <path fill="#EFA92B" d="M98.822 31.542l-1.934 1.108-5.96-3.4a6.168 6.168 0 01-3.17.323l-.286-.054-.225-.123c-.498-.27-4.93-2.654-5.936-3.389-1.067-.77-.514-1.923 0-2.63l-4.752-2.693 1.933-1.108 6.188 3.527-.515.515c-.549.574-.839 1.277-.688 1.447.615.45 3.395 1.992 5.31 3.027.404-.035.79-.18 1.117-.42l.948-.661 7.97 4.53zM102.393 29.468l1.933-1.108-5.97-3.4c.827-.715.773-1.442.537-1.823l-.097-.165-.209-.127c-.475-.285-4.667-2.808-5.951-3.381-1.365-.608-3.372-.28-4.582 0L83.3 16.772l-1.934 1.107 6.188 3.527.9-.288c.998-.32 2.22-.493 2.518-.408.774.35 3.48 1.923 5.31 3.023-.027.135-.155.385-.72.646l-1.14.55 7.97 4.539zM100.931 30.4l-.406.234-20.744-11.82.402-.234 20.748 11.82zM94.595 34.07l-.406.23-20.744-11.815.406-.235 20.744 11.82zM107.267 26.73l-.403.234-20.747-11.82.406-.234 20.744 11.82z"></path>
                                <path fill="#dbae1a" d="M115.164 34.434a3.284 3.284 0 01-1.492.309 3.083 3.083 0 01-1.433-.407c-.487-.276-.705-.597-.652-.965.055-.367.374-.719.956-1.056l.395-.228c.382-.22.785-.376 1.211-.467.427-.089.844-.107 1.249-.054.408.052.777.171 1.108.358.438.248.668.517.688.808.022.29-.16.571-.547.845l-.548-.31c.28-.215.414-.41.402-.585-.01-.173-.157-.34-.441-.5-.348-.197-.749-.277-1.203-.242-.452.037-.914.192-1.386.465l-.397.23c-.446.257-.707.515-.783.773-.076.258.055.482.391.672.303.17.602.263.898.275.3.013.645-.064 1.036-.23l.548.31zm2.618 1.07l-.97-.547-1.661.96-.547-.31 4.105-2.373 1.367.772c.465.263.717.526.756.788.041.264-.14.512-.542.745a2.126 2.126 0 01-.878.268 2.937 2.937 0 01-1.004-.08l-.773 1.555-.034.02-.584-.33.765-1.467zm-.527-.803l.836.472c.27.153.554.234.852.243.3.01.567-.051.8-.186.253-.147.371-.303.354-.467-.016-.164-.167-.328-.452-.491l-.834-.471-1.556.9zm5.161 3.152l-1.789-1.011-1.455.841 2.079 1.175-.443.256-2.623-1.483 4.105-2.373 2.595 1.466-.445.257-2.051-1.158-1.319.763 1.789 1.01-.443.257zm-.93 1.644l4.105-2.374 1.165.658c.36.203.598.428.716.676a.773.773 0 01-.036.75c-.14.254-.398.49-.774.71l-.262.152a3.903 3.903 0 01-1.245.46c-.44.084-.878.092-1.314.024a3.615 3.615 0 01-1.212-.41l-1.143-.646zm4.204-1.809l-3.217 1.86.573.324a2.53 2.53 0 001.367.328c.494-.018.98-.165 1.46-.442l.239-.139c.467-.27.718-.541.754-.815.04-.274-.14-.526-.541-.757l-.635-.359zm.191 4.292l-.545-.307 4.106-2.374.544.307-4.105 2.374zm7.425.012l-1.327-.75-3.66 2.116-.541-.306 3.66-2.116-1.325-.748.446-.258 3.193 1.804-.446.258zm2.619 4.175a3.277 3.277 0 01-1.491.308 3.086 3.086 0 01-1.433-.406c-.487-.276-.705-.598-.652-.965.055-.367.373-.719.956-1.056l.395-.228c.381-.22.785-.376 1.211-.467.427-.09.844-.107 1.249-.055.408.052.777.172 1.107.359.439.248.668.517.689.808.022.29-.16.571-.547.845l-.548-.31c.28-.215.414-.41.402-.585-.011-.174-.157-.34-.441-.5-.348-.197-.749-.278-1.203-.242-.452.037-.914.191-1.386.464l-.398.23c-.445.258-.706.516-.782.774-.076.257.054.482.391.672.302.17.602.262.898.275.299.012.645-.064 1.036-.23l.547.31zm2.795 1.844l-1.73-.978-1.46.4-.561-.317 5.682-1.483.476.27-2.526 3.266-.558-.316.677-.842zm-1.12-1.142l1.404.793 1.217-1.508-2.621.715zm4.732 2.51l-.97-.549-1.661.96-.547-.309 4.105-2.374 1.367.773c.465.262.717.525.756.788.041.264-.14.512-.542.745a2.126 2.126 0 01-.878.267 2.937 2.937 0 01-1.004-.08l-.773 1.555-.034.02-.584-.33.765-1.467zm-.527-.805l.836.473c.271.153.555.234.853.243.299.01.566-.052.799-.187.254-.146.372-.302.354-.467-.016-.164-.167-.327-.452-.49l-.834-.472-1.556.9zm.93 2.931l4.106-2.374 1.165.659c.359.203.598.428.716.675a.773.773 0 01-.036.75c-.14.254-.398.49-.774.71l-.262.152a3.903 3.903 0 01-1.245.46 3.83 3.83 0 01-1.315.025 3.617 3.617 0 01-1.212-.411l-1.143-.646zm4.205-1.809l-3.218 1.86.573.324c.42.237.876.347 1.368.328.493-.017.98-.165 1.459-.442l.24-.139c.466-.269.717-.54.754-.815.04-.274-.141-.526-.541-.757l-.635-.359zM92.821 60.386L48.307 34.824c-.987-.566-.863-1.539.274-2.212 1.137-.654 2.862-.723 3.848-.157l44.514 25.562c.986.565.863 1.538-.278 2.207-1.137.654-2.858.727-3.844.162z"></path>
                                <path fill="#dbae1a" d="M159.496 62.467l-54.26 31.416c-3.183 1.842-8.38 1.846-11.601 0L2.463 41.959c-3.225-1.839-3.264-4.823-.08-6.666l54.274-31.42c3.183-1.842 8.38-1.846 11.602 0l91.167 51.924c3.214 1.839 3.252 4.824.07 6.67z"></path>
                                <path fill="#dbae1a" d="M160.022 60.25l-54.275 31.42c-3.182 1.842-8.38 1.842-11.601 0L2.978 39.746c-3.229-1.839-3.267-4.823-.085-6.666L57.165 1.657c3.182-1.843 8.38-1.847 11.6 0l91.168 51.924c3.237 1.842 3.272 4.827.089 6.669z"></path>
                                <path fill="url(#paint3_linear)" d="M160.027 60.246l-54.279 31.42a8.719 8.719 0 01-1.265.6c-3.163 1.22-7.514 1.02-10.344-.588L2.97 39.754c-3.225-1.839-3.264-4.82-.081-6.662L27.756 18.7 57.164 1.672c3.183-1.842 8.376-1.846 11.601 0l91.168 51.924c3.233 1.827 3.271 4.808.093 6.65z" opacity="0.58"></path>
                                <path fill="url(#paint4_linear)" d="M129.349 77.87l-24.866 14.397c-3.163 1.22-7.514 1.02-10.344-.588L2.97 39.755c-3.225-1.839-3.264-4.82-.081-6.662l24.866-14.392c3.163-1.22 7.51-1.02 10.34.588l91.168 51.924c3.225 1.835 3.264 4.82.085 6.658z" opacity="0.58"></path>
                                <path fill="#FDB523" d="M70.725 25.223L59.05 31.985c-1.764 1.019-4.64 1.023-6.439 0l-14.308-8.15c-1.79-1.024-1.814-2.693-.047-3.697l11.68-6.757c1.766-1.024 4.64-1.024 6.438 0l14.308 8.15c1.787 1.015 1.81 2.673.043 3.692z"></path>
                                <path fill="#EFA92B" d="M63.181 29.51l-1.914 1.112-5.967-3.4a6.22 6.22 0 01-3.171.323l-.29-.058-.22-.119c-.503-.269-4.931-2.654-5.937-3.388-1.067-.77-.518-1.923 0-2.631l-4.748-2.692 1.914-1.108 6.187 3.523-.499.52c-.545.576-.835 1.28-.688 1.45.615.45 3.395 1.992 5.31 3.026a2.254 2.254 0 001.121-.419l.947-.662 7.955 4.524zM66.76 27.442l1.914-1.107-5.975-3.4c.824-.72.774-1.443.538-1.823l-.1-.166-.21-.127c-.471-.284-4.663-2.807-5.951-3.38-1.365-.608-3.368-.281-4.583 0l-4.752-2.693-1.934 1.108 6.187 3.527.898-.293c.997-.315 2.22-.488 2.521-.403.773.35 3.48 1.923 5.31 3.023-.027.134-.155.384-.724.646l-1.16.55 8.02 4.538zM65.294 28.372l-.402.231-20.747-11.816.406-.234 20.743 11.82zM58.954 32.04l-.402.235-20.747-11.816.406-.234L58.954 32.04zM71.63 24.706l-.406.235L50.48 13.12l.407-.234 20.743 11.82z"></path>
                                <defs><linearGradient id="paint0_linear" x1="60.729" x2="136.873" y1="80.522" y2="-53.883" gradientUnits="userSpaceOnUse"><stop offset="0.01"></stop><stop offset="0.13" stop-opacity="0.69"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="50715" x2="32618.2" y1="9832.44" y2="45141.4" gradientUnits="userSpaceOnUse"><stop offset="0.01"></stop><stop offset="0.13" stop-opacity="0.69"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="237799" x2="276590" y1="-69763.8" y2="-90874.9" gradientUnits="userSpaceOnUse"><stop offset="0.01"></stop><stop offset="0.13" stop-opacity="0.69"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="295988" x2="349821" y1="-92581.5" y2="-119907" gradientUnits="userSpaceOnUse"><stop offset="0.01"></stop><stop offset="0.13" stop-opacity="0.69"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear" x1="230428" x2="269218" y1="-73139.6" y2="-94251.9" gradientUnits="userSpaceOnUse"><stop offset="0.01"></stop><stop offset="0.13" stop-opacity="0.69"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs>
                            </svg>
                        </div>
                    </div>
                    {/* OUR MISSION */}
                    <div id='mission' className='m-auto mt-20'>
                        <p className='uppercase text-center text-[rgb(129,104,23)] text-2xl font-semibold'>Our Mission</p>
                        <p className='text-[45px] text-[#2D3748] dark:text-white text-center font-semibold'>Eco-friendly and ever lasting.</p>
                        <p className='text-center text-[rgb(129,104,23)] dark:text-white text-xl '>You don't have to worry about printing name cards again!</p>
                    </div>    
                    {/* Slider section begin*/}
                    <div className='m-auto mt-10 mb-40 px-20'>
                        <Slider {...feature_setting} className="break-words">
                            <div className='p-5'>
                                <div className='flex flex-col h-[250px] w-full item-center p-10 shadow-xl rounded-2xl dark:bg-[#2d364e]' id='card'>
                                    <div className='bg-[#FFF8E1] m-auto p-4 rounded-2xl text-[#FFC107]'>
                                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <p className='text-center text-base text-gray-700 dark:text-white mt-5'>Share and save your cards</p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col h-[250px] w-full item-center p-10 shadow-xl rounded-2xl dark:bg-[#2d364e]' id='card'>
                                    <div className='bg-[#FCE4EC] m-auto p-4 rounded-2xl text-[#E91E63]'>
                                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    </div>
                                    <p className='text-center text-xl text-gray-700 mt-5 dark:text-white'>Customize your design</p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col h-[250px] w-full item-center p-10 shadow-xl rounded-2xl dark:bg-[#2d364e]' id='card'>
                                    <div className='bg-[#E3F2FD] m-auto p-4 rounded-2xl text-[rgb(33,150,243)]'>
                                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <p className='text-center text-xl text-gray-700 mt-5 dark:text-white'>Quick Setup</p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col h-[250px] w-full item-center p-10 shadow-xl rounded-2xl dark:bg-[#2d364e]' id='card'>
                                    <div className='bg-[#F3E5F5] m-auto p-4 rounded-2xl text-[#9C27B0]'>
                                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <p className='text-center text-xl text-gray-700 mt-5 dark:text-white'>No App Required!</p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='flex flex-col h-[250px] w-full item-center p-10 shadow-xl rounded-2xl dark:bg-[#2d364e]' id='card'>
                                    <div className='bg-[#E8F5E9] m-auto p-4 rounded-2xl text-[#9AD29C]'>
                                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <p className='text-center text-xl text-gray-700 mt-5 dark:text-white'>UI / UX Design</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* Slider section end */}
                    {/* WHY KENEK BEGIN*/}
                    <div id='mission' className='m-auto py-20 dark:bg-[#2d364e]'>
                        <p className='uppercase text-center text-[rgb(129,104,23)] text-2xl font-semibold'>Why we have to choose KENEK</p>
                        <p className='text-[45px] text-[#2D3748] dark:text-white text-center font-semibold'>We make networking easy and fun</p>
                        <p className='text-center text-[rgb(129,104,23)] text-xl'>Most digital business cards are plain contact sheets.</p>
                        <p className='text-center text-[rgb(129,104,23)] text-xl'>We aim to make it flexible and represent what you truely are.</p>
                        <div className='mt-10 flex justify-center'>
                            <button className='bg-[#EEC12C]  text-white px-3 py-3 rounded-xl hover:bg-yellow-400 '>
                                Buy Membership
                            </button>
                        </div>
                        <div className='mt-20 flex max-[1200px]:w-full items-center justify-center' id='kenek_piece'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="none" viewBox="0 0 164 101">
                                <path fill="#E6E6E6" d="M82 100.115c45.053 0 81.576-2.572 81.576-5.745s-36.523-5.745-81.575-5.745C36.948 88.625.426 91.197.426 94.37s36.522 5.745 81.575 5.745z" opacity="0.45"></path>
                                <path fill="#CCC" d="M135.64 9.854l-8.97 36-13.225-3.295a2.866 2.866 0 01-.075-3.44 5.305 5.305 0 002.585-3.345A5.71 5.71 0 00104.885 33a5.34 5.34 0 00.71 4.17 2.856 2.856 0 01-1.68 3l-13.22-3.3L94.03 23.5a2.885 2.885 0 00-2.915-1.5 5.316 5.316 0 01-4.17.715 5.71 5.71 0 012.76-11.07 5.315 5.315 0 013.345 2.585 2.874 2.874 0 003.28.045L99.665.904l35.975 8.95z"></path>
                                <path fill="#FFD200" d="M139.464 12.47s-5.19 7.06.075 9.206c5.265 2.145 5.715-5.675 5.715-5.675l-2.375-5.245-3.415 1.715z"></path>
                                <path fill="#dbae1a" d="M141.285 17.54l6.65.214s19.96 5.14 8.775 28.245c-1.775 3.66-1.625 7.965-1.725 12l-.025 1.05h-17.54l-.92-3.775a31.136 31.136 0 00-5.615-11.525c-3.385-4.45-5.785-13.285 10.4-26.21z"></path>
                                <path fill="#F4A28C" d="M138.131 7.724c.057 1.476.313 2.938.76 4.345a1.332 1.332 0 001.735.755 2.959 2.959 0 002-2.5l.5-2.4a2.391 2.391 0 00-1.355-2.4c-1.61-.87-3.77.585-3.64 2.2z"></path>
                                <path fill="#F4A28C" d="M143.046 8.375l2.42 8.36-4.7 1.005.125-6.49 2.155-2.875z"></path><path fill="#CE8172" d="M140.805 12.67a3.176 3.176 0 001.425-1.11s.13 1.585-1.41 3.36l-.015-2.25z" opacity="0.31"></path>
                                <path fill="#FFD200" d="M137.501 3.83a2.547 2.547 0 00-.318 3.387c.248.334.573.603.948.783.618.31 1.278.529 1.96.65 2.855.55 1.445 13.125 7.465 11.355 6.02-1.77 4.085-4.38 1.355-6.72s-3.875-6.7-4.91-8.895c-.77-1.595-4.655-2.17-6.5-.56z"></path>
                                <path fill="#F4A28C" d="M152.68 64.846l.835 27.525-1.775.54-5.99-25.95 6.93-2.115z"></path>
                                <path fill="#dbae1a" d="M153.466 91.965s1.1 1.26 2.415 1.135 1.605 1.73-.53 1.64a12.128 12.128 0 01-1.975-.24 3.44 3.44 0 00-1.795.15.576.576 0 01-.615-.215c-.64-.68.765-2.385.765-2.385l1.735-.085z"></path>
                                <path fill="#F4A28C" d="M138.855 64.885l-6.345 26.8 1.625.885 11.08-24.22-6.36-3.465z"></path>
                                <path fill="#dbae1a" d="M132.641 91.3s-1.33 1-2.595.62c-1.265-.38-1.92 1.376.19 1.716.661.11 1.33.164 2 .16a3.503 3.503 0 011.725.5.577.577 0 00.645-.085c.765-.54-.27-2.5-.27-2.5l-1.695-.41z"></path>
                                <path fill="#000" d="M147.385 26.664s-2.33 9.16 1.46 15.395c3.79 6.235-3.095 15.12-3.095 15.12l9.28-.325s.565-8.53 2.72-15.845c2.155-7.315-10.365-14.345-10.365-14.345z" opacity="0.08"></path>
                                <path fill="#245B5B" d="M137.039 57.486l17.99-.63 3.24 29.914h-12.805l-.21-22.34-8.215-6.945z"></path>
                                <path fill="#245B5B" d="M137.039 57.484l-8.625 28.34 12.22.945 7.02-25.605-10.615-3.68z"></path>
                                <path fill="#F4A28C" d="M149.776 18.825a5.165 5.165 0 015.94 5.845c-.5 3.785-2.31 9.36-7.695 15.45-9.8 11.07-33.305 4.93-33.305 4.93s-4.78.62-5.415-1.94c-.635-2.56 5.7-1.24 5.7-1.24s11.5 2.435 20-5.255c6.885-6.245 7.81-16.615 14.775-17.79z"></path>
                                <path fill="#E6E6E6" d="M106.234 56a2.872 2.872 0 01-.905-3.314 5.307 5.307 0 001.7-3.875 5.712 5.712 0 00-5.705-5.471 5.71 5.71 0 00-5.705 5.47 5.32 5.32 0 001.7 3.876 2.856 2.856 0 01-.9 3.315H82.79v13.63a2.85 2.85 0 003.315.905 5.34 5.34 0 013.875-1.7 5.71 5.71 0 010 11.41 5.32 5.32 0 01-3.875-1.7 2.875 2.875 0 00-3.315.905v13.63h37.075V56h-13.63z"></path>
                                <path fill="#CCC" d="M95.42 74.55a5.575 5.575 0 01-5.42 5.7 5.319 5.319 0 01-3.874-1.7 2.875 2.875 0 00-3.315.905v13.63h-37.1V56h13.715a2.885 2.885 0 01.82 3.25 5.3 5.3 0 00-1.7 3.87 5.71 5.71 0 0011.41 0 5.3 5.3 0 00-1.7-3.87 2.865 2.865 0 01.82-3.25H82.79v13.63a2.85 2.85 0 003.315.905 5.34 5.34 0 013.875-1.7 5.58 5.58 0 015.44 5.715z"></path>
                                <path fill="#dbae1a" d="M37.6 90.75s1.5 1.5 3.15.79 2.835.69 1.63 1.87c-1.205 1.18-5.78 1.235-5.78 1.235l-1.34-3.1 2.34-.795zM12.115 90.06s-.745 2.04.5 3.37.46 3.03-1.035 2.294c-1.495-.735-3.26-5.175-3.26-5.175l2.22-2.475 1.575 1.985z"></path>
                                <path fill="#245B5B" d="M8.056 51.72s-1.6 6.66 1.18 9.936c2.78 3.275 7.04 18.79 0 26.55L12 90.966s12.19-6.55 8.715-30.17l8.7-9.075H8.056z"></path>
                                <path fill="#245B5B" d="M29.434 51.72l8.94 39.246-4.47.69s-8.94-26.895-14.84-32.415l10.37-7.52z"></path>
                                <path fill="#68E1FD" d="M31.5 17.215s9.32 3.975 7.894 18.53l-9.105-.78 1.21-17.75z"></path>
                                <path fill="#fff" d="M31.5 17.215s9.32 3.975 7.894 18.53l-9.105-.78 1.21-17.75z" opacity="0.36"></path>
                                <path fill="#F4A28C" d="M21.814 4.75l-2.58 9.105 5.12 1.065-.175-7.055-2.365-3.115z"></path>
                                <path fill="#CE8172" d="M24.284 9.41a3.465 3.465 0 01-1.565-1.2s-.13 1.726 1.56 3.65l.005-2.45z" opacity="0.31"></path>
                                <path fill="#dbae1a" d="M19.235 13.855l3.035.645s13.9 1.5 14.465 9.34c.565 7.84-7.29 27.89-7.29 27.89H8.385S-8.5 11.785 19.235 13.855z"></path>
                                <path fill="#E6E6E6" d="M47.63 30.036a5.575 5.575 0 006.296 4.74 5.315 5.315 0 003.545-2.305 2.875 2.875 0 013.275.23L63 46.296 49.446 48.5a2.88 2.88 0 00-.285 3.34 5.316 5.316 0 012.31 3.545 5.71 5.71 0 01-11.26 1.85 5.316 5.316 0 011.05-4.1 2.88 2.88 0 00-1.335-3.07L26.39 52.29l-6-36.58 36.59-6 2.235 13.605a2.885 2.885 0 01-3.03 1.255 5.316 5.316 0 00-4.1-1.05 5.577 5.577 0 00-4.455 6.515z"></path><path fill="#F4A28C" d="M27.12 5s-.256 2.874-1.07 4.674a1.448 1.448 0 01-1.926.72 3.2 3.2 0 01-2.045-2.81l-.41-2.635a2.59 2.59 0 011.61-2.53c1.81-.855 4.085.85 3.84 2.58z"></path>
                                <path fill="#000" d="M13 17.5s7.205 4.185 5.53 13.65c-1.675 9.465-4.45 12.72 1.5 11.4 5.95-1.32 8.385-4.305 8.385-4.305s4.275 3.5 0 6.135-10.075 2.64-11 7.325h-9.03s-.73-2.05-1.7-4.635S13 17.5 13 17.5z" opacity="0.09"></path>
                                <path fill="#FFD200" d="M26.395 5a11.42 11.42 0 01-2.59-.666 2.405 2.405 0 01-.46 2.6 1.96 1.96 0 01-2.47.36l.695-3.65A2.946 2.946 0 0123.5 1.33c.433-.154.876-.281 1.325-.38 1.145-.24 2.765.22 3.4 1.24a2 2 0 01-.63 2.72c-.382.15-.8.181-1.2.09z"></path>
                                <path fill="#F4A28C" d="M23.665 6.91S23.84 5.815 23 5.75c-.84-.065-1.1 1.5 0 1.87l.665-.71zM1.9 34.246s-1.185 12.16 4.785 12.84c4.5.5 11.735-2.035 16.15-3.29 1.91-.545 2.835-.8 4.305-2.14 1.76-1.61 4.2-2.755 2.3-4.28-3.37-2.715-5.76 1.93-5.76 1.93a37.505 37.505 0 01-8.645 1.44 3.53 3.53 0 01-3.5-4.44l1.115-4.19S4.74 24.7 1.9 34.246zM26.866 6.82l.6 1.235a.465.465 0 01-.415.665h-1.125l.94-1.9z"></path><path fill="#68E1FD" d="M8.105 16.56C5 18.947.335 24.21.425 34.15l12.755.816S16.865 24.05 13 17.5a3.325 3.325 0 00-4.895-.94z"></path><path fill="#dbae1a" d="M8.105 16.56C5 18.947.335 24.21.425 34.15l12.755.816S16.865 24.05 13 17.5a3.325 3.325 0 00-4.895-.94z" opacity="0.36"></path><path fill="#F4A28C" d="M48.605 30.5a2.87 2.87 0 00-.715 1.75c-.044.344.021.694.185 1a1.5 1.5 0 00.445.44c.695.5 1.765.555 2.32-.085.291-.396.438-.88.415-1.37 0-.57.065-1.705-.395-2.15-.615-.585-1.775-.115-2.255.415z"></path>
                            </svg>
                        </div>
                    </div> 
                    {/* WHY KENEK END */}
                    {/* CUSTOMER FEEDBACK SECTION BEGIN */}
                    <div className='m-auto py-20 mx-2 px-10'>
                        <Slider {...feedback_setting}>
                            <div className='p-5 break-words '>
                                <div id='client_image'>
                                    <img src='./img/clients/client1.png' alt="" className='w-1/4 md:w-1/2 m-auto'/>
                                </div>
                                <div id='feedback_section' className='mt-2'>
                                    <p id='feedback' className='font text-2xl md:text-4xl font-extrabold text-center px-5 text-[#EEC12C]'>
                                        "I use Kenek's analytics to better understand my audience and what converts them."
                                    </p>
                                    <p id='name' className='text-center text-xl md:text-2xl  text-gray-600 px-5 dark:text-white'>Luke Kidgell</p>
                                    <p id='role' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Cimoneon</p>
                                </div>
                            </div>
                            <div className='p-5 break-words'>
                                <div id='client_image'>
                                    <img src='./img/clients/client2.png' alt="" className='w-1/4 md:w-1/2 m-auto'/>
                                </div>
                                <div id='feedback_section' className='mt-2'>
                                    <p id='feedback' className='font text-2xl md:text-4xl font-extrabold text-center px-5 text-[#EEC12C]'>
                                        "I use Kenek's analytics to better understand my audience and what converts them."
                                    </p>
                                    <p id='name' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Luke Kidgell</p>
                                    <p id='role' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Cimoneon</p>
                                </div>
                            </div>
                            <div className='p-5 break-words'>
                                <div id='client_image'>
                                    <img src='./img/clients/client3.png' alt="" className='w-1/4 md:w-1/2 m-auto'/>
                                </div>
                                <div id='feedback_section' className='mt-2'>
                                    <p id='feedback' className='font text-2xl md:text-4xl font-extrabold text-center px-5 text-[#EEC12C]'>
                                        "I use Kenek's analytics to better understand my audience and what converts them."
                                    </p>
                                    <p id='name' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Luke Kidgell</p>
                                    <p id='role' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Cimoneon</p>
                                </div>
                            </div>
                            <div className='p-5 break-words'>
                                <div id='client_image'>
                                    <img src='./img/clients/client1.png' alt="" className='w-1/4 md:w-1/2 m-auto'/>
                                </div>
                                <div id='feedback_section' className='mt-2'>
                                    <p id='feedback' className='font text-2xl md:text-4xl font-extrabold text-center px-5 text-[#EEC12C]'>
                                        "I use Kenek's analytics to better understand my audience and what converts them."
                                    </p>
                                    <p id='name' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Luke Kidgell</p>
                                    <p id='role' className='text-center text-xl md:text-2xl text-gray-600 px-5 dark:text-white'>Cimoneon</p>
                                </div>
                            </div>
                            <div className='p-5 break-words'>
                                <div id='client_image'>
                                    <img src='./img/clients/client2.png' alt="" className='w-1/4 md:w-1/2 m-auto'/>
                                </div>
                                <div id='feedback_section' className='mt-2'>
                                    <p id='feedback' className='font text-2xl md:text-4xl font-extrabold text-center px-10 text-[#EEC12C]'>
                                        "I use Kenek's analytics to better understand my audience and what converts them."
                                    </p>
                                    <p id='name' className='text-center text-xl md:text-2xl text-gray-600 dark:text-white px-10'>Luke Kidgell</p>
                                    <p id='role' className='text-center text-xl md:text-2xl text-gray-600 dark:text-white px-10'>Cimoneon</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* CUSTOMER FEEDBACK SECTION END */}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    isDark : state.darkMode.isDark
});

export default connect(mapStateToProps , {})(Landing);