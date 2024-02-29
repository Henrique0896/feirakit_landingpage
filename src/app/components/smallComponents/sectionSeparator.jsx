export function SectionSeparator({ title }) {
  return (
    <div className="flex w-full h-48 mt-2 items-center justify-center  bg-fixed bg-parallax-effect bg-cover">
      <h2 className="text-5xl  text-balance leading-relaxed uppercase text-white font-bold">
        {title}
      </h2>
    </div>
  );
}
