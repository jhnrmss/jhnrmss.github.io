import { FaArrowRightLong } from "react-icons/fa6";
import { Card, CardContent, CardTitle } from "../../../components/AppCard/card";
import { contactData } from "../../../api/Personal";

function ContactCards() {
  return (
    <>
      {contactData.map((contact) => (
        <Card key={contact.ContactTitle} className="w-full md:w-1/2">
          <CardContent className="text-center">
            <CardTitle className="flex justify-center mt-4">
              <contact.Icon />
            </CardTitle>
            <p className="text-base tracking-wider text-gray-600 truncate ...">
              {contact.ContactTitle}
            </p>
            <a
              href={contact.Link}
              className="inline-flex space-x-2 items-center font-medium outline-none"
            >
              Write me <FaArrowRightLong className="h-2 w-3" />
            </a>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default ContactCards;
