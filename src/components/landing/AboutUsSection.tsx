import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function AboutUsSection() {
  return (
    <FadeInOnScroll>
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                About Echo Academy
              </h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                At Echo Academy, we believe everyone deserves the chance to explore their musical potential. Founded on the principle of accessible music education, our experienced instructors are committed to providing personalized lessons tailored to each student’s unique learning style and goals.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Our mission is to nurture talent and foster a lifelong love for music in a supportive and engaging environment. We cater to all ages and skill levels, offering a diverse range of programs to help you embark on or continue your musical journey.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Join our community and discover the joy, discipline, and creativity that music brings. At Echo Academy, your passion is our priority.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Music teacher with student"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="music teacher student"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
