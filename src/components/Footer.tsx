import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Leaf className="h-6 w-6 text-sage" aria-hidden="true" />
              <span className="font-serif text-xl font-semibold">Carlton Pollinator Project</span>
            </Link>
            <p className="max-w-xs leading-relaxed text-cream/90">
              Restoring Native Ecology one plant at a time in Carlton, Oregon.
            </p>
            <ul className="space-y-3 text-sm text-cream/90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-goldenrod" aria-hidden="true" />
                <span>Carlton, Oregon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-goldenrod" aria-hidden="true" />
                <a href="tel:+15038301805" className="hover:underline">
                  (503) 830-1805
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-goldenrod" aria-hidden="true" />
                <a
                  href="https://carltonpollinatorproject.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  carltonpollinatorproject.org
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-serif text-lg font-semibold text-goldenrod-light">Explore</h3>
            <nav className="flex flex-col gap-3 text-sm text-cream/90">
              <Link to="/" className="w-fit hover:text-goldenrod-light hover:underline">
                Home
              </Link>
              <Link to="/our-projects" className="w-fit hover:text-goldenrod-light hover:underline">
                Our Projects
              </Link>
              <Link to="/our-projects" className="w-fit hover:text-goldenrod-light hover:underline">
                Classes
              </Link>
              <Link to="/photos" className="w-fit hover:text-goldenrod-light hover:underline">
                Photos
              </Link>
              <Link to="/contact" className="w-fit hover:text-goldenrod-light hover:underline">
                Contact Us
              </Link>
              <Link to="/contact" className="w-fit hover:text-goldenrod-light hover:underline">
                Donate
              </Link>
            </nav>
          </div>

          <div className="space-y-5 lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold text-goldenrod-light">Get Involved</h3>
            <p className="max-w-sm text-sm leading-relaxed text-cream/90">
              Join our dig, sign up for a class, or donate to help us grow wildlife habitat one
              plant at a time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sage px-5 py-2.5 text-sm font-medium text-sage-foreground transition-colors hover:bg-sage-dark"
            >
              Join our dig
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/80 md:flex-row">
          <p>© 2026 Carlton Pollinator Project ~ Community creating vibrancy and beauty</p>
          <p>Restoring Native Ecology in Carlton, Oregon</p>
        </div>
      </div>
    </footer>
  );
}
