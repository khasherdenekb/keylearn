import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText } from "lucide-react"

const AccordionSections = ({ sections }: AccordionSectionsProps) => {
  return (
    <Accordion type="multiple" className="w-full">
      {sections.map(section => (
        <AccordionItem
          key={section.sectionId}
          value={section.sectionTitle}
          className="bg-custom-light-gray has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
        >
          <AccordionTrigger className="cursor-pointer py-2 text-[15px] leading-6 focus-visible:ring-0">
            <h5 className="font-medium">{section.sectionTitle}</h5>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-2">
            <ul>
              {section.chapters.map(chapter => (
                <li
                  key={chapter.chapterId}
                  className="text-muted-foreground flex items-center py-1 hover:underline"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span className="text-sm">{chapter.title}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionSections
