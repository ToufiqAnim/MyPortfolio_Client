import emailjs from "@emailjs/browser";
import { GoLocation, GoDeviceMobile } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cei0qjh",
        "template_epmpmac",
        e.target,
        "user_wEZRSPhXH4ZHOMDtkyb5A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-5 pb-16" id="contact">
      <h1 className="text-center font-bold text-[#64ffd4] text-5xl">
        Contacts
      </h1>
      <hr className="my-10 mx-auto  w-1/4 border-[#64ffd4]" />

      <div className="flex items-center justify-center gap-4 bg-[#112240] h-[60vh]">
        <div className="">
          <form onSubmit={sendEmail} className=" p-5 shadow">
            <h1 className="text-[#ccd6f6] text-xl mb-4">Send Your Message</h1>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border-0 rounded py-3 px-4 shadow w-full mb-3"
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-0 rounded py-3 px-4 shadow w-full mb-3"
                name="email"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-0 rounded py-3 px-4 shadow w-full mb-3"
                name="subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                rows={4}
                placeholder="Message"
                className="border-0 rounded py-3 px-4 shadow w-full"
                name="message"
              ></textarea>
            </div>
            <button
              className="border border-[#64ffda] text-[#64ffda] bg-[#112240] px-5 py-3"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className=" p-3 text-[#ccd6f6] flex flex-col justify-center">
          <h3 className="text-xl mb-3">Feel Free To Contact Me</h3>
          <p className="mb-2">
            <GoLocation /> Dhaka, Bangladesh
          </p>
          <p className="mb-2">
            <GoDeviceMobile /> +8801839779976
          </p>
          <p>
            <MdEmail /> toufiq034@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
