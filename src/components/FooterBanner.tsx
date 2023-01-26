/* eslint-disable @next/next/no-img-element */
import { imgUrl } from '@/utils/sanity';
import Image from 'next/image';
import React from 'react';

import { IBanner } from 'typing';

interface IProps {
  data: IBanner;
}

const FooterBanner = ({ data }: IProps) => {
  const {
    buttonText,
    smallText,
    largeText1,
    largeText2,
    desc,
    discount,
    image,
    midText,
    product,
    saleTime
  } = data;
  return (
    <footer className='relative flex w-full flex-col justify-center bg-base-300 pt-10 md:w-[80%] md:flex-row md:pt-20'>
      <div className='flex w-full flex-col items-center justify-between rounded-lg bg-accent p-2 md:flex-row md:p-10'>
        <section className='flex flex-col gap-2 md:basis-2/3'>
          <p className='text-lg uppercase text-accent-content'>{discount}</p>
          <hgroup className='flex gap-3 text-5xl font-bold text-base-300 md:text-[8rem]'>
            <h2 className=''>{largeText1}</h2>
            <h2 className=''>{largeText2}</h2>
          </hgroup>
          <p className='text-lg uppercase text-accent-content'>{saleTime}</p>
        </section>
        <figure className='right-[20%] top-0 h-[28rem] w-[28rem] md:absolute md:h-[31rem] md:w-[31rem]'>
          <img className='' src={imgUrl(image).url()} alt='banner-img' />
        </figure>
        <section className='flex flex-col justify-center gap-2 text-right md:basis-1/3'>
          <h2 className='text-2xl font-medium text-accent-content'>
            {smallText}
          </h2>
          <h2 className='text-5xl font-bold text-base-300'>{midText}</h2>
          <p className='text-xl text-accent-content'>{desc}</p>
        </section>
      </div>
    </footer>
  );
};

export default FooterBanner;
