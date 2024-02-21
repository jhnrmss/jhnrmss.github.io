import { Input } from "../../../components/AppInput";
import { Textarea } from "../../../components/AppTextArea";
import { Button } from "../../../components/AppButton/button";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactForm() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const formElement = useRef<HTMLFormElement>(null);
  console.log(formElement.current);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, formElement.current as HTMLFormElement, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={formElement} onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="#name" className="text-gray-700 font-medium">
          Name
        </label>
        <Input
          id="name"
          type="text"
          name="user_name"
          placeholder="Enter your name "
          className="placeholder:text-gray-400 border-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="#Email" className="text-gray-700 font-medium ">
          Email
        </label>

        <Input
          id="Email"
          type="text"
          name="user_email"
          placeholder="Enter your email"
          className="placeholder:text-gray-400 border-gray-400 outline-none ring-0"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="#Message" className="text-gray-700 font-medium">
          Message
        </label>

        <Textarea
          id="Message"
          name="message"
          placeholder="Enter your message"
          className="placeholder:text-gray-400 border-gray-400 outline-none ring-0"
        />
      </div>
      <div>
        <Button
          className="inline-flex w-1/2 items-center space-x-2"
          type="submit"
        >
          <p>Send Message</p>
          <IoIosSend />
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
