/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import Title from "../../../../components/Basic/Title";
import PhysProductCard from "../../../../components/Basic/PhysProductCard";

function PhysicianProduct() {
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        fetch("https://sheet.best/api/sheets/a8db9985-624a-4788-a558-0faad38b17fc")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        setVisibleItems(data.slice(0, 12));
    }, [data]);

    const handleShowMore = () => {
        setVisibleItems(data.slice(0, visibleItems.length + 12));
    };

    return (
        <div className="flex flex-col w-full items-start gap-8">
            <Title title="Click on a product to start designing" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
                <PhysProductCard data={visibleItems} />
            </div>
            {data.length > visibleItems.length && (
                <div className="w-full flex justify-center">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 text-center"
                        onClick={handleShowMore}
                    >
                        Show more
                    </button>
                </div>
            )}
        </div>
    );
}

export default PhysicianProduct;
