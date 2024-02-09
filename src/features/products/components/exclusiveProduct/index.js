/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect  } from 'react';
// import TitleCard from '../../components/Cards/TitleCard'
import { useNavigate } from 'react-router-dom';
import foo from '../../../../assets/images/video-foo.png';

function DigitalProduct(){
    const nav = useNavigate();
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('exclusiveProducts')) || []);

    useEffect(() => {
        setProducts(allProducts);
    }, [allProducts]);

    const handleAddProduct = () => {
        const newProduct = {
            id: products.length + 1,
            title: '',
            description: '',
            price: '',
            quantity: '',
        }
        setAllProducts([...allProducts, newProduct]);
    }

    const handleRemoveProduct = (id) => {
        const newProducts = allProducts.filter(product => product.id !== id);
        setAllProducts(newProducts);
    }

    const handleProductChange = (id, key, value) => {
        const newProducts = allProducts.map(product => {
            if(product.id === id){
                product[key] = value;
            }
            return product;
        });
        setAllProducts(newProducts);
    }

    const handleCancel = () => {
        nav('/app/products');
    }

    const handleSave = () => {
        localStorage.setItem('exclusiveProducts', JSON.stringify(allProducts));
        nav('/app/products');
    }

    return(
        <>
            <div className='flex flex-col w-full gap-8'>
            {products.map((product) => (
                <div key={product.id} className={"card rounded-3xl w-full p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "}> 
                    <div className='flex flex-col w-full gap-6'>
                        <div className='flex w-full justify-between'>
                            <h2 className='text-primary font-semibold text-xl dark:text-slate-400'>New Product №{product.id}</h2>
                            <button 
                                type='button' 
                                className='cursor-pointer transition-all hover:scale-105'
                                onClick={() => handleRemoveProduct(product.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <g clip-path="url(#clip0_7315_1036)">
                                        <path d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z" fill="#9B52DC"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7315_1036">
                                        <rect width="27" height="27" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div className='flex w-full gap-10 justify-between'>
                            <div className='flex flex-col gap-6'>
                                <img
                                    src={foo}
                                    alt="product"
                                    className="w-full max-w-video rounded-2xl h-productImg object-cover"
                                />
                                <div className='flex items-center gap-5'>
                                    <button 
                                        className='py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                        style={{
                                            boxShadow: '0px 3px 0px 0px #803CBC',
                                            background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                        }}
                                    >
                                        Upload image
                                    </button>
                                    <span className='text-sm font-semibold opacity-30'>JPG, GIF or PNG. 1MB max.</span>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-6'>
                                <div className='flex flex-col gap-3'>
                                    <label className='text-sm font-semibold uppercase'>Title</label>
                                    <input 
                                        type='text' 
                                        placeholder="Premium subscription" 
                                        className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                        onChange={(e) => handleProductChange(product.id, 'title', e.target.value)}
                                    ></input>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label className='text-sm font-semibold uppercase'>Description</label>
                                    <textarea 
                                        rows={5}
                                        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                                        className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                        onChange={(e) => handleProductChange(product.id, 'description', e.target.value)}
                                    />
                                </div>
                                <div className='flex w-full gap-5'>
                                    <div className='flex flex-col gap-3 w-full'>
                                        <label className='text-sm font-semibold uppercase'>Price</label>
                                        <input 
                                            type='number' 
                                            placeholder="Enter value" 
                                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                            onChange={(e) => handleProductChange(product.id, 'price', e.target.value)}
                                        ></input>
                                    </div>
                                    <div className='flex flex-col gap-3 w-full'>
                                        <label className='text-sm font-semibold uppercase'>quantity</label>
                                        <input 
                                            type='number' 
                                            placeholder="Enter value" 
                                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                            onChange={(e) => handleProductChange(product.id, 'quantity', e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            ))}
                <div className={"card rounded-3xl w-full p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out flex justify-center items-center"}>
                    <button 
                        onClick={handleAddProduct}
                        className='flex dark:bg-base-100 rounded-3xl flex-col items-center gap-2 text-accent w-full max-w-xs justify-center transition-all hover:scale-105'>
                        <span className='flex items-center justify-center p-1 bg-accent rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z" fill="white"/>
                            </svg>
                        </span>
                        Add product
                    </button>
                </div>
            </div>
            <div className='mt-4 flex w-full justify-between'>
                <button
                    className='py-4 px-12 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                    style={{
                        border: '1px solid #E2E2E2',
                        boxShadow: '0px 3px 0px 0px #E2E2E2',
                    }}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button 
                    className='py-4 px-12 text-white dark:text-slate-200 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                    style={{
                        boxShadow: '0px 3px 0px 0px #803CBC',
                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                    }}
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default DigitalProduct