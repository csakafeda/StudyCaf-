import {Link} from "react-router-dom";
import React from "react";
import inside from "../../pictures/inside1.jpeg";

const MakeReservation = () => {
    return (
        <div className="flex flex-wrap-reverse gap-3
        md:
        lg:flex-wrap lg:justify-center lg:mx-16
        xl:mx-32">
            <div className="w-full md:w-1/3">
                <img src={inside} alt="Inside" className="rounded-lg shadow-lg object-cover"/>
            </div>
            <div className="max-w-3xl w-full lg:w-1/3">
                <p className="text-3xl font-semibold mb-10">Book a table online</p>
                <p className="text-lg">
                    Make a reservation and guarantee your table for a hassle-free dining experience.
                    We are pleased to welcome your booking.
                </p>
                <p className="text-lg">
                    No reservation? No problem! We also accept walk-ins on a first-come, first-serve basis.
                </p>
                <button
                    className="bg-transparent text-camel border-camel font-semibold py-2 px-4 border rounded mt-6
                     hover:border-transparent hover:bg-camel hover:text-white"
                >
                    <Link to={"/contact"} className="text-lg font-semibold">
                        Make a reservation
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MakeReservation;