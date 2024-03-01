export function SectionSeparator({ title }) {
  return (
    <div className="flex w-full h-48 border items-center bg-fixed bg-parallax-effect bg-cover">
      <div className="flex w-full justify-center items-center bg-blue-600/50 h-full">
        <h2 className="text-4xl md:text-5xl  text-balance leading-relaxed uppercase text-white font-bold text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
