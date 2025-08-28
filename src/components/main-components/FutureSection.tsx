
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const FutureSection: React.FC = () => {
  const iconFilenames = ["man.png", "business.png", "investor.png"];

  const cards = [
    {
      title: "If you’re a user:",
      desc: "Start your journey. Be a Trendsetter.",
      btn: "Join the Movement",
    },
    {
      title: "If you’re a business:",
      desc: "Partner with us to build real connections.",
      btn: "Collaborate with Us",
    },
    {
      title: "If you’re an investor or believer:",
      desc: "Back a future that’s already in motion.",
      btn: "Support Our Mission",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center min-h-[700px] bg-black overflow-hidden shadow-xl">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/future.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl w-full px-6 md:px-10 py-20 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-zodiak text-[#FFFCFB] mb-4 drop-shadow-lg">
          Let’s Build the Future — Together
        </h2>
        <p className="text-[#FBE4E4] font-general font-medium text-lg mb-10 max-w-2xl">
          Whether you’re a user, a business, or an investor, there’s a place for you in our movement. Select your path below:
        </p>

        {/* 3D Glass Cards */}
        <div className="grid gap-6 w-full perspective-[1500px]">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 shadow-2xl 
                         transform-gpu hover:rotate-x-2 hover:-rotate-y-2 hover:scale-[1.03] 
                         transition-all duration-500 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src={`/icons/${iconFilenames[index]}`}
                      alt={`${item.title} icon`}
                      width={25}
                      height={25}
                      className="min-w-[25px] h-6 object-contain"
                    />
                    <h3 className="text-lg font-semibold text-[#FFDFDF]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#FFECEC]">{item.desc}</p>
                </div>
                <Button className="bg-[#e2b5b5] text-[#550000] rounded-full px-6 py-2 shadow hover:bg-[#FF9999] transition">
                  {item.btn}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
