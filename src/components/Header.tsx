"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Projects", to: "/our-projects" },
  { label: "Photos", to: "/photos" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Leaf className="h-6 w-6 text-sage-dark" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold text-foreground sm:text-xl">
            Carlton Pollinator Project
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/contact">Join our dig</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 max-w-sm">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Leaf className="h-5 w-5 text-sage-dark" aria-hidden="true" />
                <span className="font-serif text-lg font-semibold">Carlton Pollinator Project</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-sage-dark [&[data-status=active]]:font-semibold [&[data-status=active]]:text-sage-dark"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/contact">Join our dig</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
