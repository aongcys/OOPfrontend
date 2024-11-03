import React from 'react'
import Link from 'next/link'
import Sidebar from '@/components/sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/navbar'
import { useState } from 'react'

function Indexpage() {
  const [small, setsmall] = useState(false);

  return (
    <div>
      <div className='flex flex-row '>
        <div className='fixed top-0 left-0 h-full'>
          <Sidebar small={small} setsmall={setsmall} />
        </div>

        <div className={`${small ? 'ml-[6%]' : 'ml-[18%]'}`}>
          <Navbar small={small} />
          <div className='flex flex-row pt-[3%] pl-[4%]'>
            <div className='w-[56rem]'>
              <p className='text-[1.5rem] font-extrabold mb-[1.5%] w-[50rem]'>Overview</p>
              <p className='text-[.95rem] w-[50rem]'>The goal of this competition is to create models that can be used to aid in the detection and classification of degenerative spine conditions using lumbar spine MR images. Competitors will develop models that simulate a radiologist's performance in diagnosing spine conditions.</p>
              <img className="w-[50rem]" src="time.png" alt="" />
              <hr className='border-[0.5px] border-gray-300' />
            </div>
            <div className='flex flex-col ml-[1.5rem] gap-[1rem]'>
              <div>
                <p className='font-extrabold'>Competition Host</p>
                <div className='flex flex-row items-center'>
                  <p className=' text-[.95rem] w-[70%] mr-[8px]'>Radiological Society of North America</p>
                  <img className='w-[2.8rem] h-[2.8rem] rounded-full border-[3px] border-black' src="rsna.png" alt="" />
                </div>
              </div>
              <div>
                <p className='font-extrabold'>Prizes & Awards</p>
                <p className='text-[.95rem]'>$50,000</p>
                <p className='text-[.95rem]'>Awards Points & Medals</p>
              </div>
              <div>
                <p className='font-extrabold'>Participation</p>
                <p className='text-[.95rem]'>14,720 Entrants</p>
                <p className='text-[.95rem]'>2,483 Participants</p>
                <p className='text-[.95rem]'>1,915 Teams</p>
                <p className='text-[.95rem]'>23,800 Submissions</p>
              </div>
            </div>
          </div>

          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div className='w-[74%]'>
              <div className='flex flex-row items-center mb-[2rem]'>
                <p className='text-[1.25rem] font-extrabold w-[43rem]'>Description</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>Low back pain is the leading cause of disability worldwide, according to the World Health Organization, affecting 619 million people in 2020. Most people experience low back pain at some point in their lives, with the frequency increasing with age.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>Magnetic resonance imaging (MRI) provides a detailed view of the lumbar spine vertebra, discs and nerves, enabling radiologists to assess the presence and severity of these conditions. Proper diagnosis and grading of these conditions help guide treatment and potential surgery to help alleviate back pain and improve overall health and quality of life for patients.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>RSNA has teamed with the American Society of Neuroradiology (ASNR) to conduct this competition exploring whether artificial intelligence can be used to aid in the detection and classification of degenerative spine conditions using lumbar spine MR images.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>The challenge will focus on the classification of five lumbar spine degenerative conditions: Left Neural Foraminal Narrowing, Right Neural Foraminal Narrowing, Left Subarticular Stenosis, Right Subarticular Stenosis, and Spinal Canal Stenosis. For each imaging study in the dataset, we’ve provided severity scores (Normal/Mild, Moderate, or Severe) for each of the five conditions across the intervertebral disc levels L1/L2, L2/L3, L3/L4, L4/L5, and L5/S1.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>To create the ground truth dataset, the RSNA challenge planning task force collected imaging data sourced from eight sites on five continents. This multi-institutional, expertly curated dataset promises to improve standardized classification of degenerative lumbar spine conditions and enable development of tools to automate accurate and rapid disease classification.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>Challenge winners will be recognized at an event during the RSNA 2024 annual meeting. For more information on the challenge, contact RSNA Informatics staff at informatics@rsna.org.</p>
              <hr className='border-[0.5px] w-[54rem] border-gray-300' />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
              <div>
                <p className='font-extrabold mb-[3%]'>Tags</p>
                <div className='flex flex-row items-center gap-2'>
                  <button className='w-[9rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Computer Vision</button>
                  <button className='w-[4.5rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Image</button>
                </div>
              </div>
              <button className='w-[11rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black'>Binary Classification</button>
              <button className='w-[9rem] h-[2rem] border border-zinc-300 rounded-full hover:border-black mb-[2.5rem]'>Custom Metric</button>
              <div>
                <div className='flex flex-row items-center'>
                  <p className='font-bold'>Table of Contents</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1.5rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Evaluation</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>Submissions are evaluated using the average of sample weighted log losses and an any_severe_spinal prediction generated by the metric. The metric notebook can be found here.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>The sample weights are as follows:</p>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 1 for normal/mild. </p>
              </div>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 2 for moderate. </p>
              </div>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 4 for severe. </p>
              </div>
              <p className='text-[.95rem] w-[48rem] mt-[2%] mb-[2%]'>For each row ID in the test set, you must predict a probability for each of the different severity levels. The file should contain a header and have the following format:</p>
              <img className='w-[67%]' src="code.png" alt="" />
              <p className='text-[.95rem] w-[48rem] mt-[2%] mb-[2%]'>In rare cases the lowest vertebrae aren't visible in the imagery. You still need to make predictions (nulls will cause errors), but those rows will not be scored.</p>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>For this competition, the any_severe_scalar has been set to 1.0.</p>
              <hr className='border-[0.5px] w-[58rem] border-gray-300' />
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1.5rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Timeline</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem] font-extrabold pr-[3px]'> May 16, 2024 </p>
                <p className='text-[.9rem]'> - Start Date.</p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem] font-extrabold pr-[3px]'> October 1, 2024 </p>
                <p className='text-[.9rem] w-[40rem]'> - Entry Deadline. You must accept the competition rules before this date in order to compete.</p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem] font-extrabold pr-[3px]'> October 1, 2024 </p>
                <p className='text-[.9rem] w-[40rem]'> - Team Merger Deadline. This is the last day participants may join or merge teams.</p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem] font-extrabold pr-[3px]'> October 8, 2024  </p>
                <p className='text-[.9rem]'> - Final Submission Deadline.</p>
              </div>
              <div className='flex flex-row  mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%", marginTop: ".8%" }} />
                <p className='text-[.9rem] font-extrabold pr-[3px]'> October 28, 2024 </p>
                <p className='text-[.9rem] w-[40rem]'> - Winners’ Requirements Deadline. This is the deadline for winners to submit to the host/Kaggle their training code, video, method description.</p>
              </div>
              <p className='text-[.95rem] w-[48rem] mb-[2%]'>All deadlines are at 11:59 PM UTC on the corresponding day unless otherwise noted. The competition organizers reserve the right to update the contest timeline if they deem it necessary.</p>
              <hr className='border-[0.5px] w-[58rem] border-gray-300' />
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1.5rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Prizes</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 1st Place - $ 12,000 </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 2nd Place - $ 10,000 </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 3rd Place - $ 8,000 </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 4th Place - $ 5,000 </p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> 5th - 9th Places - $ 3,000 each </p>
              </div>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> Because this competition is being hosted in coordination with the Radiological Society of North America (RSNA®) Annual Meeting, winners will be invited and strongly encouraged to attend the conference with waived fees, contingent on review of solution and fulfillment of winners' obligations.</p>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> Note that, per the competition rules, in addition to the standard Kaggle Winners' Obligations (open-source licensing requirements, solution packaging/delivery, presentation to host), the host team also asks that you:</p>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> (i) create a short video presenting your approach and solution, and</p>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> (ii) publish a link to your open sourced code on the competition forum</p>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> (iii) (strongly suggested) make some version of your model publicly available for more hands-on testing purposes only. As an example of a hosted algorithm, please see http://demos.md.ai/#/bone-age.</p>
              <hr className='border-[0.5px] w-[58rem] border-gray-300' />
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1.5rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Code Requirements</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <p className='text-[.95rem] w-[35rem] mb-[1%] font-extrabold'> This is a Code Competition</p>
              <div className='flex flex-row items-center'>
                <p className='text-[.95rem] w-[44rem]'>Submissions to this competition must be made through Notebooks. In order for the "Submit" button to be active after a commit, the following conditions must be met:</p>
                <img className='w-[9%]' src="hello.png" alt="" />
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.95rem]'> CPU Notebook &le; 9 hours run-time </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.95rem]'> CPU Notebook &le; 9 hours run-time </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.95rem]'> Internet access disabled </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.95rem]'> Freely & publicly available external data is allowed, including pre-trained models </p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.95rem]'> Submission file must be named submission.csv </p>
              </div>
              <div className='flex flex-row mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%", marginTop: ".8%" }} />
                <p className='text-[.95rem] w-[47rem]'> Submission runtimes have been slightly obfuscated. If you repeat the exact same submission you will see up to 15 minutes of variance in the time before you receive your score. </p>
              </div>
              <p className='text-[.95rem] w-[49rem] mb-[2%]'> Please see the Code Competition FAQ for more information on how to submit. And review the code debugging doc if you are encountering submission errors.</p>
              <hr className='border-[0.5px] w-[58rem] border-gray-300' />
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1.5rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Acknowledgements</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <p className='text-[.9rem] w-[35rem] font-extrabold'> Challenge Organizing Team</p>
              <p className='text-[.9rem] w-[35rem]'>- Tyler Richards, MD - University of Utah</p>
              <p className='text-[.9rem] w-[35rem]'>- Jason Talbott, MD, PhD - University of California San Francisco</p>
              <p className='text-[.9rem] w-[35rem]'>- Adam Flanders, MD - Thomas Jefferson University</p>
              <p className='text-[.9rem] w-[35rem]'>- Robyn Ball, PhD - The Jackson Laboratory</p>
              <p className='text-[.9rem] w-[35rem]'>- Errol Colak, MD - Unity Health Toronto</p>
              <p className='text-[.9rem] w-[35rem]'>- Felipe C. Kitamura, MD, PhD - Universidade Federal de São Paulo</p>
              <p className='text-[.9rem] w-[35rem]'>- Luciano M. Prevedello, MD, MPH - Ohio State University</p>
              <p className='text-[.9rem] w-[35rem] mb-[2%]'>- John Mongan, MD, PhD - University of California San Francisco</p>
              <p className='text-[.9rem] w-[35rem] font-extrabold'> Data Contributors</p>
              <p className='text-[.9rem] w-[47rem] mb-[2%]'>Thanks to the following institutions, which contributed de-identified MR images that were assembled to create the challenge dataset:</p>
              <div className='flex flex-row items-center  mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Chiang Mai University, Thailand</p>
              </div>
              <div className='flex flex-row items-center  mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Dasa, Brazil</p>
              </div>
              <div className='flex flex-row items-center  mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]]'> Gold Coast University Hospital, Southport, Queensland, Australia</p>
              </div>
              <div className='flex flex-row items-center  mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Koç University, Istanbul, Turkey</p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> University of Sarajevo, Bosnia and Herzegovina</p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]]'> Thomas Jefferson University Hospital, Philadelphia, PA, USA</p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Universidade Federal de São Paulo, Brazil</p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> University of California San Francisco, USA</p>
              </div>
              <div className='flex flex-row items-center mb-[4%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> University of Utah, Salt Lake City, Utah, USA</p>
              </div>
              <p className='text-[.9rem] w-[35rem] mb-[1%] ml-[2%]'>Additional thanks to the following contributing sites:</p>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> University of Utah, Salt Lake City, Utah, USA</p>
              </div>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Tallaght University Hospital, Dublin, Ireland</p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> University Hospitals Cleveland Medical Center, Cleveland, OH, USA</p>
              </div>
              <img className="w-[63.5%] h-[27rem] ml-[1%] mb-[4%]" src="map.png" alt="" />
              <p className='text-[.9rem] w-[35rem] font-extrabold mb-[3%]'>Data Curators</p>
              <div className='flex flex-row items-center mb-[1%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Maryam Vazirabad – RSNA</p>
              </div>
              <div className='flex flex-row items-center mb-[2%]'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                <p className='text-[.9rem]'> Hui-Ming Lin, HBSc – Unity Health Toronto</p>
              </div>
              <p className='text-[.9rem] w-[35rem] font-extrabold mb-[2%]'>Data Annotators</p>
              <p className='text-[.9rem] w-[50rem] mb-[3%]'>The challenge organizers wish to thank the American Society of Neuroradiology for helping to members to label the dataset used in the challenge. ASNR is the world’s leading organization for the future of neuroradiology representing more than 5,300 radiologists, researchers, interventionalists, and imaging scientists.</p>
              <img className='w-[15%] mb-[3%]' src="wowlogo.png" alt="" />
              <p className='text-[.9rem] mb-[2%]'>More than 50 volunteers dedicated their time to label exams for the challenge dataset.</p>
              <p className='text-[.9rem] mb-[.25%]'>Arsany Hakim, MD - Bern University Hospital, Inselspital</p>
              <p className='text-[.9rem] mb-[.25%]'>Lai Peng Chan, FRCR, MBBS - Singapore General Hospital</p>
              <p className='text-[.9rem] mb-[.25%]'>Vinson Louis Uytana, MD - Cedars-Sinai Medical Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Anthony Kam, MD, PhD - Loyola University Medical Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Venkata Naga Srinivas Dola, DM, FRCR - Children’s National Hospital, George Washington University</p>
              <p className='text-[.9rem] mb-[.25%]'>Girish Bathla, MD, FRCR - Associate Professor, Mayo Clinic, Rochester</p>
              <p className='text-[.9rem] mb-[.25%]'>Yonghan Ting, FRCR - National University Hospital, Singapore</p>
              <p className='text-[.9rem] mb-[.25%]'>Daniel Murphy, MD - University of Utah</p>
              <p className='text-[.9rem] mb-[.25%]'>David Vu, MD - Scripps Clinic Medical Group</p>
              <p className='text-[.9rem] mb-[.25%]'>Gagandeep Choudhary, MD, MBBS - Oregon Health and Science University</p>
              <p className='text-[.9rem] mb-[.25%]'>Tze Chwan Lim, FRCR, MBBS - Woodlands Health</p>
              <p className='text-[.9rem] mb-[.25%]'>Luciano Farage, MD - UNIEURO</p>
              <p className='text-[.9rem] mb-[.25%]'>Christie Lincoln, MD - MD Anderson Cancer Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Kian Ming Chew, MBChB - Woodlands Health Singapore</p>
              <p className='text-[.9rem] mb-[.25%]'>Katie Bailey, MD - University of South Florida</p>
              <p className='text-[.9rem] mb-[.25%]'>Eduardo Portela de Oliveira, MD - The Ottawa Hospital, University of Ottawa</p>
              <p className='text-[.9rem] mb-[.25%]'>Fanny Moron, MD - Baylor College of Medicine</p>
              <p className='text-[.9rem] mb-[.25%]'>Achint Kumar Singh , MD - UT Health San Antonio</p>
              <p className='text-[.9rem] mb-[.25%]'>Nico Sollmann, MD, PhD - University Hospital Ulm</p>
              <p className='text-[.9rem] mb-[.25%]'>Kim Seifert, MD, MS - Stanford</p>
              <p className='text-[.9rem] mb-[.25%]'>Eric D. Schwartz, MD - Director of Neuroradiology, St. Elizabeth's Medical Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Mariana Sanchez Montaño, MD - Rh Radiologos</p>
              <p className='text-[.9rem] mb-[.25%]'>Charlotte Yuk-Yan Chung, MD, PhD - NYU Langone Health</p>
              <p className='text-[.9rem] mb-[.25%]'>Lubdha Shah , MD - University of Utah</p>
              <p className='text-[.9rem] mb-[.25%]'>Ling Ling Chan, FRCR, MBBS - Singapore General Hospital</p>
              <p className='text-[.9rem] mb-[.25%]'>Scott R. Andersen, MD - Colorado Kaiser</p>
              <p className='text-[.9rem] mb-[.25%]'>Troy Hutchins, MD - University of Utah</p>
              <p className='text-[.9rem] mb-[.25%]'>Rita Nassanga, Mmed Radiology, MBChB - Makerere University, Kampala Uganda</p>
              <p className='text-[.9rem] mb-[.25%]'>Rukya Ali Masum - Ohio State Wexner Medical Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Karl Soderlund, MD - Naval Medical Center Portsmouth</p>
              <p className='text-[.9rem] mb-[.25%]'>Le Roy Chong, MBBS, FRCR - Changi General Hospital</p>
              <p className='text-[.9rem] mb-[.25%]'>Jonathan D. Clemente, MD - Carolinas Medical Center</p>
              <p className='text-[.9rem] mb-[.25%]'>Ali Haikal Hussain, FRCR, MBChB - University of Rochester</p>
              <p className='text-[.9rem] mb-[.25%]'>Keynes Low - Woodlands Health</p>
              <p className='text-[.9rem] mb-[.25%]'>Mohiuddin Hadi, MD - University of Louisville</p>
              <p className='text-[.9rem] mb-[.25%]'>Michael Hollander, MD - Danbury Radiology Associates</p>
              <p className='text-[.9rem] mb-[.25%]'>Nurul Hafidzah Binti Rahim, MD - Hospital Putrajaya, Malaysia</p>
              <p className='text-[.9rem] mb-[.25%]'>Angela Guarnizo Capera, MD - Fundación Santa Fe de Bogotá</p>
              <p className='text-[.9rem] mb-[.25%]'>Lex A. Mitchell, MD - Hawaii Permanente Medical Group</p>
              <p className='text-[.9rem] mb-[.25%]'>Ellen Hoeffner, MD - University of Michigan</p>
              <p className='text-[.9rem] mb-[.25%]'>John L. Go, MD - University of Southern Califotnia</p>
              <p className='text-[.9rem] mb-[.25%]'>Facundo Nahuel Diaz, MD - Atrys Health / Hospital Italiano de Buenos Aires</p>
              <p className='text-[.9rem] mb-[.25%]'>Jacob Ormsby, MD, MBA - University of New Mexico</p>
              <p className='text-[.9rem] mb-[.25%]'>Jaya Nath, MD - Northport VA Medical center</p>
              <p className='text-[.9rem] mb-[.25%]'>Nathaniel von Fischer, MD - Kaiser Permanente South San Francisco</p>
              <p className='text-[.9rem] mb-[.25%]'>Vahe M. Zohrabian, MD - Northwell Health, North Shore University Hospitals</p>
              <p className='text-[.9rem] mb-[.25%]'>Mary Niroshinee Muthukumarasamy, MBBS, MD - Ministry of Health, Sri Lanka</p>
              <p className='text-[.9rem] mb-[.25%]'>Sucari Vlok, MBChB, MMed - Tygerberg Hospital, University of Stellenbosch</p>
              <p className='text-[.9rem] mb-[.25%]'>Nafisa Paruk, FCRad diagnostics, 2 SA, MBChB - Dr. Oosthuizen and Partners</p>
              <p className='text-[.9rem] mb-[.25%]'>Shayan Sirat Maheen Anwar, MBBS, FCPS - Aga Khan University Hospital</p>
              <p className='text-[.9rem] mb-[.25%]'>Giuseppe Cruciata, MD - Stony Brook University Hospital</p>
              <p className='text-[.9rem] mb-[.25%]'>Omar Islam, MD, FRCPC - Queen's University</p>
              <p className='text-[.9rem] mb-[.25%]'>Loizos Siakallis, MD - University College London</p>
              <p className='text-[.9rem] mb-[2%]'>Ichiro Ikuta, MD, MMSc - Mayo Clinic Arizona</p>
              <img className='w-[15%] mb-[2%]' src="md.png" alt="" />
              <p className='text-[.9rem] mb-[2%]'>Special thanks to MD.ai for providing tooling for the data annotation process.</p>
              <hr className='border-[0.5px] w-[58rem] border-gray-300' />
            </div>
          </div>
          <div className='flex flex-row pt-[1%] pl-[4%]'>
            <div>
              <div className='flex flex-row items-center mb-[1rem]'>
                <p className='text-[1.25rem] font-extrabold w-[45rem]'>Citation</p>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem]"><FontAwesomeIcon icon={faPaperclip} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
                <button className="rounded-full bg-inherit hover:bg-gray-200 h-[3rem] w-[3rem] ml-[1rem]"><FontAwesomeIcon icon={faChevronDown} style={{ color: "#606060", width: '100%', height: '40%' }} /></button>
              </div>
              <div className='flex flex-row w-[60rem] items-top h-[45rem]'>
                <p className='text-[.95rem] w-[50rem] mb-[2%]'>Tyler Richards, Jason Talbott, Robyn Ball, Errol Colak, Adam Flanders, Felipe Kitamura, John Mongan, Luciano Prevedello, Maryam Vazirabad.. (2024). RSNA 2024 Lumbar Spine Degenerative Classification. Kaggle. https://kaggle.com/competitions/rsna-2024-lumbar-spine-degenerative-classification</p>
                <button className='rounded-full w-[5rem] h-[2.5rem] border border-zinc-500 font-bold hover:border-black'>Cite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indexpage;

