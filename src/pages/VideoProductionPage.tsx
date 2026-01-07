import { Video, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
export default function VideoProductionPage() {
  const benefits = [
    "Professional cinematic quality that rivals major productions",
    "Brand storytelling that creates emotional connections",
    "Product demos and explainer videos that drive conversions",
    "Social media content optimized for maximum engagement",
    "Customer testimonials that build trust and credibility",
    "Corporate videos that communicate your mission"
  ];
  const process = [
    { step: "Discovery", description: "We learn your story, goals, and target audience" },
    { step: "Creative Planning", description: "Develop concepts, scripts, and shot lists" },
    { step: "Production", description: "Professional filming with cinema-grade equipment" },
    { step: "Post-Production", description: "Editing, color grading, sound design, and effects" },
    { step: "Delivery", description: "Optimized files for all platforms and purposes" }
  ];
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <Video className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Professional Video Production</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Tell Your Story Through<br />
            <span className="text-[#D4A574]">Compelling Video</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            From concept to final cut, we create video content that captures attention, tells your story authentically, and drives real business results for Atlanta's main street businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Start Your Project
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
            What Video Production Can Do for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#E8DCC8]">
                <CheckCircle className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <p className="text-[#2C1810] text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4E4C1] mb-12 text-center">
            Our Production Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
                <div className="w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center text-[#2C1810] font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#F4E4C1] mb-2">{item.step}</h3>
                <p className="text-[#F4E4C1]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your video production needs and create content that elevates your brand and connects with your audience.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}