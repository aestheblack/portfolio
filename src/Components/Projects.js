import React from 'react'
import './Projects.css'
import { projects } from '../utilits/constants'

export default function Projects() {
    return (
        <div id='projects' className='projects md:mt-[170px] mt-20'>
            <div className="container md:px-16 px-4 mx-auto">
                <div className="relative">
                    <h3 className='md:text-h3 text-responsH3 text-white mb-[45px]'>Projects</h3>
                    {projects.map((project) => {
                        return (
                            <div className="projectBox flex flex-wrap items-center gap-x-24 gap-y-10 even:my-14 md:first-of-type:mt-0
                            md:odd:flex-row-reverse md:odd:text-end md:even:my-[130px] md:flex-nowrap"
                                key={project.id}
                            >
                                <div className="left md:w-7/12 w-full rounded-t-2xl overflow-hidden">
                                    <div className="img">
                                        <img src={project.image} alt={project.linkName} />
                                    </div>
                                </div>
                                <div className="right md:w-5/12 w-full">
                                    <h3 className="md:text-h3 text-responsH3 text-white">{project.linkName}</h3>
                                    <p className='md:text-[18px] md:mb-[65px] text-base text-white mt-[15px] mb-7'>{project.description}</p>
                                    <a href={project.slug} target='_blank' rel='noreferrer'
                                        className={`text-green justify-between md:inline-flex md:text-[24px] flex items-center font-medium text-xl cursor-pointer 
                                            ${project.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`
                                        }
                                    >
                                        View project
                                        <span className={`${project.id % 2 === 0 ? 'md:rotate-180 md:mr-[30px]' : 'md:ml-[30px]'}`}>{project.svg}</span>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                    <div className="rectangle"></div>
                </div>
            </div>
        </div>
    )
}