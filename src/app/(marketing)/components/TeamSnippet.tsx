import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { team } from "@/content/copy";

export default function TeamSnippet() {
  return (
    <section className="py-20 bg-white/[0.02]">
      <div className="container-narrow">
        <div className="mb-12">
          <h2 className="text-4xl font-mono-bold mb-6">{team.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {team.description}
          </p>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 mb-8">
            <p className="text-muted-foreground font-medium">{team.edge}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {team.founders.map((founder) => (
            <Card key={founder.name} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                  <Image 
                    src={founder.img} 
                    alt={founder.name} 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono-medium text-lg mb-1">{founder.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{founder.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{founder.bio}</p>
                <p className="text-muted-foreground text-xs">{founder.expertise}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Link 
            href="/founders" 
            className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-muted-foreground transition-colors group"
          >
            {team.cta.text} 
            <span className="group-hover:translate-x-1 transition-transform">{team.cta.arrow}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}