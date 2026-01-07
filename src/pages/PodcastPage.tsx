import { Mic, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
export default function PodcastPage() {
  const benefits = [
    "Professional audio recording and editing",
    "Show concept development and branding",
    "Guest booking and interview preparation",
    "Distribution to all major podcast platforms",
    "Show notes, transcripts, and promotional content",
    "Analytics and growth strategy"
  ];
  const features = [
    { title: "Podcast Strategy", description: "Define your show's format, audience, and unique value proposition" },
    { title: "Recording & Production", description: "Studio-quality audio recording and professional post-production" },
    { title: "Guest Management", description: "Find, book, and prep guests who add value to your show" },
    { title: "Distribution", description: "Publish to Apple Podcasts, Spotify, and all major platforms" },
    { title: "Content Repurposing", description: "Turn episodes into blog posts, social content, and more" },
    { title: "Growth & Promotion", description: "Marketing strategies to build and engage your audience" }
  ];
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] via-[#4A2818] to-[#2C1810]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-full px-6 py-2 mb-8">
            <Mic className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#F4E4C1] text-sm font-medium">Podcast Production</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4E4C1] mb-6 leading-tight">
            Build a Loyal Following<br />
            <span className="text-[#D4A574]">Through Voice</span>
          </h1>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-3xl mx-auto">
            From concept to distribution, we handle everything you need to launch and grow a podcast that builds deep connections with your audience and establishes you as an industry leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg"
            >
              Launch Your Podcast
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
            Complete Podcast Production Services
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
            Everything Your Podcast Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
                <h3 className="text-xl font-bold text-[#F4E4C1] mb-3">{feature.title}</h3>
                <p className="text-[#F4E4C1]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Show?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create a podcast that builds your authority, engages your audience, and opens new opportunities for your business.
          </p>
          <Link to="/#contact">
            <Button className="bg-[#D4A574] hover:bg-[#E8C792] text-[#2C1810] px-8 py-6 text-lg font-bold cursor-pointer">
              Launch Your Podcast
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}