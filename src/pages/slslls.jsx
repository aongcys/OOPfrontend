// import React, { useEffect } from 'react'
// import Link from 'next/link'
// import Sidebar from '@/components/sidebar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperclip, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
// import Navbar from '@/components/navbar'
// import { useState } from 'react'
// import Indexpage from '.';

// function Indexpage() {
//   const [small, setsmall] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   const sections = [
//     { id: 'overview', title: 'Overview' },
//     { id: 'description', title: 'Description' },
//     { id: 'evaluation', title: 'Evaluation' },
//     { id: 'timeline', title: 'Timeline' },
//     { id: 'prizes', title: 'Prizes' },
//     { id: 'code-requirements', title: 'Code Requirements' },
//   ];

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     sections.forEach(section => {
//       const element = document.getElementById(section.id);
//       if (element && element.offsetTop <= scrollY + 10) {
//         setActiveSection(section.id);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       <div className='flex flex-row '>
//         <div className='fixed top-0 left-0 h-full'>
//           <Sidebar small={small} setsmall={setsmall} />
//         </div>

//         <div className={`${small ? 'ml-[6%]' : 'ml-[18%]'}`}>
//           <Navbar small={small} />
//           <div className='flex flex-row pt-[3%] pl-[4%]'>
//             <div className='w-[58rem]'>
//               <p id='overview' className='text-[1.5rem] font-extrabold mb-[1.5%] w-[50rem]'>Overview</p>
//               <p className='text-[.95rem] w-[50rem]'>The goal of this competition is to create models that can be used to aid in the detection and classification of degenerative spine conditions using lumbar spine MR images. Competitors will develop models that simulate a radiologist's performance in diagnosing spine conditions.</p>
//               <img className="w-[50rem]" src="time.png" alt="" />
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//             <div className='flex flex-col ml-[2rem] gap-[1rem]'>
//               <div>
//                 <p className='font-extrabold'>Competition Host</p>
//                 <div className='flex flex-row items-center'>
//                   <p className=' text-[.95rem] w-[76%]'>Radiological Society of North America</p>
//                   <img className='w-[2.8rem] h-[2.8rem] rounded-full border-[3px] border-black' src="rsna.png" alt="" />
//                 </div>
//               </div>
//               <div>
//                 <p className='font-extrabold'>Prizes & Awards</p>
//                 <p className='text-[.95rem]'>$50,000</p>
//                 <p className='text-[.95rem]'>Awards Points & Medals</p>
//               </div>
//               <div>
//                 <p className='font-extrabold'>Participation</p>
//                 <p className='text-[.95rem]'>14,720 Entrants</p>
//                 <p className='text-[.95rem]'>2,483 Participants</p>
//                 <p className='text-[.95rem]'>1,915 Teams</p>
//                 <p className='text-[.95rem]'>23,800 Submissions</p>
//               </div>
//             </div>
//           </div>

//           <div className='flex flex-row pt-[1%] pl-[4%]'>
//             <div>
//               <div className='flex flex-row items-center mb-[2rem]'>
//                 <p id="description" className='text-[1.25rem] font-extrabold w-[45rem]'>Description</p>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//               </div>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>Low back pain is the leading cause of disability worldwide, according to the World Health Organization, affecting 619 million people in 2020. Most people experience low back pain at some point in their lives, with the frequency increasing with age.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>Magnetic resonance imaging (MRI) provides a detailed view of the lumbar spine vertebra, discs and nerves, enabling radiologists to assess the presence and severity of these conditions. Proper diagnosis and grading of these conditions help guide treatment and potential surgery to help alleviate back pain and improve overall health and quality of life for patients.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>RSNA has teamed with the American Society of Neuroradiology (ASNR) to conduct this competition exploring whether artificial intelligence can be used to aid in the detection and classification of degenerative spine conditions using lumbar spine MR images.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>The challenge will focus on the classification of five lumbar spine degenerative conditions: Left Neural Foraminal Narrowing, Right Neural Foraminal Narrowing, Left Subarticular Stenosis, Right Subarticular Stenosis, and Spinal Canal Stenosis. For each imaging study in the dataset, we’ve provided severity scores (Normal/Mild, Moderate, or Severe) for each of the five conditions across the intervertebral disc levels L1/L2, L2/L3, L3/L4, L4/L5, and L5/S1.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>To create the ground truth dataset, the RSNA challenge planning task force collected imaging data sourced from eight sites on five continents. This multi-institutional, expertly curated dataset promises to improve standardized classification of degenerative lumbar spine conditions and enable development of tools to automate accurate and rapid disease classification.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>Challenge winners will be recognized at an event during the RSNA 2024 annual meeting. For more information on the challenge, contact RSNA Informatics staff at informatics@rsna.org.</p>
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//             <div className='flex flex-col ml-[2rem] gap-[0.5rem]'>
//               <div>
//                 <p className='font-extrabold mb-[3%]'>Tags</p>
//                 <div className='flex flex-row items-center gap-2'>
//                   <button className='w-[9rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Computer Vision</button>
//                   <button className='w-[4.5rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Image</button>
//                 </div>
//               </div>
//               <button className='w-[11rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Binary Classification</button>
//               <button className='w-[9rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black mb-[2.5rem]'>Custom Metric</button>
//               <div>
//                 <div className='flex flex-row items-center'>
//                   <p className='font-bold'>Table of Contents</p>
//                 </div>
//                 <ul className="list-disc pl-5">
//                   {sections.map(section => (
//                     <li key={section.id} className={`${activeSection === section.id ? 'font-bold' : ''}`}>
//                       <Link href={`#${section.id}`} className="hover:text-blue-500">
//                         {section.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='flex flex-row pt-[1%] pl-[4%]'>
//             <div>
//               <div className='flex flex-row items-center mb-[1.5rem] ' id="evaluation">
//                 <p className='text-[1.25rem] font-extrabold w-[45rem]'>Evaluation</p>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//               </div>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>Submissions are evaluated using the average of sample weighted log losses and an any_severe_spinal prediction generated by the metric. The metric notebook can be found here.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>The sample weights are as follows:</p>
//               <div className='flex flex-row items-center'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 1 for normal/mild. </p>
//               </div>
//               <div className='flex flex-row items-center'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 2 for moderate. </p>
//               </div>
//               <div className='flex flex-row items-center'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 4 for severe. </p>
//               </div>
//               <p className='text-[.95rem] w-[48rem] mt-[2%] mb-[2%]'>For each row ID in the test set, you must predict a probability for each of the different severity levels. The file should contain a header and have the following format:</p>
//               <img className='w-[67%]' src="code.png" alt="" />
//               <p className='text-[.95rem] w-[48rem] mt-[2%] mb-[2%]'>In rare cases the lowest vertebrae aren't visible in the imagery. You still need to make predictions (nulls will cause errors), but those rows will not be scored.</p>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>For this competition, the any_severe_scalar has been set to 1.0.</p>
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//           </div>
//           <div className='flex flex-row pt-[1%] pl-[4%]'>
//             <div>
//               <div className='flex flex-row items-center mb-[1.5rem]'>
//                 <p className='text-[1.25rem] font-extrabold w-[45rem]'>Timeline</p>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//               </div>
//               <div className='flex flex-row items-center mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem] font-extrabold pr-[3px]'> May 16, 2024 </p>
//                 <p className='text-[.9rem]'> - Start Date.</p>
//               </div>
//               <div className='flex flex-row items-center mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem] font-extrabold pr-[3px]'> October 1, 2024 </p>
//                 <p className='text-[.9rem] w-[40rem]'> - Entry Deadline. You must accept the competition rules before this date in order to compete.</p>
//               </div>
//               <div className='flex flex-row items-center mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem] font-extrabold pr-[3px]'> October 1, 2024 </p>
//                 <p className='text-[.9rem] w-[40rem]'> - Team Merger Deadline. This is the last day participants may join or merge teams.</p>
//               </div>
//               <div className='flex flex-row items-center mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem] font-extrabold pr-[3px]'> October 8, 2024  </p>
//                 <p className='text-[.9rem]'> - Final Submission Deadline.</p>
//               </div>
//               <div className='flex flex-row  mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%", marginTop: ".8%" }} />
//                 <p className='text-[.9rem] font-extrabold pr-[3px]'> October 28, 2024 </p>
//                 <p className='text-[.9rem] w-[40rem]'> - Winners’ Requirements Deadline. This is the deadline for winners to submit to the host/Kaggle their training code, video, method description.</p>
//               </div>
//               <p className='text-[.95rem] w-[48rem] mb-[2%]'>All deadlines are at 11:59 PM UTC on the corresponding day unless otherwise noted. The competition organizers reserve the right to update the contest timeline if they deem it necessary.</p>
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//           </div>
//           <div className='flex flex-row pt-[1%] pl-[4%]'>
//             <div>
//               <div className='flex flex-row items-center mb-[1.5rem]'>
//                 <p className='text-[1.25rem] font-extrabold w-[45rem]'>Prizes</p>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 1st Place - $ 12,000 </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 2nd Place - $ 10,000 </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 3rd Place - $ 8,000 </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 4th Place - $ 5,000 </p>
//               </div>
//               <div className='flex flex-row items-center mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.9rem]'> 5th - 9th Places - $ 3,000 each </p>
//               </div>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> Because this competition is being hosted in coordination with the Radiological Society of North America (RSNA®) Annual Meeting, winners will be invited and strongly encouraged to attend the conference with waived fees, contingent on review of solution and fulfillment of winners' obligations.</p>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> Note that, per the competition rules, in addition to the standard Kaggle Winners' Obligations (open-source licensing requirements, solution packaging/delivery, presentation to host), the host team also asks that you:</p>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> (i) create a short video presenting your approach and solution, and</p>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> (ii) publish a link to your open sourced code on the competition forum</p>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> (iii) (strongly suggested) make some version of your model publicly available for more hands-on testing purposes only. As an example of a hosted algorithm, please see http://demos.md.ai/#/bone-age.</p>
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//           </div>
//           <div className='flex flex-row pt-[1%] pl-[4%]'>
//             <div>
//               <div className='flex flex-row items-center mb-[1.5rem]'>
//                 <p className='text-[1.25rem] font-extrabold w-[45rem]'>Code Requirements</p>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//                 <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
//               </div>
//               <p className='text-[.95rem] w-[35rem] mb-[1%] font-extrabold'> This is a Code Competition</p>
//               <div className='flex flex-row items-center'>
//                 <p className='text-[.95rem] w-[44rem]'>Submissions to this competition must be made through Notebooks. In order for the "Submit" button to be active after a commit, the following conditions must be met:</p>
//                 <img className='w-[9%]' src="hello.png" alt="" />
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.95rem]'> CPU Notebook &le; 9 hours run-time </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.95rem]'> CPU Notebook &le; 9 hours run-time </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.95rem]'> Internet access disabled </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.95rem]'> Freely & publicly available external data is allowed, including pre-trained models </p>
//               </div>
//               <div className='flex flex-row items-center mb-[1%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
//                 <p className='text-[.95rem]'> Submission file must be named submission.csv </p>
//               </div>
//               <div className='flex flex-row mb-[2%]'>
//                 <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%", marginTop: ".8%" }} />
//                 <p className='text-[.95rem] w-[47rem]'> Submission runtimes have been slightly obfuscated. If you repeat the exact same submission you will see up to 15 minutes of variance in the time before you receive your score. </p>
//               </div>
//               <p className='text-[.95rem] w-[49rem] mb-[2%]'> Please see the Code Competition FAQ for more information on how to submit. And review the code debugging doc if you are encountering submission errors.</p>
//               <hr className='border-[0.5px] border-gray-300' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Indexpage;


import React from 'react'
import Sidebar from '@/components/sidebar'
import Navbardata from '@/components/navbardata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

function Datapage() {
  const [small, setsmall] = useState(false);

  return (
    <div>
      <div className='flex flex-row'>
        <Sidebar small={small} setsmall={setsmall} />
        <div>
          <Navbardata small={small} />
          <div className={small ? 'ml-[10%]' : 'ml-[4%]'}>
            <div className='flex flex-row mt-[3.5%]'>
              <div className='w-[80%]'>
                <p className='font-extrabold text-[1.5rem] mb-[4.5%]'>Dataset Description</p>
                <p className='text-[.9rem] mb-[2%]'>The goal of this competition is to identify medical conditions affecting the lumbar spine in MRI scans.</p>
                <p className='text-[.9rem] mb-[2%]'>This competition uses a hidden test. When your submitted notebook is scored, the actual test data (including a full length sample submission) will be made available to your notebook.</p>
                <p className='font-bold text-[1.25rem] mb-[1.25%]'>Files</p>
                <div className='flex flex-row mb-[2%]'>
                  <p className='text-[.9rem] font-bold'>train.csv </p>
                  <p className='text-[.9rem] ml-[0.3%]'>Labels for the train set.</p>
                </div>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>study_id - The study ID. Each study may include multiple series of images.</p>
                </div>
                <div className='flex flex-row w-[80%] mb-[2%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.6%', height: '0%', marginRight: "1%",marginTop:"1%" }} />
                  <p className='text-[.95rem]'>[condition]_[level] - The target labels, such as spinal_canal_stenosis_l1_l2, with the severity levels of Normal/Mild, Moderate, or Severe. Some entries have incomplete labels.</p>
                </div>
                <p className='text-[.9rem] font-bold'>train_label_coordinates.csv</p>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Datapage

