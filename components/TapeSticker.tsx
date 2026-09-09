export default function TapeSticker({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <span className={`sticker ${className}`}>{text}</span>;
}
