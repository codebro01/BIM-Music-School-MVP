
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import EnrollmentForm from "@/components/landing/EnrollmentForm";
import { Menu, Music2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial state in case page loads scrolled
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnrollDialog = () => {
    setIsMobileMenuOpen(false); // Ensure mobile menu closes
    setIsEnrollDialogOpen(true);
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors" aria-label="Belmoot Institute of Music Home">
            <div className="logo">
              <Image
                src={'/bim-logo.png'}
                alt = 'Logo'
                height = '70'
                width = '70'
              ></Image>
            </div>
            {/* <Music2 className="h-8 w-8" />
            <span className="text-2xl font-bold">Belmoot Institute of Music</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="text-foreground hover:text-primary transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground" 
              onClick={handleOpenEnrollDialog}
            >
              Book Free Trial
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6 flex flex-col">
                <Link href="/" className="flex items-center space-x-2 text-primary mb-6" onClick={() => setIsMobileMenuOpen(false)} aria-label="Belmoot Institute of Music Home">
                  <Music2 className="h-7 w-7" />
                  <span className="text-xl font-bold">Belmoot Institute of Music</span>
                </Link>
                <nav className="flex flex-col space-y-5">
                  {navLinks.map(link => (
                    <Link key={link.label} href={link.href}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button 
                  variant="default" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto" 
                  onClick={handleOpenEnrollDialog}
                >
                  Book Free Trial
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Enrollment Dialog */}
      <Dialog open={isEnrollDialogOpen} onOpenChange={setIsEnrollDialogOpen}>
        <DialogContent className="sm:max-w-[700px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">Book Your Free Trial Lesson</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill out the form below, and one of our friendly staff members will contact you to schedule your complimentary trial session. Let the music begin!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <EnrollmentForm onSuccess={() => setIsEnrollDialogOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
