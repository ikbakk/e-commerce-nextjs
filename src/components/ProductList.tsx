import React from 'react';
import { IProduct } from 'typing';
import { imgUrl } from '@/utils/sanity';
import ProductCard from './ProductCard';

type Props = {
  data: IProduct[];
};

const ProductList = ({ data }: Props) => {
  return (
    <section className='flex max-w-7xl flex-col items-center py-5'>
      <header className='prose py-2 text-center'>
        <h2 className='uppercase text-primary-content'>
          Check out our products
        </h2>
        <p className='text-primary-content'>
          There are many variations passages
        </p>
      </header>
      <div className='flex gap-5'>
        {data.map((info) => (
          <ProductCard key={info._id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
