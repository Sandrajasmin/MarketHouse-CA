import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from "../../components/store/modules/productSlicer"
import { Link } from 'react-router-dom';
// import ErrorComponent from "../../components/shared/ErrorComponent";
import DiscountProcenteg from "../../components/discountProcent"
import hero from '../homepage/components/hero.png'
import heroDark from '../homepage/components/heroDark.png'

function Homepage() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    console.log(products);

    return (
        
        <>
            <div className="Header">
                <div className="bg-beig dark:bg-primaryblue mt-5 dark:pt-5 dark:mt-0 flex flex-col lg:flex-row lg:justify-evenly px-9" >
                    <div className='max-w-7xl px-4 sm:px-6 lg:px-20 py-20 flex flex-col justify-center'>
                        <h1 className='font-body text-white font-light text-2xl lg:text-6xl'>Samsung Galaxy  S21</h1>
                        <h2 className='font-heading dark:text-green pb-5 lg:pb-8 text-xl lg:text-3xl'>Everyday just got epic.</h2>
                        <ul className='font-body text-white font-light lg:text-md'>
                            <li>Super high-resolution camera and 8K video.</li>
                            <li>A blazing fast processor.</li>
                            <li>First ever S Pen compatibility.</li>
                        </ul>
                    </div>
                    <img src={hero} alt='heroimg' className='max-w-lg lg:my-10 dark:hidden' />
                    <img src={heroDark} alt='heroimg' className='max-w-lg lg:my-10 hidden dark:block' />
                </div>
            </div>
        {/* {isError ? (
                        <ErrorComponent message={errorMessage}/>
                    ) : ( */}
                        <div
                className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mx-auto max-w-7xl lg:px-10">
                            {products.map((product) => (
                                <div key={product.id} className="group relative flex flex-col gap-y-3">
                                    <Link to={`product/${product.id}`} className="md:h-[400px] lg:w- rounded-md group-hover:opacity-75 ">
                                        <div className='md:h-[320px]'>
                                            {product.discountedPrice < product.price ? <div className="w-14 h-14 rounded-full bg-red-600 right-[-10px] top-[-20px] absolute flex items-center justify-center"><p className="text-white text-sm sm:text-lg">-{DiscountProcenteg(product.discountedPrice, product.price)}%</p></div> : null}
                                            <img src={product.imageUrl} alt={product.title}
                                                className="h-full w-full object-center md:max-h-80  rounded-md "
                                                loading="lazy" />
                                        </div>
                                        <div className="mt-4 flex flex-col">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-700 font-body relative">
                                                    <Link to={`product/${product.id}`}>
                                                        <span aria-hidden="true" className="absolute inset-0 "/>
                                                        {product.title}
                                                    </Link>
                                                </h3>
                                                {/* <div className="flex">
                                                    <p className="mt-1 text-sm text-black">Rating:</p>
                                                    <p className="mt-1 text-sm text-gray-500">{product.rating}</p>
                                                </div> */}
                                            </div>
                                            
                                            {product.discountedPrice < product.price ? 
                                            <div className='flex gap-4'>
                                                    <p className="text-grey text-md font-light font-body sm:text-lg line-through">{product.price}</p>
                                                    <p className="text-red-600 font-body font-bold text-md sm:text-lg">{product.discountedPrice} NOK</p>
                                            </div> : 
                                            <p className="text-black font-body text-md sm:text-lg">{product.price} NOK</p> }
                                        </div>
                                        
                                    </Link>
                                    <Link to={`product/${product.id}`}
                                        className="mt-4 py-2 px-4 bg-blue-500 text-black bg-beig dark:bg-lightgreen hover:bg-grey hover:text-white dark:hover:bg-green dark:hover:text-black rounded-md hover:bg-blue-600 text-center">
                                        View
                                    </Link>
                                </div>
                            ))}
                        </div>
                    {/* )} */}
        </>
    );
}

export default Homepage;