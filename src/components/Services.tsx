import { Video, Zap, PenTool, BookOpen, Mic, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional video content that captures your story and connects with your audience in authentic ways.',
    color: 'from-[#D4A574] to-[#C89968]',
    link: '/services/video-production'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Smart systems that nurture leads and convert prospects while you focus on running your business.',
    color: 'from-[#8B6F47] to-[#A68B5B]',
    link: '/services/marketing-automation'
  },
  {
    icon: PenTool,
    title: 'Ghostwriting',
    description: 'Your voice, amplified. We help you articulate your expertise in compelling content that builds authority.',
    color: 'from-[#D4A574] to-[#E8C792]',
    link: '/services/ghostwriting'
  },
  {
    icon: BookOpen,
    title: 'Publishing',
    description: 'Turn your knowledge into published works that establish you as the go-to expert in your field.',
    color: 'from-[#A68B5B] to-[#C4A678]',
    link: '/services/publishing'
  },
  {
    icon: Mic,
    title: 'Podcast Production',
    description: 'Build a loyal following through the power of voice—we handle everything from concept to distribution.',
    color: 'from-[#8B6F47] to-[#9F8254]',
    link: '/services/podcast'
  },
  {
    icon: Camera,
    title: 'Live Event Capture',
    description: 'Document your events with cinematic quality that extends their impact far beyond the venue.',
    color: 'from-[#C89968] to-[#D4A574]',
    link: '/services/live-events'
  }
];
export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">
            Complete Solutions for <span className="text-[#8B6F47]">Your Growth</span>
          </h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            Every service designed to help you attract more clients, build authority, and experience the freedom that comes with strategic communication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E8DCC8] hover:border-[#D4A574] cursor-pointer transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C1810] mb-4">{service.title}</h3>
              <p className="text-[#5A4A3A] leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#6F5739] transition-colors cursor-pointer font-bold text-lg shadow-lg"
          >
            Discover Your Perfect Solution
          </a>
        </div>
      </div>
    </section>
  );
}