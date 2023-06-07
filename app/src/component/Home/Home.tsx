import React, {useEffect, useState} from "react";
import backgroundImage from "../../pictures/background/coffee_beans.jpg";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import inside from "../../pictures/inside1.jpeg";
import MakeReservation from "./MakeReservation";

const Home: React.FC = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [insideLoaded, setInsideLoaded] = useState(false);

    const handleContactButtonClick = () => {
        setShowContactForm(true);
    };

    const handleCloseForm = () => {
        setShowContactForm(false);
    };

    useEffect(() => {
        const insideImage = new Image();
        insideImage.src = inside;
        insideImage.onload = () => {
            setInsideLoaded(true);
        };
    }, []);

    return (
        <div className="font-serif flex flex-col justify-center">
            <div
                className="bg-image-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "50vh",
                }}
            >
                <div className="py-4 px-4 text-center bg-white bg-opacity-60">
                    <div className={"hover:scale-150"}>
                        <h1 className="text-5xl font-bold text-black-brown tracking-wider ">
                            Study Cafe
                        </h1>
                        <p className="mt-2 text-black-brown text-m">Budapest</p>

                    </div>
                    <p className="mt-2 text-black-brown text-2xl">
                        ~ Serving the finest coffee since 2023 ~
                    </p>
                </div>
            </div>

            {insideLoaded && (
                <div className="flex flex-col flex-wrap justify-center mt-8 m-9 md:flex-row md:mt-16">
                    <div className="w-full md:w-1/2">
                        <AboutUs/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={inside} alt="Inside" className="rounded-lg shadow-lg"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={inside} alt="Inside" className="rounded-lg shadow-lg"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <MakeReservation/>
                    </div>
                </div>
            )}

            <div className="fixed bottom-4 right-4">
                {showContactForm ? (
                    <ContactForm onClose={handleCloseForm}/>
                ) : (
                    <button
                        className="bg-sand text-white font-semibold py-5 px-6 rounded"
                        onClick={handleContactButtonClick}
                    >
                        Contact us
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
