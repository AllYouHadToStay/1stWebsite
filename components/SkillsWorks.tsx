"use client";
import PaperCard from "./PaperCard";
import content from "@/data/site-content.json";
export default function SkillsWorks() {
  const setTheme = (colors: string[]) => {
    const root = document.documentElement;
    root.style.setProperty("--pink", colors[0]);
    root.style.setProperty("--soft", colors[1]);
    root.style.setProperty("--cream", colors[2]);
    root.style.setProperty("--ink", colors[3]);
  };
  const phone = content.projects[0] as {
    type: string;
    title: string;
    caption: string;
    symbol?: string;
  };
  const work = content.projects[1] as {
    type: string;
    title: string;
    subtitle?: string;
    caption: string;
  };
  return (
    <section className="skills section-shell">
      <div className="section-kicker">{content.skills.kicker}</div>
      <h2 className="bubble-title">{content.skills.heading}</h2>
      <div className="pinboard">
        <PaperCard className="swatches">
          <p>{content.skills.themeLabel}</p>
          <div>
            {content.themePickers.map((palette) => (
              <button
                onClick={() => setTheme(palette.colors)}
                aria-label={`Apply ${palette.name} theme`}
                className="palette-choice"
                key={palette.name}
              >
                {palette.colors.map((c) => (
                  <i style={{ background: c }} key={c}>
                    <small>{c}</small>
                  </i>
                ))}
              </button>
            ))}
          </div>
        </PaperCard>
        <PaperCard className="tools">
          <p>{content.skills.toolsLabel}</p>
          {content.skills.items.map((t) => (
            <b key={t}>{t}</b>
          ))}
        </PaperCard>
        <PaperCard className="phone">
          <div>
            <span>{phone.type}</span>
            <b>
              {phone.title.split("\n").map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  <br />
                </span>
              ))}
            </b>
            <i>{phone.symbol}</i>
          </div>
          <p>{phone.caption}</p>
        </PaperCard>
        <PaperCard className="work-card">
          <div className="product-box">
            {work.title}
            <br />
            <span>{work.subtitle}</span>
          </div>
          <p>
            {work.type} / {work.caption}
          </p>
        </PaperCard>
      </div>
    </section>
  );
}
