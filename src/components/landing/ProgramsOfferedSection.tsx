import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Guitar, Mic, Disc3, Music2, Star } from "lucide-react"; // Using Music2 for Piano, Disc3 for Drums
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

const programs = [
  {
    icon: <Music2 className="h-10 w-10 text-accent" />, // Piano
    title: "Piano Lessons",
    description: "Master the keys with our comprehensive piano lessons, suitable for all ages and skill levels. From classical to contemporary, discover the joy of playing.",
    dataAiHint: "piano keyboard",
  },
  {
    icon: <Guitar className="h-10 w-10 text-accent" />,
    title: "Guitar Lessons",
    description: "Strum your way to success with guitar lessons for acoustic, electric, and bass. Learn chords, melodies, and your favorite songs.",
    dataAiHint: "acoustic guitar",
  },
  {
    icon: <Disc3 className="h-10 w-10 text-accent" />, // Drums
    title: "Drum Lessons",
    description: "Find your rhythm and beat with dynamic drum lessons. Our instructors cover various styles, from rock to jazz, ensuring a fun learning experience.",
    dataAiHint: "drum set",
  },
  {
    icon: <Mic className="h-10 w-10 text-accent" />,
    title: "Voice Lessons",
    description: "Unleash your vocal potential with our expert voice coaching. Improve your range, technique, and confidence in a supportive setting.",
    dataAiHint: "singer microphone",
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: "And More!",
    description: "We also offer lessons for various other instruments and music theory classes. Contact us to find out more about our diverse programs.",
    dataAiHint: "music notes variety",
  },
];

export default function ProgramsOfferedSection() {
  return (
    <FadeInOnScroll>
      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Programs & Instruments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <FadeInOnScroll key={index} delay={`delay-${index * 100}`}>
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                      {program.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-center text-foreground/75 leading-relaxed">
                      {program.description}
                    </CardDescription>
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
