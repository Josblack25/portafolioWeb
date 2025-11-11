import React, { useState } from "react";
import {p3 , globe_location_pin, stacked_email} from "../assets/contact/index"
export default function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f5d5a85-5328-454a-8fae-6061c81d2f3c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className=" w-screen absolute m-h-screen mt-30 flex items-center justify-center p-4 black-gradient font-display text-white">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mt-[-50px]">

        {/* Left Side */}
        <div className="space-y-8 ">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-cuarto dark:text-white">Hablemos</h1>
            <p className="mt-4 text-lg text-cuarto">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? <br /> Me encantaría saber de ti..
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                <img src={stacked_email} alt="stacked suvg"/>
              </div>
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <a className="text-primary hover:underline text-gray-400" href="mailto:hello@example.com">adonisjosuedaller26@gmail.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                <img src={globe_location_pin} alt="globe suvg"/>
              </div>
              <div>
                <h3 className="font-bold text-white">Location</h3>
                <p className="text-gray-400">Venezuela</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">

                <img src={p3} alt="p3 suvg" />
              </div>
              <div>

                <h3 className="font-bold text-white">Socials</h3>
                <div className="flex gap-4 mt-1">
                  <a className="text-primary hover:underline text-gray-400" href="#">GitHub</a>
                  <a className="text-primary hover:underline text-gray-400" href="#">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="violet-gradient p-8 rounded-xl shadow-lg">

          <form className="space-y-6" onSubmit={onSubmit}>

            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block m-1 p-1 rounded-lg black-gradient border-1">
                <span className="text-sm font-medium text-white">First Name</span>
                <input className="form-input mt-1 block w-full  border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 :text-white" placeholder="John" name="name" type="text" required />
              </label>

              <label className="block m-1 p-1 rounded-lg black-gradient border-1 ">
                <span className="text-sm font-medium text-white">Last Name</span>
                <input className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-white" placeholder="Doe" name="lastname" type="text" required />
              </label>

              <label className="block m-1 p-1 rounded-lg black-gradient border-1">
                <span className="text-sm font-medium text-white">Phone Number</span>
                <input className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-white" placeholder="+12 345 678" name="phone" type="tel" required />
              </label>
            </div>



            <label className="block black-gradient border-1 rounded-lg">
              <span className="text-sm font-medium text-white">Email Address</span>
              <input className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-white" placeholder="  john.doe@example.com" name="email" type="email" required />
            </label>

            <label className="block black-gradient border-1 rounded-lg">
              <span className="text-sm font-medium text-white">Message</span>
              <textarea className="form-input mt-1 block w-full border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-white" placeholder="Your message here..." name="email" rows="4" required />
            </label>

            <button
              type="submit"
              label='Submit'
              className='w-full flex justify-center items-center py-3 px-4 black-gradient border-1 rounded-lg shadow-sm text-base font-medium text-white transition-all duration-300 ${result === "sending..." ? "bg-primary-light" : "bg-primary hover:bg-primary-light" '
            >
              <h2>Send Now</h2>
            </button>
            <span>{result}</span>
          </form>

        </div>
      </div>
    </section>
  );
};