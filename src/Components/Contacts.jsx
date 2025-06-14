import React from "react";
import { toast } from "react-toastify";

const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d9d23dd-bd7d-478c-8b25-509f3a77163d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error(data.message)
    }
  };
  return (
    <div id="contacts">
      <div className="text-center mt-20">
        <h1 className="text-3xl">
          <span className="font-bold">Contact</span> With Us
        </h1>
        <p>
          Ready to Make a Move? Let's Build Your <br /> Future Together
        </p>
      </div>
     <form onSubmit={onSubmit} className="px-4">
  {/* Input fields (Name & Email) */}
  <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
    <div className="flex flex-col w-full md:w-64">
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="py-2 px-4 outline-none border border-gray-300 rounded mt-2"
        required
      />
    </div>

    <div className="flex flex-col w-full md:w-64 mt-5 md:mt-0">
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="py-2 px-4 outline-none border border-gray-300 rounded mt-2"
        required
      />
    </div>
  </div>

  {/* Message field */}
  <div className="flex justify-center mt-5">
    <div className="flex flex-col w-full md:w-[40%]">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="py-3 px-4 h-40 outline-none border border-gray-300 rounded mt-2 resize-none"
        required
      ></textarea>
    </div>
  </div>

  {/* Submit button */}
  <div className="flex justify-center mt-10 mb-5">
    <button
      type="submit"
      className="bg-blue-700 py-2 px-6 rounded text-white hover:bg-blue-800 transition"
    >
      {result ? result : "Send Message"}
    </button>
  </div>
</form>

      
    </div>
  );
};

export default Contacts;
