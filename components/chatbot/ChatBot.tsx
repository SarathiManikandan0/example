"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedModalDemo } from "@/components/Previews/PatientButton";

const Chatbot: React.FC = () => {
  const handleAppointmentClick = () => {
    window.location.href = "/pages/patientcare";
  };

  const handleSatisfactionClick = () => {
    alert("Thank you for your feedback!");
    window.location.href = "/";
  };

  return (
    <div>
      <h1 className="heading p-10">
        Ask <span className="text-purple">The Ai About Your Health Issue</span>
      </h1>

      <div style={styles.container}>
       
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/YSbM5vB_AS3xCqrSDgRsc"
          style={styles.iframe}
        ></iframe>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-10 pb-10 items-center">
        <div className="flex justify-center">
          <Button
            variant="secondary"
            className="bg-slate-400 p-4 items-center justify-center"
            onClick={handleSatisfactionClick}
          >
            Return to Home Page
          </Button>
        </div>
        <div className="flex justify-center">
          <AnimatedModalDemo />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "90%",
    margin: "0 auto",
    paddingTop: "10px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  iframe: {
    width: "100%",
    height: "700px",
    border: "none",
    borderRadius: "8px",
  },
};

export default Chatbot;
