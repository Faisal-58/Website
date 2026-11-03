import { Breadcrumbs } from "@/components/seo/ContentBlocks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get in touch",
  description:
    "Email info@cuzec.io or call +923085007407. Cuzec is based in Lahore, Pakistan, and works with clients mainly in the UK and US.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />
      </div>
      {children}
    </>
  );
}
