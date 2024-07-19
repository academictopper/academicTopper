import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
    <HeroSection/>
      </main>
  );
}
export function generateMetadata(){
  return{
    title:"Academic Topper",
    description:"Academic topper",
    keywords:"Academic topper",
    robots:"index, follow",
    language:"EN",

  }
}

