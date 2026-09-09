import { Fragment } from "react";
import PaperCard from "./PaperCard";
import TapeSticker from "./TapeSticker";
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

export default function VibesSection() {
  const v = content.vibes;
  return (
    <section className="vibes section-shell">
      <TapeSticker text={v.sticker} />
      <h2>{renderHeading(v.heading)}</h2>
      <div className="vibes-grid">
        <PaperCard className="stats">
          <p>{v.compass.label}</p>
          <strong>{v.compass.ratio}</strong>
          <small>{v.compass.ratioDescription}</small>
          <div className="bars">
            {v.compass.bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="stats-foot">
            <span>
              {v.compass.clarityLabel} &nbsp; {v.compass.clarityValue}
            </span>
            <span>
              {v.compass.delightLabel} &nbsp; {v.compass.delightValue}
            </span>
          </div>
        </PaperCard>
        <div className="photo-dump">
          {/* The quote is a safe local string; <br /> and <em> give it its layout */}
          <div
            className="dump-card pink"
            dangerouslySetInnerHTML={{ __html: v.photoDump.quote }}
          />
          <PaperCard className="mini-poster">
            <b>
              {v.photoDump.poster.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </b>
            <span>{v.photoDump.poster.symbol}</span>
          </PaperCard>
          <div className="camera-mark">
            {v.photoDump.cameraMark.title}
            <br />
            <small>{v.photoDump.cameraMark.subtitle}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
