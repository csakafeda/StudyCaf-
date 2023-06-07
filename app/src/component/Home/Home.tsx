import React, {useState} from "react";
import backgroundImage from "../../pictures/coffee_beans.jpg";
import ContactForm from "./ContactForm";
import AboutUsSection from "./AboutUsSection";
import Footer from "../Footer";
import inside from "../../pictures/inside1.jpeg";

const Home: React.FC = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleContactButtonClick = () => {
        setShowContactForm(true);
    };

    const handleCloseForm = () => {
        setShowContactForm(false);
    };

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
                    minHeight: "50vh"
                }}
            >
                <div className="py-20 px-4 text-center m-auto">
                    <h1 className="text-5xl font-bold text-white tracking-wider">
                        Welcome to Study Cafe
                    </h1>
                    <p className="mt-2 text-white text-2xl">
                        ~ Serving the finest coffee since 2023 ~
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center mt-8 m-9 md:flex-row md:mt-16">
                <div className="w-full md:w-1/2">
                    <AboutUsSection/>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={inside} alt="Inside" className="rounded-lg shadow-lg"/>
                </div>
            </div>

            <div className="fixed bottom-4 right-4">
                {showContactForm ? (
                    <ContactForm onClose={handleCloseForm}/>
                ) : (
                    <button
                        className="bg-sand text-white font-semibold py-5 px-6 rounded"
                        onClick={handleContactButtonClick}>
                        Contact us
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
