
"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";
import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column: Text Content */}
          <FadeInOnScroll className="md:w-1/2 lg:1/2 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight mb-6 text-primary">
            Where Young Stars Find Their Sound.
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-10 text-foreground/80">
              Affordable lessons for kids, teens & adults — piano, guitar, drums, voice & more.
            </p>
            
            <div className="flex align-center gap-[10] flex-col md:flex-row ">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Book a Free Trial
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Your Free Trial Lesson</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Fill out the form below, and one of our friendly staff members will contact you to schedule your complimentary trial session. Let the music begin!
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                  <EnrollmentForm onSuccess={() => setIsDialogOpen(false)} />
                </div>
              </DialogContent>
            </Dialog>
            <Link href={'#about'}>

            <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-accent-foreground px-10 py-6 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Learn More
              </Button>
            </Link>
            </div>
          </FadeInOnScroll>

          {/* Right Column: Image */}
          <FadeInOnScroll className="md:w-1/2 lg:w-1/2">
            <Image
              src="/boy-girl.png"
              alt="Students enjoying music lessons at Belmoot Institute of Music"
              width={600}
              height={450}
              className="rounded-xl shadow-md w-full h-auto object-cover"
              data-ai-hint="music class students"
              priority
            />
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}
