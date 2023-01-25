import { sanityClient } from '@/utils/sanity';
import React, { useState } from 'react';
import { imgUrl } from '@/utils/sanity';
import { IProduct } from 'typing';
import Image from 'next/image';

interface IParamsStaticProps {
  params: {
    slug: string;
  };
}

interface IProductStaticPaths {
  _id: string;
  slug: {
    current: string;
  };
}

interface Props {
  product: IProduct;
}

const ProductDetails = ({ product }: Props) => {
  const { details, image, name, price } = product;
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className='flex w-full flex-col p-5 md:flex-row'>
      <div className='flex basis-1/3 flex-col items-center gap-5'>
        <figure className='flex justify-center rounded-lg bg-base-300 p-2'>
          <Image
            className='duration-200'
            src={imgUrl(image[index]).url()}
            width={300}
            height={300}
            alt='shownImage'
          />
        </figure>
        <div className='flex gap-2'>
          {image.map((item, idx) => {
            const selected = idx === index ? 'bg-accent' : 'bg-base-300';
            return (
              <figure
                onMouseEnter={() => setIndex(idx)}
                key={idx}
                className={`cursor-pointer rounded-lg duration-100 ${selected} p-2`}>
                <Image
                  src={imgUrl(item).url()}
                  width={70}
                  height={70}
                  alt='collection'
                />
              </figure>
            );
          })}
        </div>
      </div>
      <div className='flex basis-2/3 flex-col justify-between gap-3'>
        <article className='prose'>
          <h2 className='text-5xl'>{name}</h2>
          <h4 className='text-lg'>Details:</h4>
          <p>{details}</p>
        </article>
        <h3 className='text-2xl font-bold text-accent'>Rp.{price}.000</h3>
        <div className='flex items-center gap-5 '>
          <p className='font-medium text-accent-content'>Quantity: </p>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setQuantity(quantity - 1)}
              className='w-5 rounded-lg bg-accent px-1 '>
              <p className='-mt-1 text-xl font-bold'>&ndash;</p>
            </button>
            <p className='text-accent-content'>{quantity}</p>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='rounded-lg bg-accent px-1 '>
              <p className='-mt-1 text-xl font-bold'>+</p>
            </button>
          </div>
        </div>
        <div className='flex gap-5 md:w-1/2'>
          <button className='w-full p-3 text-accent-content outline outline-accent duration-75 hover:bg-accent'>
            Add to cart
          </button>
          <button className='w-full bg-accent p-3 text-accent-content duration-75 hover:bg-white hover:text-accent-content hover:outline-accent hover:outline'>
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == project]{
    _id,
    slug {
      current
    }
  }`;
  const products: IProductStaticPaths[] = await sanityClient.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params }: IParamsStaticProps) => {
  const query = `*[_type == 'product' && slug.current == $slug][0]{
    _id,
    image,
    name,
    price,
    details
  }`;
  const product = await sanityClient.fetch(query, { slug: params?.slug });
  if (!product) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      product
    },
    revalidate: 1
  };
};
