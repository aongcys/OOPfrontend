import React from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/sidebar'
import Navbardata from '@/components/navbardata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react'

const Getdata = dynamic(() => import('@/components/getdata'), {
  ssr: false,
})

function Datapage() {
  const [small, setsmall] = useState(false);

  return (
    <div>
      <div className='flex flex-row'>
        <div className='fixed top-0 left-0 h-full'>
          <Sidebar small={small} setsmall={setsmall} />
        </div>
        <div className={`${small ? 'ml-[6%]' : 'ml-[18%]'}`}>
          <Navbardata small={small} />
          <div className={small ? 'ml-[10%]' : 'ml-[4%]'}>
            <div className='flex flex-row mt-[3.5%]'>
              <div className='w-[76%] mr-[2%]'>
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
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.6%', height: '0%', marginRight: "1%", marginTop: "1%" }} />
                  <p className='text-[.95rem]'>[condition]_[level] - The target labels, such as spinal_canal_stenosis_l1_l2, with the severity levels of Normal/Mild, Moderate, or Severe. Some entries have incomplete labels.</p>
                </div>
                <p className='text-[.9rem] font-bold mb-[2%]'>train_label_coordinates.csv</p>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>study_id</p>
                </div>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>series_id - The imagery series ID.</p>
                </div>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>instance_number - The image's order number within the 3D stack.</p>
                </div>
                <div className='flex flex-row w-[98%] mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%", marginTop: "1%" }} />
                  <p className='text-[.95rem]'>condition - There are three core conditions: spinal canal stenosis, neural_foraminal_narrowing, and subarticular_stenosis. The latter two are considered for each side of the spine.</p>
                </div>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>level - The relevant vertebrae, such as l3_l4</p>
                </div>
                <div className='flex flex-row items-center mb-[2%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>[x/y] - The x/y coordinates for the center of the area that defined the label.</p>
                </div>
                <p className='text-[.9rem] font-bold mb-[2%]'>sample_submission.csv</p>
                <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>row_id - A slug of the study ID, condition, and level such as 12345_spinal_canal_stenosis_l3_l4.</p>
                </div>
                <div className='flex flex-row items-center mb-[2%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>[normal_mild/moderate/severe] - The three prediction columns.</p>
                </div>
                <div className='flex flex-row mb-[2%]'>
                  <p className='text-[.9rem] font-bold'>[train/test]_images/[study_id]/[series_id]/[instance_number].dcm</p>
                  <p className='text-[.9rem] ml-[0.3%]'>The imagery data.</p>
                </div>
                <div className='flex flex-row mb-[2%]'>
                  <p className='text-[.9rem] font-bold'>[train/test]_series_descriptions.csv</p>
                </div>
                <div className='flex flex-row items-center mb-[.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>study_id</p>
                </div>
                <div className='flex flex-row items-center mb-[0.5%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>series_id</p>
                </div>
                <div className='flex flex-row items-center mb-[4%]'>
                  <FontAwesomeIcon icon={faCircle} style={{ color: "black", width: '0.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[.95rem]'>series_description The scan's orientation.</p>
                </div>
                <hr className='border-[0.5px] border-gray-300 mb-[5%]' />
              </div>
              <div>
                <p className='font-extrabold'>Files</p>
                <p className='text-[.9rem] mb-[1.5rem]'>147320 files</p>
                <p className='font-extrabold'>Size</p>
                <p className='text-[.9rem] mb-[1.5rem]'>35.34 GB</p>
                <p className='font-extrabold'>Type</p>
                <p className='text-[.9rem] mb-[1.5rem]'>dcm, csv</p>
                <p className='font-extrabold'>License</p>
                <p className='text-[.9rem] mb-[4%] underline underline-offset-4'>Subject to Competition Rules</p>
              </div>
            </div>
          </div>
          <div className={small ? 'ml-[10%]' : 'ml-[4%]'}>
              <div className='border border-gray-300 h-[auto] p-[2%] w-[70%] rounded-lg mb-[1%]'>
                  <Getdata></Getdata>
              </div>
              <img className='w-[85%] mb-[4%]' src="download.png" alt="" />
              <div className='flex flex-row items-center mb-[3%]'>
                  <FontAwesomeIcon icon={faFileLines} style={{ color: "black", width: '1.5%', height: '0%', marginRight: "1%" }} />
                  <p className='text-[1.5rem] font-extrabold'>Metadata</p>
                </div>
                <hr className='border-[0.5px] border-gray-300 mb-[2%] w-[80%]' />
                <p className='text-[1.25rem] font-extrabold mb-[2%]'>License</p>
                <p className='underline hover:underline-offset-1 mb-[3%]'>Subject to Competition Rules</p>
                <hr className='border-[0.5px] border-gray-300 mb-[10%] w-[80%]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datapage
