import Image from "next/image";

export default function ImagesSection() {
  return (
    <section className="w-full bg-[#F8CFCF] relative overflow-hidden">
      {/* Red background layer */}
      <div className="absolute inset-0 bg-[#DA3C3C] h-[500px] z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 py-8 text-white">
        <div className="container mx-auto px-11">

          {/* Top Section - Text and Right Image */}
          <div className="flex flex-col lg:flex-row items-start mb-6 max-w-[1200px] mx-auto px-4 gap-8"> 
          
            {/* Left Text */}
            <div className="w-full lg:w-1/2 mb-2 lg:pl-25 ">
              <h2 className="text-3xl font-bold font-zodiak leading-tight mb-4">
                Grow your business and <br />
                earn lasting customer trust — <br />
                without the wait.
              </h2>
              <p className="text-base font-general font-medium text-[#F5F5F5]">
                At Feeding Trends, we connect you with the right people, <br/> powerful tools, 
                and a platform built to turn your ideas into impact.
              </p>
            </div>

            {/* Top Right Image */}
            <div className="relative w-full lg:w-1/2 h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/Business/womens1.jpg"
                alt="Top Image"
                fill
                className="object-cover rounded-xl"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Bottom Section - Two Images (Visible only on Laptop/Desktop) */}
          <div className="relative hidden lg:flex flex-col lg:flex-row items-start gap-2 lg:gap-3">
            
            {/* Bottom Left Image */}
            <div className="relative left-15 lg:w-[450px] h-[300px] rounded-xl overflow-hidden lg:-mt-12 ml-[60px]">
              <Image
                src="/Business/tablet1.jpg"
                alt="Bottom Left"
                fill
                className="object-cover rounded-xl"
                style={{ objectPosition: "83% 50%" }}
              />
            </div>

            {/* Bottom Right Image */}
            <div className="relative shrink-0 w-full lg:w-[700px] h-[350px] rounded-xl overflow-hidden lg:mt-2 lg:ml-[82px]">
              <Image
                src="/Business/peoples1.jpg"
                alt="Bottom Right"
                fill
                className="object-cover rounded-xl"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}








// import Image from "next/image";

// export default function ImagesSection() {
//   return (
//     <section className="w-full bg-[#F8CFCF] relative overflow-hidden">
//       {/* Red background layer */}
//       <div className="absolute inset-0 bg-[#DA3C3C] h-[500px] z-0"></div>

//       {/* Content Layer */}
//       <div className="relative z-10 py-8 text-white">
//         <div className="container mx-auto px-11">

//           {/* Top Section - Text and Right Image */}
//           <div className="flex flex-col lg:flex-row items-start mb-6 max-w-[1200px] mx-auto px-4 gap-8"> 
          
//             {/* Left Text */}
//             <div className="w-full lg:w-1/2 mb-2 lg:pl-25 ">
//               <h2 className="text-3xl font-bold font-zodiak leading-tight mb-4">
//                 Grow your business and <br />
//                 earn lasting customer trust — <br />
//                 without the wait.
//               </h2>
//               <p className="text-base font-general font-medium text-[#F5F5F5]">
//                 At Feeding Trends, we connect you with the right people, <br/> powerful tools, 
//                 and a platform built to turn your ideas into impact.
//               </p>
             
//             </div>

//             {/* Top Right Image */}
//             <div className="relative w-full lg:w-1/2 h-[300px] rounded-xl overflow-hidden">
//               <Image
//                 src="/Business/womens1.jpg"
//                 alt="Top Image"
//                 fill
//                 className="object-cover rounded-xl"
//                 sizes="100vw"
//               />
//             </div>

//           </div>


//           {/* Bottom Section - Two Images */}

//             <div className="relative flex flex-col lg:flex-row items-start gap-2 lg:gap-3">

//               {/* Bottom Left Image - Slightly Upward & Shifted Right */}
//               <div className="relative left-15 lg:w-[450px] h-[300px] rounded-xl overflow-hidden lg:-mt-12 ml-[60px]">
//                 <Image
//                   src="/Business/tablet1.jpg"
//                   alt="Bottom Left"
//                   fill
//                   className="object-cover rounded-xl"
//                   style={{ objectPosition: "83% 50%" }}
//                 />
//               </div>

//               {/* Bottom Right Image - Slightly Downward & Shifted Right */}
//               <div className="relative shrink-0 w-full lg:w-[700px] h-[350px] rounded-xl overflow-hidden lg:mt-2 lg:ml-[82px]">
//                 <Image
//                   src="/Business/peoples1.jpg"
//                   alt="Bottom Right"
//                   fill
//                   className="object-cover rounded-xl"
//                   style={{ objectPosition: "50% 30%" }}
//                 />
//               </div>

//             </div>


//         </div>
//       </div>
//     </section>
//   );
// }