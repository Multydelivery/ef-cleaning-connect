export default function Home() {
  const links = [
    {
      title: "Call Now",
      subtitle: "Speak directly with us",
      href: "tel:+18135329032",
      icon: "📞",
    },
    {
      title: "WhatsApp",
      subtitle: "Send us a message for a quote",
      href: "https://wa.me/18135329032",
      icon: "💬",
    },
    {
      title: "Visit Website",
      subtitle: "Learn more about our services",
      href: "https://ef-cleaning-solutions.vercel.app",
      icon: "🌐",
    },
    {
      title: "Google Reviews",
      subtitle: "See what clients say about us",
      href: "#",
      icon: "⭐",
    },
    {
      title: "Book Cleaning",
      subtitle: "Schedule your cleaning service",
      href: "#",
      icon: "📅",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white p-8 text-center">
          <h1 className="text-3xl font-bold">
            E&F Cleaning Solutions
          </h1>
          <p className="mt-2 text-sm opacity-90">
            Professional Cleaning Services
          </p>
        </div>

        {/* Links */}
        <div className="p-6 space-y-4">

          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow transition"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  {link.icon}
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    {link.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {link.subtitle}
                  </p>
                </div>
              </div>

              <span className="text-gray-400">
                →
              </span>
            </a>
          ))}

        </div>

        {/* Footer */}
        <div className="bg-gray-50 text-center p-4 text-sm text-gray-600">
          Indianapolis & Surrounding Areas  
          <br />
          <span className="font-semibold text-gray-900">
            813-532-9032
          </span>
        </div>

      </div>
    </main>
  );
}
