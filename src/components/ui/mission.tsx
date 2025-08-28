import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string; 
};

export default function Card({ icon, title, description, color }: CardProps) {
  return (
    <div className="relative w-full max-w-sm text-center">
      {/* Arc background */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-r ${color} z-0`}
      ></div>

      {/* White circle */}
      <div className="relative z-10 bg-white shadow-xl rounded-full p-8 flex flex-col items-center gap-4 min-h-[280px]">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}