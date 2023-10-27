import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DoubtCardProps {
  doubt: string;
  answer: string;
}

export function DoubtCard({ doubt, answer}: DoubtCardProps){
  return (
    <Accordion type="single" collapsible className='bg-primary p-1 text-sm max-w-xs'>
      <AccordionItem value="item-1">
        <AccordionTrigger>{doubt}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}