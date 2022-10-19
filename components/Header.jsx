import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/future/image'
import tplogo from '../public/TopPicks-2.png'

// const categories = [{name:'Cheese', slug:'Cheesecake'}, {name:'Web Development', slug:'Web devstuff'}]

const Header = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories() .then((newCategories) => setCategories(newCategories))
  }, [])
  
  return (
    <div className='container mx-auto px-10'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <Image 
                        src={tplogo}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt=2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header