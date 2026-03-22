import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioBackground } from "@/components/portfolio-background";
import Navbar from "@/components/Navbar";
import { DATA } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: DATA.seo.title,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.seo.description,
  keywords: DATA.seo.keywords.join(", "),
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  metadataBase: new URL(DATA.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: DATA.seo.locale,
    url: DATA.url,
    title: DATA.seo.title,
    description: DATA.seo.description,
    siteName: `${DATA.name} — Portfolio`,
    images: [
      {
        url: DATA.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full-Stack Developer & Product Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.seo.title,
    description: DATA.seo.description,
    creator: DATA.seo.twitterHandle,
    images: [DATA.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    email: DATA.contact.email,
    telephone: DATA.contact.tel,
    jobTitle: "Full-Stack Developer & Product Engineer",
    description: DATA.seo.description,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: DATA.education[0].school,
    },
    knowsAbout: [...DATA.skills],
    sameAs: Object.values(DATA.contact.social)
      .map((s) => s.url)
      .filter((u) => u.startsWith("https://")),
    worksFor: DATA.work.map((w) => ({
      "@type": "Organization",
      name: w.company,
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${DATA.name} — Portfolio`,
    url: DATA.url,
    description: DATA.seo.description,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}${DATA.avatarUrl}`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <PortfolioBackground />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
