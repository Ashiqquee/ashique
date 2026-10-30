"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

const EMAIL = "ashique.dev.work@gmail.com";

const lengths = ["Default", "Long"] as const;
type Length = (typeof lengths)[number];

// A prose link with the brand's logo inline; the cursor also becomes the logo on hover.
function BrandLink({ href, logo, logoClassName, children }: { href: string; logo: string; logoClassName?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="prose-link whitespace-nowrap"
      style={{ cursor: `url(/logos/${logo}-cursor.png) 16 16, pointer` }}
    >
      <Image
        src={`/logos/${logo}.png`}
        alt=""
        width={16}
        height={16}
        className={`relative -top-[0.1em] mr-[0.3em] inline-block align-middle ${logoClassName ?? ""}`}
      />
      {children}
    </a>
  );
}

export function Bio() {
  const [length, setLength] = useState<Length>("Default");

  return (
    <section aria-label="Biography" className="mb-13">
      <div className="mb-[1.35rem] flex items-baseline justify-between border-b border-line pb-[0.55rem] font-ui text-sm leading-[1.4] tracking-[0.01em] text-nav">
        <span>Bio</span>
        <div aria-label="Bio length" className="ml-auto flex gap-4">
          {lengths.map((option) => (
            <button
              key={option}
              type="button"
              aria-controls="bio-content"
              aria-pressed={length === option}
              onClick={() => setLength(option)}
              className="relative cursor-pointer py-[0.2rem] transition-colors duration-150 hover:text-copy aria-pressed:text-copy aria-pressed:after:absolute aria-pressed:after:inset-x-0 aria-pressed:after:-bottom-[0.62rem] aria-pressed:after:h-px aria-pressed:after:bg-copy aria-pressed:after:content-['']"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div id="bio-content" className="[&>p]:mb-[1.45rem] [&>p]:text-pretty">
        <p>
          I’m a software engineer from Kerala, India. I work at{" "}
          <BrandLink href="https://codely.ai" logo="codely" logoClassName="dark:rounded-full dark:bg-white">
            Codely
          </BrandLink>
          , where I built{" "}
          <BrandLink href="https://convyflow.com" logo="convyflow">
            Convyflow
          </BrandLink>
          , one inbox for WhatsApp, Instagram and Messenger chats with Shopify orders right beside them. I was also
          part of the team behind{" "}
          <BrandLink href="https://dialogen.ai" logo="dialogen">
            Dialogen
          </BrandLink>
          , custom AI voice agents for support desks, reservations and help lines.
        </p>
        <p>
          I can help you build whatever you need.{" "}
          <a href={`mailto:${EMAIL}`} className="prose-link">
            Tell me what you need
          </a>
          . I’ll nod like it’s easy, then go make it easy.
        </p>
        {length === "Long" && (
          <>
            <p>
              I work across the whole stack: frontends, APIs, data pipelines, cloud infrastructure and the AI parts in
              between. Along the way I’ve built meeting automation on Microsoft Graph, retrieval pipelines with Azure
              OpenAI, flight-data processing on Gmail and Pub/Sub, and browser automation with Playwright.
            </p>
            <p>
              On the side I build my own products, small and calm tools that do one thing well.{" "}
              <BrandLink href="https://formalearn.xyz" logo="forma">
                Forma
              </BrandLink>{" "}
              turns lessons into interactive experiments instead of walls of text, and{" "}
              <BrandLink href="https://nivlet.ashique.work" logo="nivlet">
                Nivlet
              </BrandLink>{" "}
              keeps your prompts and files one click away from whichever AI app you use.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
