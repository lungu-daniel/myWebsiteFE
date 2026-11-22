import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ApertureEye",
  description: "Terms for using the ApertureEye personal video clipping scheduler.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. About ApertureEye",
    body: (
      <p>
        ApertureEye is a personal desktop tool operated by Daniel Lungu to prepare
        short-form video clips and manage publishing to social accounts connected
        by the account owner. It is not a service operated by TikTok, YouTube, or
        any other social platform.
      </p>
    ),
  },
  {
    title: "2. Your accounts and content",
    body: (
      <>
        <p>
          You are responsible for the accounts you connect and for every video,
          caption, tag, schedule, and publishing instruction you submit. Connect
          only accounts you own or are authorized to manage.
        </p>
        <p>
          You must have the rights and permissions needed to use and publish your
          content, including any music, footage, likenesses, and campaign assets.
          You are responsible for following the rules of each platform and any
          campaign or licensing terms that apply to your content.
        </p>
      </>
    ),
  },
  {
    title: "3. Publishing through social platforms",
    body: (
      <p>
        When you connect a social account, ApertureEye uses that platform’s
        authorization and publishing tools. A post is sent only for an account
        you authorize and after you configure or approve the relevant publishing
        action. Platform availability, review, privacy settings, reach, and
        retention are controlled by the platform and its terms. You can revoke
        ApertureEye’s access in the platform’s account settings.
      </p>
    ),
  },
  {
    title: "4. Acceptable use",
    body: (
      <p>
        Do not use ApertureEye to violate laws, intellectual-property or privacy
        rights, platform rules, or campaign requirements. Do not use it to send
        spam, evade platform safeguards, or access an account without permission.
      </p>
    ),
  },
  {
    title: "5. Availability and responsibility",
    body: (
      <p>
        ApertureEye is provided as a personal tool, without a promise of
        uninterrupted operation or successful publication. To the extent allowed
        by applicable law, Daniel Lungu is not responsible for actions taken by
        third-party platforms, rejected or delayed posts, loss of reach, or
        content you choose to publish. Nothing in these terms removes rights that
        cannot be limited under applicable law.
      </p>
    ),
  },
  {
    title: "6. Changes and contact",
    body: (
      <p>
        These terms may be updated as the tool changes. The current version is
        published on this page. For questions, contact{" "}
        <a className="text-accent underline underline-offset-4" href="mailto:lungud995@gmail.com">
          lungud995@gmail.com
        </a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-sm text-accent">ApertureEye</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
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
            <a className="text-accent underline underline-offset-4" href="/privacy">Privacy Policy</a>
            <span className="px-3 text-muted">·</span>
            <a className="text-accent underline underline-offset-4" href="/">Portfolio</a>
          </nav>
        </div>
      </article>
    </div>
  );
}
