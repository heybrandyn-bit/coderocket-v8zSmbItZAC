import { Camera, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
export default function LiveEventPage() {
  const benefits = [
    "Multi-camera production for dynamic coverage",
    "Professional audio capture and mixing",
    "Live streaming to multiple platforms simultaneously",
    "Same-day highlight reels and social media clips",
    "Full event documentation for future marketing",
    "Interviews and testimonials captured on-site"
  ];
  const eventTypes = [
    { title: "Conferences & Summits", description: "Capture keynotes, panels, and networking moments" },
    { title: "Product Launches", description: "Document your big reveal with cinematic quality" },
    { title: "Corporate Events", description: "Team gatherings, celebrations, and company milestones" },
    { title: "Workshops & Training", description: "Record educational content for future distribution" },
    { title: "Grand Openings", description: "Celebrate your new location or business launch" },
    { title: "Community Events", description: "Capture the energy of local gatherings and festivals" }
  ];
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <Camera className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Live Event Capture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Extend the Impact of<br />
            <span className="text-[#D4A574]">Your Events</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            Professional event documentation that captures every important moment and creates content you can use for months to come—from promotional videos to social media highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Book Event Coverage
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
            Professional Event Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#E8DCC8]">
                <CheckCircle className="w-6 h-6 text-[#C89968] flex-shrink-0 mt-1" />
                <p className="text-[#2C1810] text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Event Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4E4C1] mb-12 text-center">
            Events We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
                <h3 className="text-xl font-bold text-[#F4E4C1] mb-3">{type.title}</h3>
                <p className="text-[#F4E4C1]/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Capture Your Next Event
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't let your event's impact end when the doors close. Let's create content that extends its reach and continues to work for your business.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Schedule Event Coverage
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}