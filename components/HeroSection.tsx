"use client";
import { Fragment } from "react";
import Image from "next/image";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TapeSticker from "./TapeSticker";
import content from "@/data/site-content.json";

// The portrait caption is a single string from the JSON. It supports two
// tiny markers so it can be edited without touching this component:
//   \n            -> line break
//   <em>…</em>     -> written in the handwritten (Caveat) accent font
function renderCaption(caption: string) {
  return caption.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split("<em>").map((part, j) =>
        j % 2 === 1 ? (
          <em key={j}>{part.split("</em>")[0]}</em>
        ) : (
          <Fragment key={j}>{part.split("</em>")[0]}</Fragment>
        ),
      )}
    </Fragment>
  ));
}

export default function HeroSection() {
  return (
    <section className="hero section-shell">
      <nav>
        <span className="font-black tracking-tight">
          {content.identity.name}&apos;s {content.nav.brand}
        </span>
        <span className="nav-pill">
          {content.nav.scrollHint} <ArrowDownRight size={16} />
        </span>
      </nav>
      <p className="scribble hello">{content.hero.greeting}</p>
      <p className="scribble guide">{content.hero.guide}</p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 90 }}
        className="bubble-title hero-name"
      >
        {content.identity.name}
      </motion.h1>
      <motion.div
        animate={{ y: [0, -9, 0], rotate: [3, 1, 3] }}
        transition={{
          delay: 0.2,
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hero-photo"
      >
        <i className="tape" />
        <div className="portrait">
          {content.hero.image && (
            <Image
              className="portrait-image"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${content.hero.image}`}
              alt={content.hero.imageAlt}
              width={500}
              height={600}
              priority
            />
          )}
          <span>{content.hero.portraitSymbol}</span>
          <p>{renderCaption(content.hero.portraitCaption)}</p>
        </div>
      </motion.div>
      <TapeSticker text={content.identity.title} className="hero-tag left" />
      <TapeSticker
        text={`By ${content.identity.name} ♡`}
        className="hero-tag right"
      />
      <Sparkles className="star star-one" />
      <span className="flower">{content.hero.flowerSymbol}</span>
    </section>
  );
}
