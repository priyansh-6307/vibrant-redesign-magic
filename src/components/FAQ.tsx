
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How does the video creation process work?",
      answer: "Our process is simple. After you sign up, we'll have an initial consultation to understand your goals and brand. Then, we'll develop content ideas and scripts for your approval. Once approved, our team handles all aspects of production, editing, and publishing. You'll receive a draft for feedback before the final version is published to your channel."
    },
    {
      question: "How long does it take to create a video?",
      answer: "Typically, our turnaround time is 7-10 business days from script approval to final delivery. For more complex projects or during high-volume periods, it might take slightly longer. We always communicate timelines upfront and keep you updated throughout the process."
    },
    {
      question: "Do I need to appear in the videos?",
      answer: "Not at all! While you can appear if you'd like, many of our clients prefer videos that don't require them on camera. We can create engaging content using stock footage, animations, screen recordings, or voiceovers. We'll work with you to determine the best format for your content goals."
    },
    {
      question: "Who owns the rights to the videos?",
      answer: "You do! Once we deliver the final videos and you've paid in full, you own all rights to the content we create for you. You're free to use the videos on any platform and for any purpose within your organization."
    },
    {
      question: "Can I request revisions to the videos?",
      answer: "Absolutely! Our packages include 1-2 rounds of revisions depending on your plan. We want you to be completely satisfied with the final product. Additional revision rounds can be arranged for an extra fee if needed."
    },
    {
      question: "How do you handle my YouTube account credentials?",
      answer: "Security is our priority. We offer two options: you can either grant our team limited access to your YouTube channel for publishing, or we can deliver the files for you to upload yourself. All credentials are stored securely and only accessed by essential team members."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. We don't lock you into long-term contracts. Simply provide notice before your next billing cycle, and we'll cancel your subscription with no hidden fees or complications."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-diskyo-violet/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our YouTube content creation service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`faq-${index}`}
                className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-diskyo-red">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Still have questions?</p>
          <a href="#" className="text-diskyo-red font-medium hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
