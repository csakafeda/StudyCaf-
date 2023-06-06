import React from "react";
import {MenuItems} from "./menuItems";
import bg from "../../pictures/menu_bg.jpg"

const Menu: React.FC = () => {
    return (
        <div className="bg-image-container bg-cover min-h-screen"
             style={{backgroundImage: `url(${bg})`, backgroundRepeat: "repeat", height: "100%"}}>
            <div className={"mr-7 ml-7"}>
                <h2 className=" rounded-lg bg-sand text-center text-2xl font-bold mr-72 ml-72 p-5 bg-opacity-90  shadow-lg">
                    Study Cafe - Menu
                </h2>
                <div className="p-8 flex justify-center items-center mr-5 ml-5 mb-4">
                    <div className="flex gap-1 flex-wrap justify-center items-center">
                        {MenuItems.map((category, index) => (
                            <div key={index}
                                 className=" w-80 rounded-lg overflow-hidden shadow-lg bg-opacity-90 bg-sand">
                                <h2 className="text-xl font-semibold py-4 px-6 bg-camel bg-opacity-60">
                                    {category.name}
                                </h2>
                                <ul className="p-6 divide-y divide-gray-700">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="mb-4 py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold">
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div
                                                    className="inline-flex items-center text-base font-semibold">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
