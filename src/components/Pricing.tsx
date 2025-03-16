
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingPlan = ({ name, price, description, features, popular = false }: PlanProps) => {
  return (
    <div className={`rounded-xl overflow-hidden ${popular ? 'border-2 border-diskyo-red' : 'border border-gray-800'}`}>
      {popular && (
        <div className="bg-gradient-to-r from-diskyo-red to-diskyo-violet py-1.5 text-white text-center text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
        <Button 
          className={popular ? "gradient-btn w-full" : "w-full bg-gray-800 hover:bg-gray-700"}
        >
          Get Started
        </Button>
        <div className="pt-6 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-diskyo-red mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-diskyo-red/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your YouTube content needs. All plans include our full-service production process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            name="Starter" 
            price="$1,499" 
            description="Perfect for businesses just starting on YouTube"
            features={[
              "2 videos per month",
              "Up to 5 minutes per video",
              "Basic editing & graphics",
              "Script writing & research",
              "SEO optimization",
              "Thumbnail creation",
              "Publishing assistance"
            ]}
          />
          
          <PricingPlan 
            name="Growth" 
            price="$2,499" 
            description="Ideal for growing your channel consistently"
            features={[
              "4 videos per month",
              "Up to 10 minutes per video",
              "Advanced editing & animations",
              "Custom thumbnail designs",
              "Keyword research & SEO",
              "Content strategy",
              "Performance analytics",
              "Priority support"
            ]}
            popular={true}
          />
          
          <PricingPlan 
            name="Professional" 
            price="$4,999" 
            description="For serious content creators and businesses"
            features={[
              "8 videos per month",
              "Up to 15 minutes per video",
              "Premium editing & effects",
              "Custom intro & outro",
              "Advanced SEO strategy",
              "Trend research & analysis",
              "Channel growth strategy",
              "Dedicated account manager",
              "Unlimited revisions"
            ]}
          />
        </div>
        
        <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-3">Need a custom solution?</h3>
          <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
            We offer tailored packages for businesses with specific needs. Contact us for a personalized quote.
          </p>
          <Button className="gradient-btn px-8 py-6 text-lg">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
