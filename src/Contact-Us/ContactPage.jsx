import axios from "axios";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your message. Please try again.");
    }
  };

  return (
    <section className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-0 lg:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            Reach out
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold py-4">
            Contact us
          </h2>
          <p className="text-gray-600 mb-8">
            Email, call, or complete the form to reach us, we’d love to hear
            from you!
          </p>
          <p className="text-gray-600 font-bold underline mb-4">
            email@example.com
          </p>
          <p className="text-gray-600 font-bold underline mb-8">
            +66 45789 99879
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Customer Support</h4>
              <p className="text-gray-600">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">FAQ</h4>
              <p className="text-gray-600">
                There’s a chance your question or query has already been
                answered. Check out our{" "}
                <a href="#" className="text-blue-600 font-medium underline">
                  FAQ
                </a>{" "}
                to see!
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-4xl py-4 text-left">
            Get in touch
          </h3>
          <p className="text-gray-600 mb-8 text-left">Reach out anytime...</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {/* Message */}
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 h-32 resize-none"
              required
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #1F6328, #019F0D, #1F6328)",
              }}
            >
              Submit
            </button>
            {/* Terms */}
            <p className="text-sm text-gray-600 text-center">
              By contacting us, you agree to our{" "}
              <a href="#" className="text-blue-600 font-medium underline">
                Terms of service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 font-medium underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
