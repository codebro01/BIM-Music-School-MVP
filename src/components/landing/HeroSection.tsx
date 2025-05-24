"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";
import Image from "next/image";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import React from "react";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 md:py-32 min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png?a=1"
        alt="Musical instruments collage"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        priority
        data-ai-hint="music instruments collage"
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text readability */}
      
      <FadeInOnScroll className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight mb-6 drop-shadow-md">
          Discover the Sound of Excellence
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/90 drop-shadow-sm">
          Affordable lessons for kids, teens & adults — piano, guitar, drums, voice & more.
        </p>
        
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
             {/* <DialogClose asChild className="mt-4">
               <Button type="button" variant="outline">Close</Button>
             </DialogClose> */}
          </DialogContent>
        </Dialog>
      </FadeInOnScroll>
    </section>
  );
}
