
import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, HeartHandshake } from "lucide-react";

const coreValues = [
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Our Mission",
    description:
      "To nurture talent and foster a lifelong love for music by providing personalized lessons tailored to each student’s unique learning style and goals.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Expert Instructors",
    description:
      "Our experienced and passionate instructors are committed to guiding you with dedication and fostering your musical growth, ensuring a quality learning experience.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: "Vibrant Community",
    description:
      "Join a supportive and engaging environment where you can discover the joy, discipline, and creativity that music brings. Your passion is our priority.",
  },
];

export default function AboutUsSection() {
  return (
    <FadeInOnScroll>
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start"> {/* Changed to items-start for better alignment if content heights differ */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                About Echo Academy
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                At Echo Academy, we believe everyone deserves the chance to explore their musical potential. Founded on the principle of accessible music education, we cater to all ages and skill levels, offering a diverse range of programs to help you embark on or continue your musical journey.
              </p>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <FadeInOnScroll key={index} delay={`delay-${index * 100}`}>
                    <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                        <div className="p-2 bg-accent/10 rounded-md">
                           {value.icon}
                        </div>
                        <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/75 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl mt-0 md:mt-8 sticky top-24"> {/* Added sticky and top for better visual balance with potentially longer text/card column */}
              <Image
                src="https://placehold.co/600x450.png" 
                alt="Music teacher interacting with students in a vibrant classroom"
                width={600}
                height={450} 
                className="w-full h-auto object-cover"
                data-ai-hint="music classroom students" 
              />
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
