"use client";
import React, { useState } from "react";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleReservation = () => {
    const customer = {
      name,
      email,
      date,
      time,
    };
    if (customer) {
      localStorage.setItem("customer", JSON.stringify(customer));
      alert("Reserved your table successfully!")
    }
  };

  return (
    <section className="bg-gradient-to-r from-black to-slate-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-white">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="email"
              placeholder="Email..."
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-white">
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="w-fit mx-auto mb-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            <button onClick={handleReservation}>Reserved Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
