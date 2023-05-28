import Link from 'next/link'
import React from 'react'
import { CiUser, CiShoppingCart, CiSearch } from 'react-icons/ci'
import { GiLargeDress } from 'react-icons/gi'

const navbar = () => {
  return (
    <header className="flex justify-between flex-center w-full">
      <div className="logo">
        <GiLargeDress size={52} />
      </div>
      <nav className='hidden sm:block'>
        <ul className="flex gap-5 ">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/products">Most wanted</Link>
          </li>
          <li>
            <Link href="/products">New arrival</Link>
          </li>
          <li>
            <Link href="/products">Brands</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="flex">
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-400">
              <CiSearch size={20} />
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 bg-gray-100 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

      <div className='flex items-center'>
        <div className="user-buttons">
          <CiUser size={24} />
        </div>
        <div className="cart">
          <CiShoppingCart size={24} />
        </div>
      </div>
      </div>
    </header>
  );
}

export default navbar