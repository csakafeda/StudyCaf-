import React from "react";
import facebookIcon from "../pictures/socials/facebook.png";
import instagramIcon from "../pictures/socials/instagram.png";

export default function Footer() {
    return (
        <div className="w-full text-center bg-camel static bottom-0 pt-4">
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center mr-8">
                    <h3 className="text-sand font-semibold mb-2">Follow Us</h3>
                    <div className="flex">
                        <a
                            href="https://www.facebook.com/studycafe"
                            target="_blank"
                            className="flex items-center mr-4 text-sand hover:text-white"
                        >
                            <img src={facebookIcon} alt="Facebook" className="h-4 w-4 mr-2" />
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/thegardenstudioandcafe/"
                            target="_blank"
                            className="flex items-center text-sand hover:text-white"
                        >
                            <img src={instagramIcon} alt="Instagram" className="h-4 w-4 mr-2" />
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center mx-8">
                    <h3 className="text-sand font-semibold mb-2">Contact</h3>
                    <div>
                        <p className="text-sand">Email: info@studycafe.com</p>
                        <p className="text-sand">Phone: 00-33-555-7777</p>
                        <p className="text-sand">Address: 1071 Budapest, Dohány utca 999</p>
                    </div>
                </div>
            </div>
            <p className="text-sm text-sand mt-8">
                {new Date().getFullYear()} Study Cafe&copy;. All rights reserved.
            </p>
        </div>
    );
}
