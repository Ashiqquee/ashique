import Image from "next/image";
import { Bio } from "./bio";

const projects = [
  {
    name: "Nivlet",
    description: "A Mac edge shelf for the prompts, files and notes you reuse with AI",
    href: "https://nivlet.ashique.work",
    domain: "nivlet.ashique.work",
    logo: "/logos/nivlet.png",
    cursor: "/logos/nivlet-cursor.png",
  },
  {
    name: "Forma",
    description: "Interactive lessons that make abstract ideas tangible",
    href: "https://formalearn.xyz",
    domain: "formalearn.xyz",
    logo: "/logos/forma.png",
    cursor: "/logos/forma-cursor.png",
  },
  {
    name: "GetTravelHelp",
    description:
      "Automated flight delay and cancellation claims: the Gmail API finds the bookings, and a team of agents fills in the claim forms",
    href: "https://www.gettravelhelp.com",
    domain: "gettravelhelp.com",
    logo: "/logos/gettravelhelp.png",
    cursor: "/logos/gettravelhelp-cursor.png",
  },
];

const contact = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashiqquee/" },
  { label: "Email", href: "mailto:ashique.dev.work@gmail.com" },
];

const heading =
  "mb-[1.2rem] text-[1.45rem] leading-[1.4] font-semibold tracking-[-0.02em] text-balance text-heading";

export default function Home() {
  return (
    <main className="@container min-h-screen p-(--page-pad) max-sm:px-5 max-sm:pt-10 max-sm:pb-5">
      <article className="relative mx-auto w-[min(100%,var(--content-width))] wrap-break-word">
        <div className="min-[1100px]:mx-[calc((var(--content-width)_-_min(100cqi,1500px))/2)] min-[1100px]:grid min-[1100px]:w-[min(100cqi,1500px)] min-[1100px]:grid-cols-[minmax(0,1.75fr)_minmax(380px,1fr)] min-[1100px]:items-start min-[1100px]:gap-[clamp(2rem,3.6vw,3.75rem)]">
          <div className="w-[min(100%,var(--content-width))] min-w-0">
            <h1 className="mb-[0.95em] text-[clamp(2.2rem,3.5vw,2.65rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-balance text-heading max-sm:mb-[0.9em]">
              <a
                href="https://www.linkedin.com/in/ashiqquee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-72"
              >
                <span className="relative top-[0.015em] mr-[0.015em] inline-block text-[1.1em] leading-0">@</span>
                ashiqquee
              </a>
            </h1>

            <Bio />

            <div className="mt-14 space-y-14">
              <section aria-labelledby="projects-heading">
                <h2 id="projects-heading" className={heading}>
                  Projects
                </h2>
                <div className="dim-siblings mt-[0.85em] border-t border-line">
                  {projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: `url(${project.cursor}) 16 16, pointer` }}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 border-b border-line py-[0.72em] text-copy max-sm:grid-cols-1 max-sm:gap-[0.15rem]"
                    >
                      <span>
                        <Image
                          src={project.logo}
                          alt=""
                          width={18}
                          height={18}
                          className="relative -top-[0.1em] mr-2 inline-block rounded-[4px] align-middle"
                        />
                        {project.name}
                        <span className="text-nav"> — {project.description}</span>
                      </span>
                      <span className="font-ui text-sm whitespace-nowrap text-nav tabular-nums max-sm:text-[13px]">
                        {project.domain}
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section aria-labelledby="contact-heading">
                <h2 id="contact-heading" className={heading}>
                  Contact
                </h2>
                <ul className="mt-[0.8em] list-[square] columns-2 gap-x-10 pl-[1.1em] marker:text-nav/70 max-sm:columns-1">
                  {contact.map((item) => (
                    <li key={item.label} className="mb-[0.2rem] break-inside-avoid pl-[0.15em]">
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="prose-link"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="isolate hidden overflow-hidden rounded-[10px] border border-line bg-surface min-[1100px]:sticky min-[1100px]:top-(--page-pad) min-[1100px]:block min-[1100px]:h-[calc(100svh-2*var(--page-pad))] min-[1100px]:min-h-[min(72svh,760px)]">
            <Image
              src="/water-lilies.webp"
              alt="Claude Monet, Water Lilies (Nymphéas), 1907: lily pads and soft lilac reflections on a pond"
              fill
              sizes="(min-width: 1100px) 36vw, 1px"
              className="object-cover"
              preload
            />
          </aside>
        </div>
      </article>
    </main>
  );
}
