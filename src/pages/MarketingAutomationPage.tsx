import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
export default function MarketingAutomationPage() {
  const benefits = [
    "Automated email sequences that nurture leads 24/7",
    "Smart segmentation that delivers personalized messages",
    "Lead scoring to identify your hottest prospects",
    "CRM integration for seamless customer management",
    "Analytics dashboards that track every conversion",
    "Social media scheduling and automated posting"
  ];
  const features = [
    { title: "Email Marketing", description: "Sophisticated campaigns that convert subscribers into customers" },
    { title: "Lead Nurturing", description: "Automated workflows that guide prospects through your sales funnel" },
    { title: "Customer Retention", description: "Re-engagement campaigns that bring customers back" },
    { title: "Analytics & Reporting", description: "Real-time insights into campaign performance and ROI" }
  ];
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <Zap className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Marketing Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Convert More Leads While<br />
            <span className="text-[#D4A574]">You Sleep</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            Smart marketing systems that work around the clock to nurture leads, engage customers, and grow your business on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Automate Your Growth
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D4A574] text-[#F4E4C1] px-8 py-4 rounded-lg hover:bg-[#D4A574]/10 transition-colors cursor-pointer font-bold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1810] mb-12 text-center">
            What Marketing Automation Delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#E8DCC8]">
                <CheckCircle className="w-6 h-6 text-[#8B6F47] flex-shrink-0 mt-1" />
                <p className="text-[#2C1810] text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4E4C1] mb-12 text-center">
            Our Automation Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-8 border border-[#D4A574]/20">
                <h3 className="text-2xl font-bold text-[#F4E4C1] mb-4">{feature.title}</h3>
                <p className="text-[#F4E4C1]/80 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's build marketing systems that work for you 24/7, converting leads and growing your business while you focus on what you do best.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}