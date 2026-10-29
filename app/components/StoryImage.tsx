import Image from "next/image";

const images = {
  "clarity-and-trust": { file: "clarity-and-trust", alt: "A yellow cord following a clear route through three translucent glass panels.", creator: "", source: "" },
};
export default function StoryImage({ name }: { name: keyof typeof images }) {
  const image = images[name];
  return <figure className="story-image">
    <Image src={`/images/story/${image.file}.webp`} alt={image.alt} width={1600} height={900} sizes="(max-width: 800px) 90vw, (max-width: 1500px) 85vw, 1328px" loading="lazy" />
    <figcaption>{image.source ? <>Photo: <a href={image.source}>{image.creator} / Pexels</a> · Illustrative photography.</> : "AI-generated abstract illustration."}</figcaption>
  </figure>;
}
