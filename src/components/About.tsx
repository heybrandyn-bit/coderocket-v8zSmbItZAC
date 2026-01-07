import { Heart, Target, Users } from 'lucide-react';
export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2C1810] to-[#4A2818]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F4E4C1] mb-4">
            Rooted in <span className="text-[#D4A574]">Atlanta</span>
          </h2>
          <p className="text-xl text-[#F4E4C1]/80 max-w-3xl mx-auto">
            We're inspired by the vibrant spirit of neighborhoods like Little Five Points, West End, Virginia Highland, and Sweet Auburn—communities built on authenticity, creativity, and connection.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#F4E4C1] mb-6">
              Your Partner in Transformation
            </h3>
            <p className="text-[#F4E4C1]/80 text-lg mb-6 leading-relaxed">
              We believe every main street business owner has a unique story worth sharing. Our mission is to help you become the creator of your own narrative—transforming your expertise into content that attracts ideal clients and builds lasting authority.
            </p>
            <p className="text-[#F4E4C1]/80 text-lg leading-relaxed">
              Through video, written word, voice, and live experiences, we help you communicate in ways that resonate deeply with your community, bringing you greater growth, freedom, and abundance.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4A574] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#F4E4C1] mb-2">Authenticity First</h4>
                  <p className="text-[#F4E4C1]/70">We help you communicate in your true voice, building genuine connections with your audience.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#F4E4C1] mb-2">Results-Driven</h4>
                  <p className="text-[#F4E4C1]/70">Every piece of content is strategically designed to attract clients and drive measurable growth.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#3A2418] rounded-xl p-6 border border-[#D4A574]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#A68B5B] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#F4E4C1] mb-2">Community-Focused</h4>
                  <p className="text-[#F4E4C1]/70">We understand main street businesses because we're part of this community too.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-[#F4E4C1] mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-[#F4E4C1]/80 mb-8 max-w-2xl mx-auto">
            Let's create content that doesn't just tell your story—it transforms your business and opens doors to new possibilities.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg hover:bg-[#E8C792] transition-colors cursor-pointer font-bold text-lg shadow-lg"
          >
            Let's Talk About Your Vision
          </a>
        </div>
      </div>
    </section>
  );
}