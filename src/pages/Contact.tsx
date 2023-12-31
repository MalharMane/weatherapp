import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { SlSocialGithub } from 'react-icons/sl';

type IContact = {
  theme: boolean;
};

const Contact: React.FC<IContact> = ({ theme }) => {
  return (
    <div className={theme ? 'dark' : ''}>
      <div className='text-gray-700 dark:text-gray-100  max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center py-10'>
        <div className='flex space-x-10'>
          <div className='flex flex-col'>
            <span className='flex font-bold text-sm mb-1'>
              
            </span>
            <span className='text-xs text-gray-500 mb-3 dark:text-gray-400'>
              
            </span>
            <a
              className=' flex items-center rounded py-2 px-4 bg-gray-200 dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:bg-[#1f2937]  transition-all mb-2 text-xs'
              href='https://github.com/MalharMane'
              target='_blank'
            >
              <SlSocialGithub className='h-4 mr-2' />
              Github
            </a>
            <a
            
            >
              
            </a>
          </div>
         
           
         
        </div>
      </div>
    </div>
  );
};

export default Contact
