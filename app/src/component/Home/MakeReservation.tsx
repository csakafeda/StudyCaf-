import {Link} from "react-router-dom";
import React from "react";

const MakeReservation = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <p className="text-lg font-semibold">Book a table online</p>
                <p className="text-lg mt-4">
                    Make a reservation and guarantee your table for a hassle-free dining experience.
                    We are pleased to welcome your booking.
                </p>
                <p className="text-lg mt-4">
                    No reservation? No problem! We also accept walk-ins on a first-come, first-serve basis.
                </p>
                <button
                    className="bg-transparent text-camel border-camel font-semibold py-2 px-4 border rounded mt-6
                    hover:border-transparent hover:bg-camel hover:text-white">
                    <Link to={"/contact"} className="text-lg font-semibold">
                        Make a reservation
                    </Link>
                </button>
            </div>
        </>
    )
}

export default MakeReservation;