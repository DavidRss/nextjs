import React, { useState } from "react";
import { Link } from "react-router-dom";

function PhysProductCard({ data }) {
    const [hovered, setHovered] = useState(null);

    return (
        <>
            {data.map((item, index) => (
                <Link
                    to={`/app/products/create-physical-product?mockup=${item.mockup}`}
                    key={index}
                    className="w-full md:max-h-[535px] h-full flex items-end max-w-md rounded-3xl bg-cover bg-center xl:bg-left-top bg-no-repeat transition-all hover:-translate-y-1  cursor-pointer relative"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img
                        className="hover:brightness-75 w-full h-full rounded-3xl"
                        src={item.picturesrc}
                        alt={item.name}
                    />
                    {hovered === index && (
                        <button
                            type="button"
                            className="flex items-center gap-2 bottom-8 left-8 brightness-100 transition-transform hover:translate-x-5 absolute"
                        >
                            <h3 className="uppercase text-white ">
                                {item.NameProduct}
                            </h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                            >
                                <path
                                    d="M16.8455 13.5415L4.16634 13.5415L4.16634 11.4581L16.8455 11.4581L11.258 5.87062L12.7309 4.3977L20.833 12.4998L12.7309 20.6019L11.258 19.129L16.8455 13.5415Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    )}
                </Link>
            ))}
        </>
    );
}

export default PhysProductCard;
