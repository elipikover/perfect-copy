import { Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "dropjawjacobites@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Contact Heading */}
          <h6 className="font-typewriter text-sm tracking-typewriter text-foreground uppercase">
            CONTACT
          </h6>

          {/* Email */}
          <div className="font-typewriter text-sm tracking-typewriter text-foreground relative">
            Email:{" "}
            <button
              onClick={handleCopyEmail}
              className="text-foreground hover:text-coral transition-colors underline cursor-pointer"
            >
              {email}
            </button>
            {copied && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-coral text-xs whitespace-nowrap">
                Copied to clipboard!
              </span>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/dropjaw_jacobites/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-coral hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/DropjawJacobites/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-coral hover:text-background transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@dropjawjacobitesofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-coral hover:text-background transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-typewriter text-xs tracking-typewriter text-muted-foreground">
            © 2023 by BLEACH TO BLACK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
