"use client";
import React, { useState } from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import "./styles/GradientBorder.css";

export default function MailForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setSending(true);
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      } else {
        setEmail("");
        setMessage("");
        setFullname("");
      }
      console.log(fullname, email, message);
      setSending(false);
    }
  };

  return (
    <div className="px-4 md:ml-[10%] md:w-7/12 md:px-0">
      <div>
        <SecondaryTitle align="left">Contact us</SecondaryTitle>
      </div>
      <form className="mt-8 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className={`mb-2 block pl-1 font-visby text-lg text-primaryWhite`} htmlFor="name">
            Name
          </label>
          <input
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full appearance-none rounded-2xl px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            type="text"
            placeholder="Jane Doe"
          />
        </div>
        <div className="mb-4">
          <label className={`mb-2 block pl-1 font-visby text-lg text-primaryWhite`} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full appearance-none rounded px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            placeholder="Jane@domain.com"
          />
        </div>
        <div className="mb-4">
          <label className={`mb-2 block pl-1 font-visby text-lg text-primaryWhite`} htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full resize-none appearance-none rounded px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="message"
            placeholder="Type your query here..."
          />
        </div>
        <OutlinedButton disabled={sending} type="submit" className="px-24">
          SEND
        </OutlinedButton>
      </form>
    </div>
  );
}
