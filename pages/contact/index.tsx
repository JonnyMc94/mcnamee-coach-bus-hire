"use client";
import React, { useState } from "react";
import Head from "next/head";
import { BsTelephone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";
import ContactLayout from "./layout";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    subject: false,
    message: false,
  });

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const dataSet = [
    { info: "+353 (85) 124 4312", icon: BsTelephone },
    { info: "mcnameecoachhire@gmail.com", icon: MdMarkEmailUnread },
    { info: "Stoney Road, Oldcastle, Co Meath", icon: PiMapPinFill },
  ];

  type TempErrors = {
    fullname: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  };

  const handleValidation = () => {
    let tempErrors = {} as TempErrors;
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonText("Sending...");

    if (!handleValidation()) {
      return;
    } else {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullname,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccessMessage(true);

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");

        // Change button text to 'Sent'
        setButtonText("Sent");
        // Change button text back to 'Send' after 5 seconds
        setTimeout(() => {
          setButtonText("Send");
        }, 5000);
      } else {
        // Show error message
        setShowFailureMessage(true);
        // alert("An error occurred; email not sent");
      }
    }
  };

  return (
    <ContactLayout className="p-5 sm:p-14">
      <Head>
        <title>Contact Us Page</title>
        <meta
          name="description"
          content="You can contact us with any queries here"
        />
      </Head>
      <header className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 pt-4 sm:pt-10 lg:px-8 xl:px-20 bg-inherit h-auto sm:h-[90vh]">
        <div className="grid grid-rows-2 mb-4 sm:mb-10 md:mt-10 sm:mt-20 lg:mr-4 xl:mr-20">
          <div className="mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold mt-2 sm:mt-4 text-slate-800">
              No run too big or small!
            </h1>
            <p className="text-sm sm:text-base text-slate-800 mt-2 sm:mt-4 font-light">
              We would love to hear from you. Please reach out to us.
            </p>
            <div className="">
              {dataSet.map((data, i) => {
                const Icon = <data.icon />;

                return (
                  <div
                    className="inline-flex text-sm sm:text-base text-slate-800 mt-2 sm:mt-4 font-light"
                    key={i}
                  >
                    <span className="pr-2 pt-1 text-xl">{Icon}</span>
                    <span className="pr-6 mt-0.5"> {data.info} </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col p-4 sm:p-8 bg-white dark:bg-blue-500 h-auto sm:h-[80vh] mb-4 sm:mb-10 md:mt-10 sm:mt-20 lg:mr-4 xl:mr-20"
        >
          <h1 className="text-xl sm:text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-4 sm:mt-16 dark:text-gray-50"
          >
            Full name
            <span className="text-red-500 pl-2">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-slate-800"
          />
          {errors.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 sm:mt-16 dark:text-gray-50"
          >
            E-mail<span className="text-red-500 pl-2">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-slate-800"
          />
          {errors.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 sm:mt-16 dark:text-gray-50"
          >
            Subject<span className="text-red-500 pl-2">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-slate-800"
          />
          {errors.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 sm:mt-16 dark:text-gray-50"
          >
            Message<span className="text-red-500 pl-2">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-slate-800"
          ></textarea>
          {errors.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-6 sm:px-10 mt-4 sm:mt-10 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-base sm:text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </header>
    </ContactLayout>
  );
}
