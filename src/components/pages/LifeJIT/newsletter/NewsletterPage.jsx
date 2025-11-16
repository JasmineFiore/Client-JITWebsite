import NewsletterSection from "./NewsletterSection";

export default function NewsletterPage() {
  return (
    <section>
      <h2 className="text-5xl font-bold px-14 py-8 bg-[#0A2342] text-yellow-400 mb-8">
        Newsletter
      </h2>
      <NewsletterSection
        year="2025"
        newsletters={[
          {
            image: "/images/newsletter.png",
            title: "JIT JAN Newsletter Vol 1",
            pdfUrl: "/E Newsletter/JIT JAN Newsletter Vol 1 Year- 2025.pdf",
          },
        ]}
      />
      <NewsletterSection
        year="2024"
        newsletters={[
          {
            image: "/images/newsletter.png",
            title: "JIT JAN Newsletter Vol 1",
            pdfUrl: "/E Newsletter/JIT JAN Newsletter Vol 1 Year- 2024.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT JULY Newsletter Vol 2",
            pdfUrl: "/E Newsletter/JIT JulyNewsletter Vol 2 Year- 2024.pdf",
          },
        ]}
      />
      <NewsletterSection
        year="2023"
        newsletters={[
          {
            image: "/images/newsletter.png",
            title: "JIT JAN Newsletter Vol 3",
            pdfUrl: "/E Newsletter/JIT JAN Newsletter Vol 3 2023.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT Feb Newsletter Vol 2",
            pdfUrl: "/E Newsletter/JIT Feb Newsletter Vol 2 Year- 2023.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT MAR Newsletter Vol 1",
            pdfUrl: "/E Newsletter/JIT MAR Newsletter Vol 1Year 2023.pdf",
          },
        ]}
      />
      <NewsletterSection
        year="2022"
        newsletters={[
          {
            image: "/images/newsletter.png",
            title: "JIT JAN Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/January-Newsletter.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT FEB Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Newsletter-Feb-22.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT MAR Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Newsletter_March.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT APRIL Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Newsletter_April.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT MAY Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Newsletter_May.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT JUNE Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/newsletter_-june.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT JULY Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/newsletter_july.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT AUG Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Aug-Newsletter-2.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT SEP Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Sep-Newsletter-1.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT OCT Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Oct-Newsletter.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT NOV Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Nov-Newsletter.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: "JIT DEC Newsletter",
            pdfUrl: "/E Newsletter/Year- 2022/Dec-Newsletter.pdf",
          },
        ]}
      />
      <NewsletterSection
        year="2024"
        newsletters={[
          {
            image: "/images/newsletter.png",
            title: " JIT NOV Newsletter",
            pdfUrl: "/E Newsletter/Year- 2021/Nov2021Newsletter.pdf",
          },
          {
            image: "/images/newsletter.png",
            title: " JIT DEC Newsletter",
            pdfUrl: "/E Newsletter/Year- 2021/Dec2021Newsletter.pdf",
          },
        ]}
      />
    </section>
  );
}
