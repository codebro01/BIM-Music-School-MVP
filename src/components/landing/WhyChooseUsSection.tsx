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
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 bg-card p-2">
                  <CardHeader className="items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3 inline-block">
                       {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/75 leading-relaxed">{benefit.description}</p>
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
