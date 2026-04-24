import Image from "next/image";
import Link from "next/link";

const trainers = [
  { name: "Rajesh Kumar", role: "The G.O.A.T", img: "https://instagram.fakl2-1.fna.fbcdn.net/v/t51.2885-19/317666578_659202725903647_2788274066919346386_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjAuYzIifQ&_nc_ht=instagram.fakl2-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gHhNIWOOqjsns3IleSKhO31rSATrb1soituzSgzS_kc6kahawNFEf9QN1QLn3n_61o&_nc_ohc=nd-fTo8JnkYQ7kNvwFlrQYk&_nc_gid=3Y3hSuNGHQ6joPrYWWzkAA&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_Af36w6wkWcOxDRQCtv6TQcHo1nD2he8UyeyYk1_mKl36GQ&oe=69F0EA39&_nc_sid=1e20d2" },
  { name: "Arnold Bro", role: "Cool Guy", img: "https://i.pinimg.com/736x/6a/18/63/6a18635fd170d1c92f2d5a99589acd78.jpg" },
  { name: "Michael Jackson", role: "Zumba Instructor", img: "https://i.pinimg.com/736x/51/e1/31/51e1316f4e4b8b3ad3fb8ca689c92e71.jpg" },
  { name: "Larry", role: "Cat", img: "https://i.pinimg.com/736x/b0/38/12/b03812009fbc0ec8051435043be363d0.jpg"},
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[#080808] px-20 py-24 overflow-hidden">
      <div className="flex justify-between items-end mb-14">
        <div>
          <div className="flex items-center gap-2.5 font-barlow-condensed text-[11px] font-semibold tracking-[4px] uppercase text-[#E8593C] mb-5 before:content-[''] before:block before:w-6 before:h-px before:bg-[#E8593C]">
            The Team
          </div>
          <h2 className="font-oswald font-bold text-white uppercase leading-[0.95]" style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>
            Meet Your <span className="text-[#E8593C]">Coaches</span>
          </h2>
        </div>
        <Link href="#" className="font-barlow-condensed text-sm font-semibold tracking-[2px] uppercase text-[#f0ede8] border border-white/10 px-8 py-4 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
          All Trainers →
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {trainers.map((t, i) => (
          <div
            key={t.name}
            className="reveal group relative overflow-hidden cursor-none"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Orange left accent */}
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#E8593C] group-hover:h-full transition-all duration-400 z-10" />

            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[rgba(8,8,8,0.95)] to-transparent translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
              <div className="font-oswald font-semibold text-xl uppercase text-white">{t.name}</div>
              <div className="font-barlow-condensed text-[12px] tracking-[2px] uppercase text-[#E8593C] mt-1">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
