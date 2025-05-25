import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

// Custom X/Twitter Icon SVG
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6909H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z" />
  </svg>
);


export default function ContactFooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInOnScroll>
      <footer id="contact" className="bg-primary text-primary-foreground pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 shrink-0 text-accent" />
                  <span>123 Music Lane, Abuja</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 shrink-0 text-accent" />
                  <a href="tel:+11234567890" className="hover:text-accent transition-colors">(+234)91xxxxxxxx</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 shrink-0 text-accent" />
                  <a href="mailto:info@echoacademy.music" className="hover:text-accent transition-colors">info@belmootinstituteofmusic.com.ng</a>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground hover:text-accent transition-colors"><Facebook size={24} /></a></Link>
                  <Link href="https://www.instagram.com" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground hover:text-accent transition-colors"><Instagram size={24} /></a></Link>
                  <Link href="https://www.x.com" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-primary-foreground hover:text-accent transition-colors"><XIcon /></a></Link>
                  <Link href="https://www.youtube.com" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-foreground hover:text-accent transition-colors"><Youtube size={24} /></a></Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Belmoot Institute of Music. All rights reserved.</p>
            <p>Designed with <span className="text-accent">&hearts;</span> for the love of music.</p>
          </div>
        </div>
      </footer>
    </FadeInOnScroll>
  );
}
