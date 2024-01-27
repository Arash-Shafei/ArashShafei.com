function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-200 to-white p-4 text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-6">
            Feel free to shoot me a message with any inquiries
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none border-black"
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail Address"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none border-black"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none border-black"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 border-black">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
