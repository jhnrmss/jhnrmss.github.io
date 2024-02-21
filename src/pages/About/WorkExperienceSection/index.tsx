import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/AppAccordion/accordion";
import { workExperienceData } from "../../../api/Personal";

function WorkExperience() {
  return (
    <section className="border-b border-gray-300 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-20">
        <div className="flex items-center justify-center">
          <p className="text-xl font-medium tracking-wider text-gray-700">
            Work Experience
          </p>
        </div>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="w-full border rounded-md px-4 text-start "
          >
            {workExperienceData.data.map((exp, index) => (
              <AccordionItem key={exp.title} value={exp.title + "-" + index}>
                <AccordionTrigger className="data-[state=open]:text-green-700  tracking-wider">
                  {exp.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className=" tracking-wider">
                    <p className="text-sm font-medium text-gray-700">
                      {exp.company}
                    </p>
                    <p className="text-xs  text-gray-700">
                      {`${exp.started} - ${exp.ended}`}
                    </p>
                    <ul className="list-disc space-y-2 mt-4">
                      {exp.description.map((desc, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
