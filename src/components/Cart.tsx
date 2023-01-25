import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '@/context/Statecontext';
import { useRef } from 'react';

import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { imgUrl } from '@/utils/sanity';
import { IProduct } from 'typing';

const Cart = () => {
  const {
    totalQuantity,
    setShowCart,
    showCart,
    cartItems,
    cartItemQuantity,
    removeCartItem,
    totalPrice
  } = useStateContext();
  const cartRef = useRef<HTMLDivElement>(null);

  const sidebar = showCart
    ? 'animate-slide-in-right'
    : 'animate-slide-out-right';

  const numberFormatter = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0
  });

  return (
    <aside
      ref={cartRef}
      className={`fixed top-0 right-0 z-10 h-screen w-[70%] bg-base-100 p-2 shadow-lg ${sidebar} bg-white p-5 ease-in md:w-[30%]`}>
      <header className='flex items-center gap-3'>
        <figure
          className='cursor-pointer rounded-lg p-2 duration-75 hover:bg-black/20'
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft size={18} />
        </figure>
        <h3 className='font-medium text-primary-content'>
          Your Cart ({totalQuantity} items)
        </h3>
      </header>

      <section>
        {cartItems.length < 1 && (
          <div className='flex h-screen w-full flex-col items-center justify-center gap-5 p-2 text-primary-content'>
            <figure>
              <AiOutlineShoppingCart size={150} />
            </figure>
            <h2 className='text-lg font-medium'>Your cart is Empty</h2>
            <Link onClick={() => setShowCart(false)} href='/'>
              <button className='btn-primary btn rounded-lg'>
                Order Something
              </button>
            </Link>
          </div>
        )}

        <section className='flex h-[90vh] flex-col justify-between gap-2'>
          <div className='h-[85%]'>
            {cartItems.length >= 1 &&
              cartItems.map((item: IProduct) => {
                return (
                  <div
                    key={item._id}
                    className='group flex gap-3 rounded-lg bg-base-200/40 p-2 duration-200 hover:bg-base-300'>
                    <figure className='flex items-center justify-center rounded-lg bg-primary/80 p-2 duration-200 group-hover:bg-primary'>
                      <Image
                        src={imgUrl(item.image[0]).url()}
                        alt='item iamge'
                        width={100}
                        height={100}
                      />
                    </figure>
                    <div className='flex w-full flex-col gap-3'>
                      <hgroup className='flex w-full flex-col md:flex-row md:justify-between'>
                        <h3 className='text-xl font-semibold text-primary-content'>
                          {item.name}
                        </h3>
                        <h3 className='text-lg font-bold text-primary-content'>
                          Rp{numberFormatter.format(item.price)}.000
                        </h3>
                      </hgroup>
                      <div className='flex w-full items-center justify-between'>
                        <div className='flex w-[60%] items-center justify-between md:w-[50%]'>
                          <figure
                            onClick={() =>
                              cartItemQuantity(item._id, 'decrease')
                            }
                            className='rounded-lg bg-primary p-2 text-base-300 hover:cursor-pointer hover:bg-primary-focus active:scale-95'>
                            <AiOutlineMinus size={18} />
                          </figure>
                          <p className='text-lg font-medium'>
                            {item.quantities}
                          </p>
                          <figure
                            onClick={() =>
                              cartItemQuantity(item._id, 'increase')
                            }
                            className='rounded-lg bg-primary p-2 text-base-300 hover:cursor-pointer hover:bg-primary-focus active:scale-95'>
                            <AiOutlinePlus size={18} />
                          </figure>
                        </div>
                        <figure
                          onClick={() => removeCartItem(item)}
                          className='rounded-lg text-primary-content duration-200 hover:cursor-pointer hover:bg-primary active:scale-90'>
                          <TiDeleteOutline size={32} />
                        </figure>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='flex h-[15%] w-full flex-col gap-3 p-2'>
            <hgroup className='flex justify-between text-xl font-medium'>
              <h3>Subtotal: </h3>
              <h3>Rp{numberFormatter.format(totalPrice)}.000</h3>
            </hgroup>
            <button className='btn-primary btn rounded-lg'>Checkout</button>
          </div>
        </section>
      </section>
    </aside>
  );
};

export default Cart;
