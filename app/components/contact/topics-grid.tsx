import { buildMailto, type ContactTopic } from "@/app/lib/contact/topics";

export function TopicsGrid({ topics }: { topics: readonly ContactTopic[] }) {
  return (
    <section
      className="grid gap-px border-y border-[#d9d1c4] bg-[#d9d1c4] sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Inquiry topics"
    >
      {topics.map((topic) => (
        <a
          key={topic.id}
          href={buildMailto(topic)}
          className="group flex min-h-56 flex-col justify-between bg-white p-8 transition-colors hover:bg-[#faf6ef]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              {topic.label}
            </p>
            <h3 className="mt-2 font-serif text-xl text-[#17201f] transition group-hover:text-[#c64e38]">
              {topic.subject}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#66706b]">{topic.description}</p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#16404d] group-hover:text-[#c64e38]">
            Open mail draft ↗
          </span>
        </a>
      ))}
    </section>
  );
}