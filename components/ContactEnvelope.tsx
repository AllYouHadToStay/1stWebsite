"use client";
import {
  Dribbble,
  Facebook,
  Github,
  Globe2,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Mail,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import content from "@/data/site-content.json";
const icons = {
  email: Mail,
  instagram: Instagram,
  tiktok: Music2,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  twitter: Twitter,
  x: Twitter,
  facebook: Facebook,
  dribbble: Dribbble,
  website: Globe2,
};
export default function ContactEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const f = content.footer;
  const visibleSocials = content.socials.filter(
    ({ href }) => href.trim().length > 0,
  );
  return (
    <footer className="contact section-shell">
      <div>
        <p className="scribble">{f.eyebrow}</p>
        <h2>
          {f.heading}
          <br />
          <span>{f.headingAccent}</span>
        </h2>
      </div>
      <motion.button
        aria-expanded={isOpen}
        aria-label={`Open ${content.identity.name}'s contact letter`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ rotate: -2, y: -8 }}
        className={`envelope ${isOpen ? "is-open" : ""}`}
      >
        <div className="letter">
          <p>{f.letterGreeting}</p>
          <strong>
            {f.letterMessage.split("\n").map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                <br />
              </span>
            ))}
          </strong>
          <small>{content.identity.email}</small>
        </div>
        <div className="flap" />
        <i>{isOpen ? f.closedIcon : f.openIcon}</i>
        <span className="open-hint">
          {isOpen ? f.closeHint : f.openHint}
        </span>
      </motion.button>
      {visibleSocials.length > 0 && (
        <div className="socials">
          {visibleSocials.map(({ label, href }) => {
            const Icon =
              icons[label.toLowerCase() as keyof typeof icons] ?? LinkIcon;
            return (
              <a
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={16} />
                {label}
              </a>
            );
          })}
        </div>
      )}
      <p className="copyright">
        © {f.copyrightYear} {content.identity.name.toUpperCase()} ·{" "}
        {f.copyrightSuffix}
      </p>
    </footer>
  );
}
