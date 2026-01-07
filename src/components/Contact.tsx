import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">
            Start Your <span className="text-[#8B6F47]">Transformation</span>
          </h2>
          <p className="text-xl text-[#5A4A3A] max-w-2xl mx-auto">
            Let's have a conversation about your business, your goals, and how we can help you achieve the growth and freedom you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-[#E8DCC8]">
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Your Name</label>
                <Input 
                  type="text" 
                  placeholder="John Smith" 
                  className="w-full bg-[#FFF8F0] border-[#D4A574]/30 focus:border-[#D4A574]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Business Name</label>
                <Input 
                  type="text" 
                  placeholder="Smith & Co." 
                  className="w-full bg-[#FFF8F0] border-[#D4A574]/30 focus:border-[#D4A574]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@smithandco.com" 
                  className="w-full bg-[#FFF8F0] border-[#D4A574]/30 focus:border-[#D4A574]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="(404) 555-0123" 
                  className="w-full bg-[#FFF8F0] border-[#D4A574]/30 focus:border-[#D4A574]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C1810] mb-2">Tell Us About Your Vision</label>
                <Textarea 
                  placeholder="What are your goals? What challenges are you facing? How can we help you grow?" 
                  rows={5}
                  className="w-full bg-[#FFF8F0] border-[#D4A574]/30 focus:border-[#D4A574]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#8B6F47] hover:bg-[#6F5739] text-white py-6 text-lg font-bold cursor-pointer"
              >
                Send Your Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2C1810] mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D4A574] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-1">Location</h4>
                    <p className="text-[#5A4A3A]">Serving Atlanta Metro Area<br />Main Street Businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-1">Phone</h4>
                    <p className="text-[#5A4A3A]">(404) 555-ALPHA<br />Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#A68B5B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C1810] mb-1">Email</h4>
                    <p className="text-[#5A4A3A]">hello@alphareply.com<br />We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5739] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A574] text-xl">✓</span>
                  <span>Atlanta-based team that understands your community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A574] text-xl">✓</span>
                  <span>Complete service offering—no need for multiple vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A574] text-xl">✓</span>
                  <span>Proven track record with main street businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A574] text-xl">✓</span>
                  <span>Focus on measurable growth and ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}