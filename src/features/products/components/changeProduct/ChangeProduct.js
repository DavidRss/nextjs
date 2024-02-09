/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fabric } from "fabric";
import { useLocation } from 'react-router-dom';
import { initCanvas, getMockupId, getMockupUrl, addImg, setCanvasBackground } from '../../../../services/canva/canva';



function ChangeProduct() {
    const nav = useNavigate();
    const [canvas, setCanvas] = useState('');
    const [imgFile, setImgFile] = useState(null);
    const fileInputRef = useRef(null);
    const location = useLocation();
    const mockup = getMockupUrl(location)
    const id = getMockupId(location);
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        id: '',
        imgId: '',
        canvasImage: '',
    });

    useEffect(() => {
        const physicalProducts = JSON.parse(localStorage.getItem('physicalProducts'));
        const foundProduct = physicalProducts.find(item => item.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    useEffect(() => {
        const container = document.querySelector('._container');
        setCanvas(initCanvas(container));
    }, []);

    const addImgToCanva = (productImg) => {
        fabric.Image.fromURL(productImg, (img) => {
            img.scaleToWidth(canvas.width);
            img.scaleToHeight(canvas.height);
            canvas && canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height,
            });
            
        });
    }

    useEffect(() => {
        addImgToCanva(product.canvasImage);
    }, [product.canvasImage]);
    
    const handleAddImg = (e) => {
        addImg(e, imgFile, canvas);
        fileInputRef.current.value = '';
        setImgFile(null);
    }

    const removeHandler = () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.remove(activeObject);
            canvas.renderAll();
            setCanvas(canvas);
            return;
        }
        setCanvasBackground(mockup, canvas);
        setCanvas(canvas);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImgFile(file);
    }

    const handleInputChange = (e, field) => {
        setProduct({
          ...product,
          [field]: e.target.value,
        });
    };

    const saveCanvas = () => {
        const canvasData = {
            id: uuidv4(),
            imgId: mockup,
            canvasImage: canvas.toDataURL({
                format: 'png',
                quality: 1.0,
            }),
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
        };
    
        const existingData = JSON.parse(localStorage.getItem('physicalProducts')) || [];
        const indexToUpdate = existingData.findIndex(item => item.id === id);
        existingData.splice(indexToUpdate, 1);
        existingData.push(canvasData);
        localStorage.setItem('physicalProducts', JSON.stringify(existingData));
        nav('/app/products');
    };
    
    return (
        <div className='flex flex-col w-full gap-10 mt-10'>
            <div className='flex w-full gap-8 flex-col lg:flex-row'>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='_container w-full flex items-center relative card h-full rounded-3xl p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out'>
                        <canvas id="canvas"/>
                        <button className='btn mt-4' onClick={removeHandler}>Remove Selected</button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 w-full card h-full rounded-3xl p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out'>
                <div className='flex flex-col gap-3 w-full xl:hidden'>
                        <label className='text-sm hidden font-semibold uppercase xl:flex'>Upload your logo</label>
                        <div className='flex items-center gap-5 flex-col sm:flex-row'>
                            <form 
                                onSubmit={e => handleAddImg(e, imgFile, canvas)}
                            >
                                <div className='flex flex-col gap-4'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                        className="file-input file-input-bordered w-full max-w-xs"
                                    />
                                    {imgFile && (
                                        <button 
                                            type="submit"
                                            className='py-3 px-10 text-white dark:text-slate-200 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                            style={{
                                                boxShadow: '0px 3px 0px 0px #803CBC',
                                                background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                            }}
                                        >
                                            Add Image
                                        </button>
                                    )}
                                </div>
                            </form>
                            <span className='text-sm font-semibold opacity-30'>JPG, GIF or PNG. 1MB max.</span>
                        </div>
                    </div>   
                    <div className='flex flex-col gap-3'>
                        <label className='text-sm font-semibold uppercase'>Title</label>
                        <input 
                            type='text' 
                            onChange={(e) => handleInputChange(e, 'title')}
                            placeholder="Premium subscription" 
                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                            value={product.title}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-sm font-semibold uppercase'>Description</label>
                        <textarea 
                            rows={5}
                            onChange={(e) => handleInputChange(e, 'description')}
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                            value={product.description}
                        />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-sm font-semibold uppercase'>Price</label>
                        <input 
                            type='number' 
                            onChange={(e) => handleInputChange(e, 'price')}
                            placeholder="Enter value" 
                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                            value={product.price}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-sm font-semibold uppercase'>Quantity</label>
                        <input 
                            type='number' 
                            onChange={(e) => handleInputChange(e, 'quantity')}
                            placeholder="Enter value" 
                            className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                            value={product.quantity}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-sm hidden font-semibold uppercase xl:flex'>Upload your logo</label>
                        <div className='flex items-center gap-5 flex-col sm:flex-row'>
                            <form 
                                onSubmit={e => handleAddImg(e, imgFile, canvas)}
                            >
                                <div className='flex flex-col gap-4'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                        className="file-input file-input-bordered w-full max-w-xs"
                                    />
                                    {imgFile && (
                                        <button 
                                            type="submit"
                                            className='py-3 px-10 text-white dark:text-slate-200 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                            style={{
                                                boxShadow: '0px 3px 0px 0px #803CBC',
                                                background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                            }}
                                        >
                                            Add Image
                                        </button>
                                    )}
                                </div>
                            </form>
                            <span className='text-sm font-semibold opacity-30'>JPG, GIF or PNG. 1MB max.</span>
                        </div>
                    </div>                
                </div>
            </div>
            <div className='flex w-full justify-between items-center'>
                <button
                    className='py-4 px-12 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                    style={{
                        border: '1px solid #E2E2E2',
                        boxShadow: '0px 3px 0px 0px #E2E2E2',
                    }}
                    onClick={() => nav('/app/products')}
                >
                Cancel
                </button>
                <button 
                    className='py-4 px-12 text-white dark:text-slate-200 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                    style={{
                        boxShadow: '0px 3px 0px 0px #803CBC',
                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                    }}
                    onClick={saveCanvas}
                >
                    Change Product
                </button>
            </div>
        </div>
    );
}

export default ChangeProduct;