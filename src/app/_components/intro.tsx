import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:items-center md:justify-between mt-16 mb-16 md:mb-12 font-display">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Ocean Studio</h1>
      <h4 className="text-left text-5xl md:text-lg mt-5 md:pl-8">Creative storytelling, video production, and podcast consulting.</h4>
    </section>
  );
}
