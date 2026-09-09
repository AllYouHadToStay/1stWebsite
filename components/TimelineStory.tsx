import { Fragment } from "react";
import PaperCard from "./PaperCard";
import content from "@/data/site-content.json";

// Headings are plain strings from the JSON. They support two tiny markers
// so text can be edited without touching this component:
//   \n            -> line break
//   <accent>…</accent> -> highlighted (accent-colored) words
function renderHeading(html: string) {
  return html.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split("<accent>").map((part, j) =>
        j % 2 === 1 ? (
          <span key={j}>{part.split("</accent>")[0]}</span>
        ) : (
          <Fragment key={j}>{part.split("</accent>")[0]}</Fragment>
        ),
      )}
    </Fragment>
  ));
}

export default function TimelineStory() {
  const t = content.timeline;
  return (
    <section className="timeline-section section-shell">
      <div className="section-kicker">{t.kicker}</div>
      <h2>{renderHeading(t.heading)}</h2>
      <p className="intro scribble">{t.intro}</p>
      <div className="timeline-line" />
      <div className="timeline-grid">
        {t.items.map((m, index) => (
          <PaperCard
            className={`memory ${index === 1 ? "tilt-right" : "tilt-left"}`}
            key={m.year}
          >
            <i className="tape" />
            <div className="memory-art">
              <b>{m.icon}</b>
              <span>{m.year}</span>
            </div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </PaperCard>
        ))}
      </div>
      <p className="scribble timeline-note">{t.note}</p>
    </section>
  );
}
