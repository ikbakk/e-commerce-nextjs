/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IBanner } from 'typing';
import { imgUrl } from '@/utils/sanity';

type Props = {
  data: IBanner;
};

const HeroBanner = ({ data }: Props) => {
  const {
    buttonText,
    desc,
    image,
    largeText1,
    largeText2,
    midText,
    product,
    smallText
  } = data;
  return (
    <section className='relative flex h-fit w-full flex-col items-center justify-between rounded-2xl bg-primary px-16 py-5 md:h-[31rem]  md:flex-row'>
      <section className='flex flex-col gap-y-5 md:gap-y-10'>
        <header className='flex flex-col'>
          <p className='text-xl'>{smallText}</p>
          <h2 className='text-5xl font-medium'>{midText}</h2>
          <h2 className='drop py-10 text-3xl font-bold text-base-100 md:flex md:gap-x-5 md:text-[8rem]'>
            <span>{largeText1}</span>
            <span>{largeText2}</span>
          </h2>
        </header>
        <Link className='group' href={`/products/${product}`}>
          <button
            className='rounded-2xl bg-secondary px-4 py-2 text-lg font-medium text-secondary-content duration-200 group-hover:cursor-pointer group-active:scale-95 group-active:bg-secondary-focus'
            type='button'>
            {buttonText}
          </button>
        </Link>
      </section>
      <figure className='right-[20%] h-[28rem] w-[28rem] md:absolute md:h-[31rem] md:w-[31rem]'>
        <img className='' src={imgUrl(image).url()} alt='banner-img' />
      </figure>
      <section className='flex h-full flex-col gap-y-3 text-center md:w-[20%] md:justify-end md:text-right'>
        <h4 className='text-3xl font-semibold'>Description</h4>
        <p className='text-lg'>{desc}</p>
      </section>
    </section>
  );
};

export default HeroBanner;