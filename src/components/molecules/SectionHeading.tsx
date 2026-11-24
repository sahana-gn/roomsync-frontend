type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accentTitle: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accentTitle,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>

      <h1>
        {title}
        <span className="heading-accent">{accentTitle}</span>
      </h1>

      <p className="section-description">{description}</p>
    </div>
  );
}