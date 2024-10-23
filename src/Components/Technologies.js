import React from 'react'
import { subTechno, technologies } from '../utilits/constants'

export default function Technologies() {
    return (
        <div id='technologies' className='technologies md:mt-[170px] mt-20'>
            <div className="container md:px-16 px-4 mx-auto">
                <h3 className='md:text-h3 text-responsH3 text-white md:mb-20 mb-10'>Technologies</h3>
                {technologies?.map((tech) => {
                    return (
                        <div className="box md:even:my-14 even:my-6 first-of-type:mt-0" key={tech.id}>
                            <div className="top flex justify-between items-end text-white md:px-8">
                                <h3 className="md:text-h3 text-responsH3 font-semibold">{tech.title}</h3>
                                <p className='text-[24px] leading-[36px] font-semibold hidden md:inline-block'>{tech.subtitle}</p>
                            </div>
                            <div className="bottom bg-[#162950] w-full md:h-8 h-4 rounded-full">
                                <div className={`rounded-full h-full bg-gradient-to-r from-[#7000FF] to-[#00FFE0]`}
                                    style={{ width: `${tech.width}` }}>
                                </div>
                            </div>
                            <p className='text-sm font-semibold text-white md:hidden mt-[2px]'>{tech.subtitle}</p>
                        </div>
                    )
                })}
                <h3 className="md:text-h3 text-responsH3 text-white md:my-20 my-10">Additional technologies and skills</h3>
                <ul className='md:px-20 pl-4 flex flex-wrap md:gap-y-8 md:gap-x-0 gap-y-4 gap-x-8'>
                    {subTechno.map((tech) =>
                        <li key={tech.title}
                            className='md:w-1/4 md:text-h3 text-responsH3 font-semibold text-white list-disc'>{tech.title}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}