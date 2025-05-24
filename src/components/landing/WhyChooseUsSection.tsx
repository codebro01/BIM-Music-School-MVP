import { Users, CalendarClock, HeartHandshake, School, Award } from "lucide-react";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Experienced Instructors",
    description: "Learn from passionate and qualified musicians dedicated to your growth and success.",
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-primary" />,
    title: "Flexible Scheduling",
    description: "We offer convenient lesson times to fit your busy life, for both individuals and groups.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Supportive Community",
    description: "Join a vibrant and encouraging environment that fosters collaboration and a love for music.",
  },
  {
    icon: <School className="h-8 w-8 text-primary" />, // Using School icon for facilities
    title: "State-of-the-Art Facilities",
    description: "Enjoy learning in our modern, well-equipped studios designed for optimal sound and comfort.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Path to Excellence",
    description: "Our tailored programs help students of all levels achieve their musical aspirations and shine.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <FadeInOnScroll>
      <section id="why-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Echo Academy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInOnScroll key={index} delay={`delay-${index * 100}`}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                    <div className="p-2 bg-primary/10 rounded-md mt-1">
                       {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-primary pt-1">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/75 leading-relaxed text-left ml-[calc(2rem+0.5rem+0.5rem)] -mt-2"> {/* Adjust margin to align with title if icon has padding */}
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
