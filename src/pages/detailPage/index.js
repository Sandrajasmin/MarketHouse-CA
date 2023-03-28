import React from 'react';
import ProductPicture from '../detailPage/product.png'

function DetailPage() {
    return (
        <>
            <div className="bg-white dark:bg-primaryblue ">
                <div className="pt-6 py-10 flex flex-col lg:flex-row xl:justify-evenly items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='md:grid md:grid-flow-col md:grid-cols-1 md:grid-rows-2 md:gap-8'>
                        <img
                            src={ProductPicture}
                            alt="Iphone 9"
                            className="object-contain object-center rounded-md md:max-h-60 self-end" />
                        <img
                            src={ProductPicture}
                            alt="Iphone 9"
                            className="hidden  sm:block object-contain object-center md:row-span-2 md:col-start-2 rounded-md" />

                        <img
                            src={ProductPicture}
                            alt="Iphone 9"
                            className="hidden md:max-h-60 sm:block object-contain object-center rounded-md " />
                    </div>

                    {/*Product info*/}
                    <div className="md:px-10 pt-10 pb-16 md:flex md:flex-row md:justify-between lg:flex-col w-full lg:w-auto">
                        <div className="md:flex-col lg:border-r lg:border-none lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">Iphone 9</h1>
                            <h2 className="text-xl font-medium tracking-tight text-black dark:text-white sm:text-2xl">Apple</h2>
                            {/*Description and details*/}
                            <div className="my-5 lg:border-r lg:border-none lg:pr-8">
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-black dark:text-white">An apple mobile which is nothing like apple</p>
                                    </div>
                                </div>

                                <div className="my-10">
                                    <h3 className="text-sm font-medium text-black dark:text-white">Highlights</h3>

                                    <div className="mt-4">
                                        <ul className="list-disc space-y-2 pl-4 text-sm">
                                            <li className="text-black dark:text-white"><span
                                                className="text-black dark:text-white">rating: 2 stars</span>
                                            </li>

                                            <li className="text-black dark:text-white"><span
                                                className="text-black dark:text-white capitalize">stock: 100</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Options*/}
                        <div className="mt-11 md:px-10 border-t md:border-l md:border-t-0 lg:border-t-2 lg:border-l-0 border-6 border-black dark:border-green lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-black dark:text-white my-10">NOK549</p>
                            <div className="mt-10">
                                <button type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md bg-grey dark:bg-green py-3 px-8 text-base font-medium text-white dark:text-black hover:bg-beig hover:dark:bg-lightgreen hover:text-black"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailPage;
