import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_qwalnde", // Replace with your EmailJS Service ID
        "template_vs7jftz", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rcPHL4gsnwp5e0Akk" // Replace with your EmailJS User ID (Public Key)
      );

      console.log("Email sent successfully:", result.text);

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 relative">
          {/* Rocket and cloud effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-24 w-full flex justify-center pointer-events-none">
            <div className="relative w-64 h-40">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-16 bg-gray-700/40 rounded-full blur-xl"></div>
          
              <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-6 h-16 relative">
               
                  <div className="absolute bottom-0 left-0 w-2 h-3 bg-gray-500 transform -rotate-45 origin-bottom-right"></div>
                  
                 

                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-Audiowide md:text-5xl font-bold mb-4 relative z-20">
            Tell Us About Your <span className="text-red-600">Project</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Got a project in mind? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900/30 border border-gray-800 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, timeline, and budget..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6  bg-zinc-800 text-white font-medium rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;