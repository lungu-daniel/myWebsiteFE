import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ApertureEye",
  description: "How ApertureEye handles account authorization, video files, and website analytics.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Who operates ApertureEye",
    body: (
      <p>
        ApertureEye is a personal desktop video clipping and publishing tool
        operated by Daniel Lungu. Questions or privacy requests can be sent to{" "}
        <a className="text-accent underline underline-offset-4" href="mailto:lungud995@gmail.com">
          lungud995@gmail.com
        </a>.
      </p>
    ),
  },
  {
    title: "2. Information handled by the desktop tool",
    body: (
      <>
        <p>When you choose to connect a social account or prepare a post, the tool may handle:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Account identifiers and authorization tokens returned by the platform during sign-in.</li>
          <li>Video files, captions, tags, and publishing options that you select.</li>
          <li>Post identifiers and status information returned after an upload or publishing request.</li>
        </ul>
        <p>
          Video files and connection records are kept in local project files on
          the computer running the tool. A selected video and its post details
          are sent to the social platform when you authorize or initiate that
          publishing action. The tool does not ask for or store your social
          account password.
        </p>
      </>
    ),
  },
  {
    title: "3. TikTok authorization and data",
    body: (
      <p>
        If you connect TikTok, the tool uses TikTok’s official authorization and
        Content Posting APIs for the permissions you approve. TikTok receives the
        selected video and post details needed to process your upload or post.
        ApertureEye does not use TikTok access to read private messages or to
        collect unrelated profile data. You can revoke authorization from your
        TikTok account settings and remove local authorization files from the
        computer running ApertureEye. TikTok’s own privacy policy applies to
        information processed by TikTok.
      </p>
    ),
  },
  {
    title: "4. Storage, sharing, and retention",
    body: (
      <p>
        The desktop tool is designed to process selected media locally and does
        not send it to the portfolio website. Local files and publishing records
        remain on your computer until you delete them. Authorization remains
        available locally until you revoke it or remove the local token file.
        Apart from the platform you choose to publish to and the website services
        described below, ApertureEye does not sell or share this information with
        other parties.
      </p>
    ),
  },
  {
    title: "5. Portfolio website analytics",
    body: (
      <p>
        This portfolio uses Vercel Web Analytics and Speed Insights to understand
        aggregate visits and site performance. Vercel Web Analytics describes its
        visitor reporting as anonymized and says it does not use cookies; it may
        process page, referrer, general device/browser, and performance
        information. See{" "}
        <a className="text-accent underline underline-offset-4" href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer">
          Vercel’s analytics privacy information
        </a>.
      </p>
    ),
  },
  {
    title: "6. Your choices and updates",
    body: (
      <p>
        You may stop using the tool, revoke a platform connection, or delete its
        local files at any time. This policy may be updated when the tool or its
        data practices change; the effective date above identifies the current
        version.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-accent">ApertureEye</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Effective date: November 22, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-7 text-muted">
          {sections.map(({ title, body }) => (
            <section key={title}>
              <h2 className="mb-2 text-lg font-medium text-foreground">{title}</h2>
              {body}
            </section>
          ))}
          <nav aria-label="Legal pages" className="border-t border-border pt-6 text-sm">
            <a className="text-accent underline underline-offset-4" href="/terms">Terms of Service</a>
            <span className="px-3 text-muted">·</span>
            <a className="text-accent underline underline-offset-4" href="/">Portfolio</a>
          </nav>
        </div>
      </article>
    </div>
  );
}
