import ContactForm from "./Form";
import ContactCards from "./Cards";
function Contact() {
  return (
    <div>
      <div className="space-y-2">
        <p className="text-4xl font-extrabold tracking-wider text-gray-700">
          Get in touch
        </p>
        <p className="text-base tracking-wider text-gray-600">
          If you have any inquiries or something to discuss, Here are the few
          ways to reach out with me.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-20 content-center">
        <div className="flex flex-col  space-y-4 items-center justify-center">
          <p className="text-2xl font-medium tracking-wider text-gray-700">
            Talk to me
          </p>
          <ContactCards />
        </div>
        <div className=" space-y-4 items-center justify-center">
          <p className="text-2xl text-center font-medium tracking-wider text-gray-700">
            Write a message
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
