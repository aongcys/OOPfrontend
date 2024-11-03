import React from 'react'
import { IoMenuSharp } from "react-icons/io5"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faCompass, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faTrophy, faTable, faSitemap, faCode, faGraduationCap, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ small, setsmall }) {
	const clicksmall = () => {
		setsmall(!small);
	}

	return (
		<div className=''>
			<div className='flex flex-row'>
				<div className='flex flex-col justify-center'>
					<div className={`border-r-[1px] border-slate-300 h-screen transition-all duration-300 ease-in-out ${small ? 'w-[4.3rem]' : 'w-[257px]'}`}>
						<div className='flex'>
							<div className='flex items-center'>
								<button onClick={clicksmall} className="mt-2 ml-3 btn-circle hover:bg-gray-200 p-2 flex justify-center items-center">
									<IoMenuSharp className="h-[80%] w-[80%]" />
								</button>
								{!small && (
									<div>
										<img className='w-[52%] mt-[10px]' src="image.png" alt="" />
									</div>
								)}
							</div>
						</div>
						<div>
							<div className='flex items-center mt-[0.7rem]'>
								{small && (
									<div>
										<button className="mt-2 ml-3 btn-circle stroke-2 stroke-black bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:drop-shadow-md  p-2 flex justify-center items-center">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="85" height="85" color="#51c5f9" fill="none">
												<path d="M12 4V20" stroke="currentColor" stroke-width="2.75" stroke-linecap="sharp" stroke-linejoin="sharp" />
												<path d="M4 12H20" stroke="currentColor" stroke-width="2.75" stroke-linecap="sharp" stroke-linejoin="sharp" />
											</svg>
										</button>
									</div>
								)}
								{!small && (
									<div>
										<button className="mt-2 ml-2 btn-circle w-[8.5rem] bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:drop-shadow-md p-2 flex flex-row items-center">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#51c5f9" fill="none">
												<path d="M12 4V20" stroke="currentColor" stroke-width="2.75" stroke-linecap="sharp" stroke-linejoin="sharp" />
												<path d="M4 12H20" stroke="currentColor" stroke-width="2.75" stroke-linecap="sharp" stroke-linejoin="sharp" />
											</svg>
											<p className='ml-[10px]'>Create</p>
										</button>
									</div>
								)}
							</div>
						</div>
						<div>
							<div className='flex items-center mt-[0.7rem]'>
								{small && (
									<div>
										<ul className="bg-white w-[100%] h-[10rem] mt-[3px]">
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faCompass} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faTrophy} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faTable} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faSitemap} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faCode} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faMessage} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faGraduationCap} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
											<li><a href='' className='flex flex-row justify-center items-center mt-[18rem] hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faClone} style={{ color: "#606060", }} className='w-[70%] h-[1.3rem] hover:bg-gray-200' /></a></li>
										</ul>
									</div>
								)}
								{!small && (
									<div>
										<div>
											<ul className="bg-white w-[100%] h-[10rem] mt-[3px]">
												<li className=''><a href='' className='flex flex-row items-center hover:bg-gray-100 h-[2.75rem]'><FontAwesomeIcon icon={faCompass} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Home</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faTrophy} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Competitions</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faTable} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Datasets</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faSitemap} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Models</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faCode} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Code</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faMessage} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Discussions</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faGraduationCap} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />Learn</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100  h-[2.75rem]'><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />More</a></li>
												<li><a href='' className='flex flex-row items-center hover:bg-gray-100 mt-[18rem] h-[2.75rem]'><FontAwesomeIcon icon={faClone} style={{ color: "#606060", }} className='w-[25%] h-[1.3rem] hover:bg-gray-200' />View Active Events</a></li>
											</ul>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
