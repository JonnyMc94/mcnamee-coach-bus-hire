"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { isMobileDevice,  } from "@/types/deviceState";

const Whatsapp: React.FC = () => {

  const handleClick = async () => {
    // Replace 'your_whatsapp_phone_number' with the actual phone number you want to contact
    const whatsappPhoneNumber = "+353838622454";
    if (typeof window !== "undefined") {
      if (navigator && navigator.share) {
        try {
          await navigator.share({
            title: "Share via WhatsApp",
            text: "Check out this WhatsApp message",
            url: `https://wa.me/${whatsappPhoneNumber}`,
          });
        } catch (error) {
          console.error("Error sharing via navigator.share:", error);
        }
      } if (isMobileDevice()) {
          // Open the WhatsApp link in the same tab to trigger the WhatsApp app on mobile devices
          window.location.href = `https://wa.me/${whatsappPhoneNumber}`;
        } else {
          // Open the WhatsApp link in a new tab on desktop devices
          window.open(`https://web.whatsapp.com/send?phone=${whatsappPhoneNumber}`, "_blank");
        }
      }
    };

  return (
    <>
      <div
        className="bg-green-600 w-min p-2 rounded-full fixed 
          bottom-10 right-4 cursor-pointer md:right-8"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </div>
    </>
  );
};

export default Whatsapp;
