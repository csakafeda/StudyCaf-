import React from "react";
import { MenuItems } from "./menuItems";
import bg from "../../pictures/background/menu_bg.jpg";

const Menu: React.FC = () => {
    return (
        <div className="font-serif bg-image-container bg-cover min-h-screen"
             style={{
                 backgroundImage: `url(${bg})`,
                 backgroundRepeat: "repeat",
                 height: "100%",
             }}>
            <div className="mx-auto max-w-4xl">
                <h2 className="rounded-lg bg-sand text-center text-3xl font-bold p-8 bg-opacity-90 shadow-lg">
                    Menu
                </h2>
                <div className="p-8 flex justify-center mb-4 items-stretch">
                    <div className="flex gap-4 flex-wrap justify-center items-center">
                        {MenuItems.map((category, index) => (
                            <div key={index}
                                 className="w-96 rounded-lg overflow-hidden shadow-lg bg-opacity-90 bg-sand">
                                <h2 className="text-3xl font-semibold py-6 px-8 bg-camel bg-opacity-60">
                                    {category.name}
                                </h2>
                                <ul className="p-6 divide-y divide-gray-700">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="mb-6 py-4 sm:py-6">
                                            <div className="flex items-center">
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-lg">
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-xl font-semibold text-amber">
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
