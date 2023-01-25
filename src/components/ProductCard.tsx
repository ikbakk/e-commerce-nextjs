import Image from 'next/image';
import React from 'react';
import { IProduct } from 'typing';
import { imgUrl } from '@/utils/sanity';
import Link from 'next/link';

type Props = {
  info: IProduct;
};

const ProductCard = ({ info }: Props) => {
  const { _id, name, price, details, image } = info;
  const shownImage = image && image[0];
  return (
    <div className='group rounded-lg p-2 hover:bg-base-300'>
      <Link href={`/product/${name}`}>
        <figure className='overflow-hidden rounded-lg bg-primary p-2 group-hover:cursor-pointer'>
          <Image
            className='duration-200 group-hover:scale-110'
            width='200'
            height='200'
            src={imgUrl(shownImage).url()}
            alt='product image'
          />
        </figure>
        <div>
          <h3 className='text-xl font-semibold text-primary-content'>{name}</h3>
          <p className='text-primary-content'>Rp.{price}.000</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
