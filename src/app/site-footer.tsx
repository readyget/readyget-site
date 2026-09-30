import Link from "next/link";

// Business identity shown on every page (rendered from the root layout).
// Keep the legal name exactly "Ready Get LLC": it must match the company's
// registration records, which reviewers compare against this site.
const BUSINESS = {
  legalName: "Ready Get LLC",
  street: "4030 Wake Forest Road STE 349",
  locality: "Raleigh",
  region: "NC",
  postalCode: "27609",
  country: "United States",
  phoneDisplay: "(919) 984-2404",
  phoneE164: "+19199842404",
  email: "hello@readyget.app",
} as const;

const linkClass =
  "hover:text-slate-900 dark:hover:text-white transition-colors";

export function SiteFooter() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold">{BUSINESS.legalName}</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              The company behind Postie. Apps that connect people.
            </p>
            <address className="not-italic text-sm text-slate-600 dark:text-slate-400 mt-4 space-y-1">
              <span className="block">{BUSINESS.street}</span>
              <span className="block">
                {`${BUSINESS.locality}, ${BUSINESS.region} ${BUSINESS.postalCode}, ${BUSINESS.country}`}
              </span>
              <span className="block">
                Phone:{" "}
                <a href={`tel:${BUSINESS.phoneE164}`} className={linkClass}>
                  {BUSINESS.phoneDisplay}
                </a>
              </span>
              <span className="block">
                Email:{" "}
                <a href={`mailto:${BUSINESS.email}`} className={linkClass}>
                  {BUSINESS.email}
                </a>
              </span>
            </address>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://trypostie.com"
              target="_blank"
              className="text-slate-600 dark:text-slate-400 hover:text-[var(--postie-coral)] transition-colors"
            >
              Postie
            </Link>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>
            {`© ${new Date().getFullYear()} ${BUSINESS.legalName}. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a href="https://trypostie.com/privacy-policy" className={linkClass}>
              Privacy Policy
            </a>
            <a href="https://trypostie.com/terms-of-service" className={linkClass}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
