import {Link} from "react-router-dom";
import React from "react";
import reserve from "../../pictures/reserve.jpeg";

const ReservationInfo = () => {
    return (
        <div className="flex flex-wrap gap-8
        lg:flex-wrap lg:justify-center lg:mx-16
        xl:mx-32 ">

            <div className="w-full lg:w-1/3 ">
                <div className="flex justify-center">
                    <img
                        src={reserve}
                        alt="Menu book and sandwich"
                        className="rounded-lg shadow-lg object-contain"
                        style={{width: '100%', height: 'auto'}}
                    />
                </div>
            </div>
            <div className="max-w-3xl w-full lg:w-1/3">
                <p className="text-3xl font-semibold mb-10">All-day breakfast & brunch</p>
                <p className="text-lg">
                    <span className="font-semibold text-lg">Study Cafe - Budapest </span>
                    | All-day coffee, desserts & brunch restaurant in the center of Budapest
                    offering specialty coffee, breakfast, and also vegan, lactose- and gluten-free options.
                </p>
                <p className="text-lg">
                    If you are looking for the best all-day breakfast & brunch in Budapest, look no further.
                    We serve delicious food, fresh juices and smoothies, salads, sandwiches of your choice and
                    of course great specialty coffee drinks all day long.
                </p>
                <p className="text-lg">
                    We squeeze fresh orange juice and prepare fresh smoothies every day in the morning.
                    You will also find gluten-free and lactose-free options as well as vegetarian and
                    vegan meals on our menu.
                </p>
                <p className="text-lg">
                    We serve breakfast and brunch all day, every day of the week from 8.00 a.m.
                </p>
                <button
                    className="bg-transparent text-camel border-camel font-semibold py-2 px-4 border rounded mt-6
                     hover:border-transparent hover:bg-camel hover:text-white"
                >
                    <Link to={"/menu"} className="text-lg font-semibold">
                        See our menu here
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ReservationInfo;