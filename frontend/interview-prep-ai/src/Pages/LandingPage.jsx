import React, { useState } from 'react';
import HERO_IMG from '../assets/hero-img.png';
import { APP_FEATURES } from '../utils/data';
import Modal from "../components/Modal";
// import { UserContext } from '../context/userContext';
import ProfileInfoCards from '../components/Cards/ProfileInfoCards';

const LandingPage = () => {
  // const { user } = useContext(UserContext);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <div className="w-full min-h-screen bg-[#F8FAFF] relative">
        <div className="w-[500px] h-[500px] bg-indigo-200/30 blur-[100px] absolute top-0 left-0 -z-10" />

        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold text-black">
            Interview Prep AI
          </div>

          {false ? (
            <ProfileInfoCards />
          ) : (
            <button
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button>
          )}
        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-12 gap-10 max-w-[1200px] mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ace Interviews with <br />
              <span className="text-indigo-600">AI-Powered</span> Learning
            </h1>

            <p className="text-gray-700 text-lg">
              Get role-specific questions, expand answers when you need them,
              dive deeper into concepts, and organize your way. From preparation
              to mastery — your ultimate interview toolkit is here.
            </p>

            <button className="mt-4 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={HERO_IMG}
              alt="Hero"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </section>
      </div>

      {/* Features */}
      <div className="w-full min-h-full bg-[#F8FAFF] mt-2">
        <div className="container mx-auto px-4 pt-6 pb-10">
          <section className="mt-5">
            <h2 className="text-2xl font-medium text-center mb-12">
              Features That Make You Shine
            </h2>

            <div className="flex flex-col items-center gap-12">
              {/* First 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg shadow-indigo-100 transition border border-indigo-100">
                    <h3 className="text-base font-semibold mb-3"> {feature.title} </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Remaining 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg shadow-indigo-100 transition border border-indigo-100">
                    <h3 className="text-base font-semibold mb-3"> {feature.title} </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      </div>

      <Modal isOpen={openAuthModal} onClose={() => {
        setOpenAuthModal(false);
        setCurrentPage("login");
      }} hideHeader>

        <div>
          {currentPage === "Login" && (<Login setCurrentPage={setCurrentPage} />)}
          {currentPage === "SignUp" && (<signUp setCurrentPage={setCurrentPage} />)}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
