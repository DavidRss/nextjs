/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/product1.png";
import img2 from "../../assets/images/product2.png";
import img3 from "../../assets/images/product3.png";
import img4 from "../../assets/images/product4.jpg";
import img5 from "../../assets/images/product5.png";
import foo from "../../assets/images/video-foo.png";

function DigitalProducts() {
    const [digitalProducts, setDigitalProducts] = useState([]);
    const [physicalProducts, setPhysicalProducts] = useState([]);
    const [exclusiveProducts, setExclusiveProducts] = useState([]);
    const [editDigitalProduct, setEditDigitalProduct] = useState({});
    const [editExclusiveProduct, setEditExclusiveProduct] = useState({});
    const secondModalRef = useRef(null);

    useEffect(() => {
        const saveDigitalProducts =
            JSON.parse(localStorage.getItem("digitalProducts")) || [];
        const savePhysicalProducts =
            JSON.parse(localStorage.getItem("physicalProducts")) || [];
        const saveExclusiveProducts =
            JSON.parse(localStorage.getItem("exclusiveProducts")) || [];
        setDigitalProducts(saveDigitalProducts);
        setPhysicalProducts(savePhysicalProducts);
        setExclusiveProducts(saveExclusiveProducts);
    }, []);

    const handleEditProduct = (id) => {
        const productToEdit = digitalProducts[id - 1];
        setEditDigitalProduct(productToEdit);
        document.getElementById("my_modal_1").showModal();
    };

    const handleEditExclusiveProduct = (id) => {
        const productToEdit = exclusiveProducts[id - 1];
        setEditExclusiveProduct(productToEdit);
        document.getElementById("my_modal_2").showModal();
    };

    const deletePhysicalItem = (id) => {
        const updatedProducts = physicalProducts.filter(
            (product) => product.id !== id
        );
        setPhysicalProducts(updatedProducts);
        localStorage.setItem(
            "physicalProducts",
            JSON.stringify(updatedProducts)
        );
    };

    const deleteDigitalItem = (id) => {
        const updatedProducts = digitalProducts.filter(
            (product) => product.id !== id
        );
        setDigitalProducts(updatedProducts);
        localStorage.setItem(
            "digitalProducts",
            JSON.stringify(updatedProducts)
        );
    };

    const deleteExclusiveItem = (id) => {
        const updatedProducts = exclusiveProducts.filter(
            (product) => product.id !== id
        );
        setExclusiveProducts(updatedProducts);
        localStorage.setItem(
            "exclusiveProducts",
            JSON.stringify(updatedProducts)
        );
    };

    const handleProductChange = (productId, field, value) => {
        setDigitalProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === productId) {
                    return { ...product, [field]: value };
                }
                return product;
            });
        });
    };

    return (
        <>
            <div className="flex flex-col w-full gap-10 mt-6">
                <div className="flex flex-col gap-4">
                    <h2 className="flex items-center gap-2 text-primary font-semibold text-xl dark:text-slate-400">
                        Digital product
                        <div className="tooltip tooltip-top" data-tip="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <path
                                    d="M13 2.4375C10.9109 2.4375 8.86879 3.05698 7.13179 4.2176C5.3948 5.37822 4.04098 7.02786 3.24153 8.95791C2.44208 10.888 2.2329 13.0117 2.64046 15.0606C3.04802 17.1096 4.054 18.9916 5.53119 20.4688C7.00838 21.946 8.89044 22.952 10.9394 23.3595C12.9883 23.7671 15.1121 23.5579 17.0421 22.7585C18.9721 21.959 20.6218 20.6052 21.7824 18.8682C22.943 17.1312 23.5625 15.0891 23.5625 13C23.5595 10.1996 22.4458 7.51466 20.4656 5.53445C18.4853 3.55424 15.8004 2.44046 13 2.4375ZM12.5938 7.3125C12.8348 7.3125 13.0704 7.38398 13.2709 7.5179C13.4713 7.65181 13.6275 7.84216 13.7197 8.06486C13.812 8.28755 13.8361 8.5326 13.7891 8.76902C13.7421 9.00543 13.626 9.22259 13.4555 9.39304C13.2851 9.56348 13.0679 9.67956 12.8315 9.72658C12.5951 9.77361 12.3501 9.74947 12.1274 9.65723C11.9047 9.56498 11.7143 9.40877 11.5804 9.20835C11.4465 9.00793 11.375 8.7723 11.375 8.53125C11.375 8.20802 11.5034 7.89802 11.732 7.66946C11.9605 7.4409 12.2705 7.3125 12.5938 7.3125ZM13.8125 18.6875C13.3815 18.6875 12.9682 18.5163 12.6635 18.2115C12.3587 17.9068 12.1875 17.4935 12.1875 17.0625V13C11.972 13 11.7654 12.9144 11.613 12.762C11.4606 12.6097 11.375 12.403 11.375 12.1875C11.375 11.972 11.4606 11.7654 11.613 11.613C11.7654 11.4606 11.972 11.375 12.1875 11.375C12.6185 11.375 13.0318 11.5462 13.3366 11.851C13.6413 12.1557 13.8125 12.569 13.8125 13V17.0625C14.028 17.0625 14.2347 17.1481 14.387 17.3005C14.5394 17.4528 14.625 17.6595 14.625 17.875C14.625 18.0905 14.5394 18.2972 14.387 18.4495C14.2347 18.6019 14.028 18.6875 13.8125 18.6875Z"
                                    fill="#9B52DC"
                                />
                            </svg>
                        </div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <div
                            style={{
                                backgroundImage: `url(${img1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={
                                "card rounded-3xl bg-center w-full dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out"
                            }
                        >
                            <div className="w-full flex flex-col justify-between rounded-2xl min-h-[198px] h-full bg-black bg-opacity-30 p-6">
                                <div className="flex w-full justify-between items-center">
                                    <button
                                        className="rounded-full px-4 py-2 text-white"
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.30)",
                                        }}
                                    >
                                        Draft
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <g clip-path="url(#clip0_7368_316)">
                                                <path
                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7368_316">
                                                    <rect
                                                        width="27"
                                                        height="27"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white font-semibold text-lg dark:text-white">
                                        Lottery ticket
                                    </h3>
                                    <span className="text-white text-lg font-semibold dark:text-white">
                                        $5,00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${img2})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={
                                "card rounded-3xl w-full bg-purple-600 dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "
                            }
                        >
                            <div className="w-full flex flex-col justify-between rounded-2xl min-h-[198px] h-full bg-black bg-opacity-30 p-6">
                                <div className="flex w-full justify-between items-center">
                                    <button
                                        className="rounded-full px-4 py-2 text-white"
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.30)",
                                        }}
                                    >
                                        Draft
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <g clip-path="url(#clip0_7368_316)">
                                                <path
                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7368_316">
                                                    <rect
                                                        width="27"
                                                        height="27"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        Thank you
                                    </h3>
                                    <span className="text-white text-lg font-semibold">
                                        $5,00
                                    </span>
                                </div>
                            </div>
                        </div>
                        {digitalProducts.map(
                            ({ id, title, description, price, quantity }) => (
                                <>
                                    <div
                                        className="card rounded-3xl bg-center w-full dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out bg-base-100 h-52"
                                        style={{
                                            backgroundImage: `url(${foo})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                        key={id}
                                    >
                                        <div className="w-full flex flex-col justify-between rounded-2xl min-h-[198px] h-full bg-black bg-opacity-30 p-6">
                                            <div className="flex w-full justify-between items-center">
                                                <button
                                                    className="rounded-full px-4 py-2 text-white"
                                                    style={{
                                                        background:
                                                            "rgba(255, 255, 255, 0.30)",
                                                    }}
                                                >
                                                    {quantity}
                                                </button>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="27"
                                                        height="27"
                                                        viewBox="0 0 27 27"
                                                        fill="none"
                                                        className="cursor-pointer transition-all hover:scale-105"
                                                        onClick={() =>
                                                            handleEditProduct(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                    <button
                                                        onClick={() =>
                                                            deleteDigitalItem(
                                                                id
                                                            )
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="27"
                                                            height="27"
                                                            viewBox="0 0 27 27"
                                                            fill="none"
                                                            className="cursor-pointer transition-all hover:scale-105"
                                                        >
                                                            <g clip-path="url(#clip0_7368_316)">
                                                                <path
                                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_7368_316">
                                                                    <rect
                                                                        width="27"
                                                                        height="27"
                                                                        fill="white"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-white font-semibold text-lg dark:text-white">
                                                    {title}
                                                </h3>
                                                <span className="text-white text-lg font-semibold dark:text-white">
                                                    ${price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {editDigitalProduct && (
                                        <dialog
                                            id="my_modal_1"
                                            className="modal"
                                        >
                                            <div className="modal-box max-w-7xl">
                                                <div className="flex w-full gap-10 justify-between">
                                                    <div className="flex flex-col gap-6">
                                                        <img
                                                            src={foo}
                                                            alt="product"
                                                            className="w-full max-w-video rounded-2xl h-productImg object-cover"
                                                        />
                                                        <div className="flex items-center gap-5">
                                                            <button
                                                                className="py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all"
                                                                style={{
                                                                    boxShadow:
                                                                        "0px 3px 0px 0px #803CBC",
                                                                    background:
                                                                        "linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D",
                                                                }}
                                                            >
                                                                Upload image
                                                            </button>
                                                            <span className="text-sm font-semibold opacity-30">
                                                                JPG, GIF or PNG.
                                                                1MB max.
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col w-full gap-6">
                                                        <div className="flex flex-col gap-3">
                                                            <label className="text-sm font-semibold uppercase">
                                                                Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={
                                                                    digitalProducts.find(
                                                                        (
                                                                            product
                                                                        ) =>
                                                                            editDigitalProduct.id ===
                                                                            product.id
                                                                    )?.title ||
                                                                    ""
                                                                }
                                                                className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                                onChange={(e) =>
                                                                    handleProductChange(
                                                                        editDigitalProduct.id,
                                                                        "title",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            ></input>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <label className="text-sm font-semibold uppercase">
                                                                Description
                                                            </label>
                                                            <textarea
                                                                rows={5}
                                                                value={
                                                                    description
                                                                }
                                                                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                                                                className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                                onChange={(e) =>
                                                                    handleProductChange(
                                                                        editDigitalProduct.id,
                                                                        "description",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <div className="flex w-full gap-5">
                                                            <div className="flex flex-col gap-3 w-full">
                                                                <label className="text-sm font-semibold uppercase">
                                                                    Price
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        price
                                                                    }
                                                                    placeholder="Enter value"
                                                                    className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleProductChange(
                                                                            editDigitalProduct.id,
                                                                            "price",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                ></input>
                                                            </div>
                                                            <div className="flex flex-col gap-3 w-full">
                                                                <label className="text-sm font-semibold uppercase">
                                                                    quantity
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        quantity
                                                                    }
                                                                    placeholder="Enter value"
                                                                    className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleProductChange(
                                                                            editDigitalProduct.id,
                                                                            "quantity",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    )}
                                </>
                            )
                        )}
                        <Link
                            to="/app/products/add-digital-product"
                            className="min-h-[198px] flex dark:bg-base-100 dark:shadow hover:shadow-md rounded-3xl flex-col items-center gap-2 text-accent w-full justify-center transition-all hover:scale-105"
                        >
                            <span className="flex items-center justify-center p-1 bg-accent rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Add product
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2
                        to="/app/add-way-to-redeem"
                        className="flex items-center gap-2 text-primary font-semibold text-xl dark:text-slate-400"
                    >
                        Physical product
                        <div className="tooltip tooltip-top" data-tip="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <path
                                    d="M13 2.4375C10.9109 2.4375 8.86879 3.05698 7.13179 4.2176C5.3948 5.37822 4.04098 7.02786 3.24153 8.95791C2.44208 10.888 2.2329 13.0117 2.64046 15.0606C3.04802 17.1096 4.054 18.9916 5.53119 20.4688C7.00838 21.946 8.89044 22.952 10.9394 23.3595C12.9883 23.7671 15.1121 23.5579 17.0421 22.7585C18.9721 21.959 20.6218 20.6052 21.7824 18.8682C22.943 17.1312 23.5625 15.0891 23.5625 13C23.5595 10.1996 22.4458 7.51466 20.4656 5.53445C18.4853 3.55424 15.8004 2.44046 13 2.4375ZM12.5938 7.3125C12.8348 7.3125 13.0704 7.38398 13.2709 7.5179C13.4713 7.65181 13.6275 7.84216 13.7197 8.06486C13.812 8.28755 13.8361 8.5326 13.7891 8.76902C13.7421 9.00543 13.626 9.22259 13.4555 9.39304C13.2851 9.56348 13.0679 9.67956 12.8315 9.72658C12.5951 9.77361 12.3501 9.74947 12.1274 9.65723C11.9047 9.56498 11.7143 9.40877 11.5804 9.20835C11.4465 9.00793 11.375 8.7723 11.375 8.53125C11.375 8.20802 11.5034 7.89802 11.732 7.66946C11.9605 7.4409 12.2705 7.3125 12.5938 7.3125ZM13.8125 18.6875C13.3815 18.6875 12.9682 18.5163 12.6635 18.2115C12.3587 17.9068 12.1875 17.4935 12.1875 17.0625V13C11.972 13 11.7654 12.9144 11.613 12.762C11.4606 12.6097 11.375 12.403 11.375 12.1875C11.375 11.972 11.4606 11.7654 11.613 11.613C11.7654 11.4606 11.972 11.375 12.1875 11.375C12.6185 11.375 13.0318 11.5462 13.3366 11.851C13.6413 12.1557 13.8125 12.569 13.8125 13V17.0625C14.028 17.0625 14.2347 17.1481 14.387 17.3005C14.5394 17.4528 14.625 17.6595 14.625 17.875C14.625 18.0905 14.5394 18.2972 14.387 18.4495C14.2347 18.6019 14.028 18.6875 13.8125 18.6875Z"
                                    fill="#9B52DC"
                                />
                            </svg>
                        </div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <div
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={
                                "card rounded-3xl w-full bg-purple-600 dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "
                            }
                        >
                            <div className="w-full flex flex-col min-h-[198px] justify-between rounded-2xl  h-full bg-black bg-opacity-30 p-6">
                                <div className="flex w-full justify-between items-center">
                                    <button
                                        className="rounded-full px-4 py-2 text-white"
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.30)",
                                        }}
                                    >
                                        Draft
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <g clip-path="url(#clip0_7368_316)">
                                                <path
                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7368_316">
                                                    <rect
                                                        width="27"
                                                        height="27"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        T-shirt
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${img4})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={
                                "card rounded-3xl w-full bg-purple-600 dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "
                            }
                        >
                            <div className="w-full flex flex-col min-h-[198px] justify-between rounded-2xl h-full bg-black bg-opacity-30 p-6">
                                <div className="flex w-full justify-between items-center">
                                    <button
                                        className="rounded-full px-4 py-2 text-white"
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.30)",
                                        }}
                                    >
                                        Draft
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                fill="white"
                                            />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <g clip-path="url(#clip0_7368_316)">
                                                <path
                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7368_316">
                                                    <rect
                                                        width="27"
                                                        height="27"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        Hoodie
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {physicalProducts.map((product) => (
                            <>
                                <div
                                    className="relative w-full min-h-[198px] flex flex-col justify-between rounded-2xl h-full p-6"
                                    style={{
                                        backgroundImage: `url(${product.canvasImage})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundColor: "rgba(0, 0, 0, 0.30)",
                                    }}
                                    key={product.id}
                                >
                                    <div className="absolute w-full h-full z-1 left-0 top-0 rounded-2xl pointer-events-none bg-black opacity-30"></div>
                                    <div className="flex w-full justify-between items-center z-10 ">
                                        <button
                                            className="rounded-full px-4 py-2 text-white"
                                            style={{
                                                background:
                                                    "rgba(255, 255, 255, 0.30)",
                                            }}
                                        >
                                            {product.quantity}
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to={`/app/products/change-physical-product?product=${product.imgId}&id=${product.id}`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="27"
                                                    viewBox="0 0 27 27"
                                                    fill="none"
                                                    className="cursor-pointer transition-all hover:scale-105"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deletePhysicalItem(
                                                        product.id
                                                    )
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="27"
                                                    viewBox="0 0 27 27"
                                                    fill="none"
                                                    className="cursor-pointer transition-all hover:scale-105"
                                                >
                                                    <g clip-path="url(#clip0_7368_316)">
                                                        <path
                                                            d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_7368_316">
                                                            <rect
                                                                width="27"
                                                                height="27"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white font-semibold text-lg z-10">
                                            {product.title}
                                        </h3>
                                    </div>
                                </div>
                            </>
                        ))}
                        {editExclusiveProduct && (
                            <dialog
                                id="my_modal_2"
                                className="modal"
                                ref={secondModalRef}
                            >
                                <div className="modal-box max-w-7xl">
                                    <div className="flex w-full gap-10 justify-between">
                                        <div className="flex flex-col gap-6">
                                            <img
                                                src={foo}
                                                alt="product"
                                                className="w-full max-w-video rounded-2xl h-productImg object-cover"
                                            />
                                            <div className="flex items-center gap-5">
                                                <button
                                                    className="py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all"
                                                    style={{
                                                        boxShadow:
                                                            "0px 3px 0px 0px #803CBC",
                                                        background:
                                                            "linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D",
                                                    }}
                                                >
                                                    Upload image
                                                </button>
                                                <span className="text-sm font-semibold opacity-30">
                                                    JPG, GIF or PNG. 1MB max.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full gap-6">
                                            <div className="flex flex-col gap-3">
                                                <label className="text-sm font-semibold uppercase">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    value={
                                                        editExclusiveProduct.title
                                                    }
                                                    className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                    onChange={(e) =>
                                                        handleProductChange(
                                                            editExclusiveProduct.id,
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <label className="text-sm font-semibold uppercase">
                                                    Description
                                                </label>
                                                <textarea
                                                    rows={5}
                                                    value={
                                                        editExclusiveProduct.description
                                                    }
                                                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                                                    className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                    onChange={(e) =>
                                                        handleProductChange(
                                                            editExclusiveProduct.id,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex w-full gap-5">
                                                <div className="flex flex-col gap-3 w-full">
                                                    <label className="text-sm font-semibold uppercase">
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={
                                                            editExclusiveProduct.price
                                                        }
                                                        placeholder="Enter value"
                                                        className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                        onChange={(e) =>
                                                            handleProductChange(
                                                                editExclusiveProduct.id,
                                                                "price",
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="flex flex-col gap-3 w-full">
                                                    <label className="text-sm font-semibold uppercase">
                                                        quantity
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={
                                                            editExclusiveProduct.quantity
                                                        }
                                                        placeholder="Enter value"
                                                        className="bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                                        onChange={(e) =>
                                                            handleProductChange(
                                                                editExclusiveProduct.id,
                                                                "quantity",
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">
                                                Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        )}

                        <Link
                            to="/app/products/add-physical-product"
                            className="flex dark:bg-base-100 dark:shadow hover:shadow-md rounded-3xl flex-col items-center min-h-[198px] gap-2 text-accent w-full justify-center transition-all hover:scale-105"
                        >
                            <span className="flex items-center justify-center p-1 bg-accent rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Add product
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2
                        to="/app/add-way-to-redeem"
                        className="flex items-center gap-2 text-primary font-semibold text-xl dark:text-slate-400"
                    >
                        Exclusive product
                        <div className="tooltip tooltip-top" data-tip="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <path
                                    d="M13 2.4375C10.9109 2.4375 8.86879 3.05698 7.13179 4.2176C5.3948 5.37822 4.04098 7.02786 3.24153 8.95791C2.44208 10.888 2.2329 13.0117 2.64046 15.0606C3.04802 17.1096 4.054 18.9916 5.53119 20.4688C7.00838 21.946 8.89044 22.952 10.9394 23.3595C12.9883 23.7671 15.1121 23.5579 17.0421 22.7585C18.9721 21.959 20.6218 20.6052 21.7824 18.8682C22.943 17.1312 23.5625 15.0891 23.5625 13C23.5595 10.1996 22.4458 7.51466 20.4656 5.53445C18.4853 3.55424 15.8004 2.44046 13 2.4375ZM12.5938 7.3125C12.8348 7.3125 13.0704 7.38398 13.2709 7.5179C13.4713 7.65181 13.6275 7.84216 13.7197 8.06486C13.812 8.28755 13.8361 8.5326 13.7891 8.76902C13.7421 9.00543 13.626 9.22259 13.4555 9.39304C13.2851 9.56348 13.0679 9.67956 12.8315 9.72658C12.5951 9.77361 12.3501 9.74947 12.1274 9.65723C11.9047 9.56498 11.7143 9.40877 11.5804 9.20835C11.4465 9.00793 11.375 8.7723 11.375 8.53125C11.375 8.20802 11.5034 7.89802 11.732 7.66946C11.9605 7.4409 12.2705 7.3125 12.5938 7.3125ZM13.8125 18.6875C13.3815 18.6875 12.9682 18.5163 12.6635 18.2115C12.3587 17.9068 12.1875 17.4935 12.1875 17.0625V13C11.972 13 11.7654 12.9144 11.613 12.762C11.4606 12.6097 11.375 12.403 11.375 12.1875C11.375 11.972 11.4606 11.7654 11.613 11.613C11.7654 11.4606 11.972 11.375 12.1875 11.375C12.6185 11.375 13.0318 11.5462 13.3366 11.851C13.6413 12.1557 13.8125 12.569 13.8125 13V17.0625C14.028 17.0625 14.2347 17.1481 14.387 17.3005C14.5394 17.4528 14.625 17.6595 14.625 17.875C14.625 18.0905 14.5394 18.2972 14.387 18.4495C14.2347 18.6019 14.028 18.6875 13.8125 18.6875Z"
                                    fill="#9B52DC"
                                />
                            </svg>
                        </div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <div
                            style={{
                                backgroundImage: `url(${img5})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={
                                "card rounded-3xl w-full bg-purple-600 dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "
                            }
                        >
                            <div className="w-full flex flex-col justify-between rounded-2xl min-h-[198px] h-full bg-black bg-opacity-30 p-6">
                                <div className="flex w-full justify-between items-center">
                                    <button
                                        className="rounded-full px-4 py-2 text-white"
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.30)",
                                        }}
                                    >
                                        Draft
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="27"
                                            viewBox="0 0 27 27"
                                            fill="none"
                                            className="cursor-pointer transition-all hover:scale-105"
                                        >
                                            <g clip-path="url(#clip0_7368_316)">
                                                <path
                                                    d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7368_316">
                                                    <rect
                                                        width="27"
                                                        height="27"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        Gift
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {exclusiveProducts.map((product) => (
                            <div
                                style={{
                                    backgroundImage: `url(${img5})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                                className={
                                    "card rounded-3xl w-full bg-purple-600 dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out "
                                }
                            >
                                <div className="w-full flex flex-col justify-between rounded-2xl min-h-[198px] h-full bg-black bg-opacity-30 p-6">
                                    <div className="flex w-full justify-between items-center">
                                        <button
                                            className="rounded-full px-4 py-2 text-white"
                                            style={{
                                                background:
                                                    "rgba(255, 255, 255, 0.30)",
                                            }}
                                        >
                                            {product.quantity}
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="27"
                                                height="27"
                                                viewBox="0 0 27 27"
                                                fill="none"
                                                className="cursor-pointer transition-all hover:scale-105"
                                                onClick={async () =>
                                                    await handleEditExclusiveProduct(
                                                        exclusiveProducts.id
                                                    )
                                                }
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <button
                                                onClick={() =>
                                                    deleteExclusiveItem(
                                                        product.id
                                                    )
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="27"
                                                    viewBox="0 0 27 27"
                                                    fill="none"
                                                    className="cursor-pointer transition-all hover:scale-105"
                                                >
                                                    <g clip-path="url(#clip0_7368_316)">
                                                        <path
                                                            d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_7368_316">
                                                            <rect
                                                                width="27"
                                                                height="27"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-white font-semibold text-lg">
                                            {product.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link
                            to="/app/products/add-exclusive-product"
                            className="min-h-[198px] flex dark:bg-base-100 dark:shadow hover:shadow-md rounded-3xl flex-col items-center h-56 gap-2 text-accent w-full justify-center transition-all hover:scale-105"
                        >
                            <span className="flex items-center justify-center p-1 bg-accent rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Add product
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DigitalProducts;
