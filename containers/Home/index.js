import Image from "next/image";
import { createSlug } from "@/utils/slug";

export default function Home({ data }) {

  const goToGame = (name) => {
    window.location.href = `/games/${createSlug(name)}`;
  };

  return (
    <>
      <main className="min-h-screen w-full bg-blue-400 p-4">

        <div className="gamesGrid grid gap-4">
          {data?.map((item, index) => {

            const isLCP = index === 0; // 🔥 First image = LCP target

            return (
              <div
                key={index}
                className={`MainHVR gameCard relative ${
                  index === 4 ? "big-right" : index === 12 ? "big-left" : ""
                }`}
                onClick={() => goToGame(item.name)}
              >

                <Image
                  src={item.banner}
                  alt={item.name}
                  fill
                  className="object-cover"

                  /** ---------------------------------------
                   ⚡ LCP Optimization Rule:
                   • Top First Image → eager load + priority=true + fetchpriority=high
                   • All Other → lazy loaded automatically
                 -------------------------------------------- */

                  priority={isLCP}
                  fetchPriority={isLCP ? "high" : "auto"}
                  loading={isLCP ? "eager" : "lazy"}  

                  sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,220px"
                />

                <div className="DataName">
                  {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="w-full bg-blue-400 text-white text-center py-4 border-t border-white">
        <div className="flex justify-center gap-5 text-lg mb-2">
          <a href="/about">About</a>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <p>© {new Date().getFullYear()} FinGameon. All rights reserved.</p>
      </footer>
    </>
  );
}
