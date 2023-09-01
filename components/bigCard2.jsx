"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Instagram, Check, ChevronUp } from "lucide-react";
const BigCard2 = ({ description, title }) => {
  const [hovered, setIsHovered] = useState(false);
  return (
    <Card
      className="w-full h-[400px] col-span-5 md:col-span-12 lg:col-span-6 px-6 py-4 flex flex-col md:flex-row md:justify-between text-primary-foreground group"
      onMouseEnter={() => {
        setIsHovered((prevHover) => true);
      }}
      onMouseLeave={() => {
        setIsHovered((prevHover) => false);
      }}
    >
      <div className="w-full md:w-1/3  flex flex-col justify-between ">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-start">
          <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center mb-4">
            <Instagram size={30} color="rgb(51,152,106)" />
          </div>
          <h2 className="font-semibold whitespace-nowrap">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="hidden md:flex flex-col gap-2">
          <span className="text-xs text-foreground flex gap-2">
            <Check size={15} color="rgb(51,152,106)" />
            100% automated
          </span>
          <span className="text-xs text-foreground flex gap-2">
            <Check size={15} color="rgb(51,152,106)" />
            100% reliable
          </span>
          <span className="text-xs text-foreground flex gap-2">
            <Check size={15} color="rgb(51,152,106)" />
            Proven results
          </span>
        </div>
      </div>
      <div className="w-full md:min-w-1/3 md:w-1/2 h-full flex items-center justify-center flex-col gap-2 overflow-hidden relative ">
        <div className="w-full h-8 md:h-12 bg-muted transition duration-300 rounded-lg group-hover:-translate-y-12 md:group-hover:-translate-y-20 flex justify-between px-2 z-10">
          <div className="flex gap-2 items-center justify-between w-full">
            <div className="w-24 h-4 rounded-md bg-muted-foreground ml-2"></div>
            <div className="transition duration-300 group-hover:rotate-180">
              <ChevronUp color="#33996B" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col absolute z-0 opacity-0 group-hover:opacity-100 transition duration-300 mt-9 gap-2">
          <div className="w-full bg-muted rounded-lg h-8 flex gap-2 items-center px-2 ">
            <div className="w-4 h-4 rounded-full bg-muted-foreground "></div>
            <div className="w-2/4 h-4 rounded-md bg-muted-foreground "></div>
          </div>
          <div className="w-full bg-muted rounded-lg h-8 flex gap-2 items-center px-2 ">
            <div className="w-4 h-4 rounded-full bg-muted-foreground "></div>
            <div className="w-3/4 h-4 rounded-md bg-muted-foreground "></div>
          </div>
          <div className="hidden w-full bg-muted rounded-lg h-8 md:flex gap-2 items-center px-2 ">
            <div className="w-4 h-4 rounded-full bg-muted-foreground "></div>
            <div className="w-3/4 h-4 rounded-md bg-muted-foreground "></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BigCard2;

//  <div className="absolute w-10 h-full inset-y-0 bg-gradient-to-r  from-card to-transparent  z-20 left-0"></div>
// <div className="absolute w-10 h-full inset-y-0 bg-gradient-to-l from-card to-transparent z-20 right-0"></div>

// <svg
//   className="translate-y-24 md:translate-y-0 scale-125 md:scale-150 lg:scale-125 absolute  h-fit z-10 group-hover:-translate-x-16 transition duration-300 ease-out "
//   width="500"
//   height="337"
//   viewBox="0 0 510 137"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="M505.078 23.6041L507.857 25.217V136.846H2V23.7958L4.77879 23.6762L7.55757 23.285L10.3364 23.6762L13.1152 20.0111L15.894 19.6199L18.6728 19.0052L21.4515 20.9774L24.2304 21.6318L27.0092 22.5344L29.788 22.4305L32.5668 22.9971L35.3455 22.7021L38.1244 21.7118L40.9031 19.1091L43.682 19.3248L46.4608 18.9817L49.2395 18.3429L52.0183 18.3111L54.7971 17.1849L57.5759 15.9795L60.3547 15.8196L63.1335 13.4964L65.9123 11.285L68.6911 11.2291L71.4699 10.6546L74.2487 13.1052L77.0275 14.9098L79.8063 15.9236L82.5851 19.1169L85.3639 21.8079L88.1427 22.9094L90.9215 25.217L93.7003 24.8895L96.479 27.1411L99.2579 29.608L102.037 31.6355L104.815 34.1186L107.594 35.8354L110.373 36.5061L113.152 37.1767L115.931 35.2123L118.709 35.452L121.488 36.8252L124.267 38.0306L127.046 39.0047L129.825 41.1363L132.603 44.1066L135.382 46.5097L138.161 46.9725L140.94 45.743L143.719 45.0008L146.497 44.1463L149.276 42.6614L152.055 40.7853L154.834 38.0066L157.613 37.7115L160.391 36.9129L163.17 35.2285L165.949 37.5595L168.728 42.3099L171.507 45.4557L174.285 48.881L177.064 51.4596L179.843 56.2977L182.622 60.4015L185.401 62.661L188.179 60.5691L190.958 61.7428L193.737 61.6069L196.516 60.8245L199.295 57.639L202.073 54.3735L204.852 49.7428L207.631 45.5356L210.41 40.6014L213.189 37.5998L215.967 35.1245L218.746 33.0567L221.525 31.963L224.304 29.6477L227.082 27.2048L229.861 24.211L232.64 23.3409L235.419 20.7058L238.198 17.8315L240.976 15.1412L243.755 12.8817L246.534 11.3889L249.313 9.37703L252.092 6.26303L254.87 4.49087L257.649 3.63636L260.428 3.0937L263.207 2.98975L265.986 3.74031L268.764 4.71441L271.543 5.28949L274.322 6.62238L277.101 7.53277L282.658 7.99551L285.437 9.30494L288.216 10.3908L290.995 10.1432L293.774 12.0434L296.552 12.6022L299.331 14.375L302.11 16.0197L304.889 17.1134L307.667 18.0791L310.446 20.8578L313.225 21.0573L316.004 22.4143L318.783 22.4305L321.561 23.3409L324.34 24.7615L327.119 28.7294L329.898 30.5022L332.677 31.8116L335.456 32.5856L338.234 33.3283L341.013 35.8673L343.792 37.7752L346.571 37.2963L349.349 36.961L352.128 36.0109L354.907 34.526L357.686 32.9533L360.465 29.4962L363.243 26.1827L366.022 21.3127L368.801 18.8057L371.58 18.0473L374.359 18.5262L377.137 19.165L379.916 20.1391L382.695 19.692L385.474 19.8278L388.253 18.5424L391.031 17.209L393.81 15.8839L396.589 14.8221L399.368 13.3606L402.147 13.3288L404.925 14.3431L407.704 15.6123L410.483 15.652L413.262 14.7902L416.041 12.7861L418.819 11.1252L421.598 7.73229L424.377 4.55458L427.156 2.43089L429.935 2.25541L432.713 2L435.492 2.82209L438.271 4.73844L441.05 6.7023L443.828 8.82599L446.607 11.788L449.386 14.0078L452.165 15.405L454.944 16.8658L457.723 18.2149L460.501 21.3368L463.28 22.8775L466.059 23.7555L468.838 24.2909L471.616 23.8997L474.395 25.9675L477.29 25.8636L480.069 25.1851L482.847 25.3924L485.626 24.1629L488.405 21.6961L491.184 20.7058L493.963 18.1993L496.741 19.1253L499.52 20.171L502.299 22.4863L505.078 23.6041Z"
//     fill='url("#paint0_linear_4470_831")'
//   ></path>
//   <path
//     d="M507.999 25.217L505.22 23.6041L502.442 22.4863L499.663 20.171L496.884 19.1253L494.105 18.1993L491.326 20.7058L488.548 21.6961L485.769 24.1629L482.99 25.3924L480.211 25.1851L477.432 25.8636L474.538 25.9675L471.759 23.8997L468.98 24.2909L466.201 23.7555L463.423 22.8775L460.644 21.3368L457.865 18.2149L455.086 16.8658L452.307 15.405L449.529 14.0078L446.75 11.788L443.971 8.82599L441.192 6.7023L438.413 4.73844L435.635 2.82209L432.856 2L430.077 2.25541L427.298 2.43089L424.519 4.55458L421.741 7.73229L418.962 11.1252L416.183 12.7861L413.404 14.7902L410.625 15.652L407.847 15.6123L405.068 14.3431L402.289 13.3288L399.51 13.3606L396.732 14.8221L393.953 15.8839L391.174 17.209L388.395 18.5424L385.616 19.8278L382.838 19.692L380.059 20.1391L377.28 19.165L374.501 18.5262L371.722 18.0473L368.944 18.8057L366.165 21.3127L363.386 26.1827L360.607 29.4962L357.828 32.9533L355.05 34.526L352.271 36.0109L349.492 36.961L346.713 37.2963L343.934 37.7752L341.156 35.8673L338.377 33.3283L335.598 32.5856L332.819 31.8116L330.04 30.5022L327.262 28.7294L324.483 24.7615L321.704 23.3409L318.925 22.4305L316.146 22.4143L313.368 21.0573L310.589 20.8578L307.81 18.0791L305.031 17.1134L302.252 16.0197L299.474 14.375L296.695 12.6022L293.916 12.0434L291.137 10.1432L288.358 10.3908L285.58 9.30494L282.801 7.99551L277.243 7.53277L274.465 6.62238L271.686 5.28949L268.907 4.71441L266.128 3.74031L263.349 2.98975L260.571 3.0937L257.792 3.63636L255.013 4.49087L252.234 6.26303L249.455 9.37703L246.677 11.3889L243.898 12.8817L241.119 15.1412L238.34 17.8315L235.561 20.7058L232.783 23.3409L230.004 24.211L227.225 27.2048L224.446 29.6477L221.667 31.963L218.889 33.0567L216.11 35.1245L213.331 37.5998L210.552 40.6014L207.773 45.5356L204.995 49.7428L202.216 54.3735L199.437 57.639L196.658 60.8245L193.879 61.6069L191.101 61.7428L188.322 60.5691L185.543 62.661L182.764 60.4015L179.986 56.2977L177.207 51.4596L174.428 48.881L171.649 45.4557L168.87 42.3099L166.092 37.5595L163.313 35.2285L160.534 36.9129L157.755 37.7115L154.976 38.0066L152.198 40.7853L149.419 42.6614L146.64 44.1463L143.861 45.0008L141.082 45.743L138.304 46.9725L135.525 46.5097L132.746 44.1066L129.967 41.1363L127.188 39.0047L124.41 38.0306L121.631 36.8252L118.852 35.452L116.073 35.2123L113.294 37.1767L110.516 36.5061L107.737 35.8354L104.958 34.1186L102.179 31.6355L99.4004 29.608L96.6216 27.1411L93.8429 24.8895L91.064 25.217L88.2853 22.9094L85.5065 21.8079L82.7277 19.1169L79.9489 15.9236L77.1701 14.9098L74.3913 13.1052L71.6125 10.6546L68.8337 11.2291L66.0549 11.285L63.2761 13.4964L60.4973 15.8196L57.7185 15.9795L54.9397 17.1849L52.1609 18.3111L49.3821 18.3429L46.6033 18.9817L43.8245 19.3248L41.0457 19.1091L38.2669 21.7118L35.4881 22.7021L32.7094 22.9971L29.9306 22.4305L27.1517 22.5344L24.373 21.6318L21.5941 20.9774L18.8153 19.0052L16.0366 19.6199L13.2578 20.0111L10.479 23.6762L7.70015 23.285L4.92136 23.6762L2.14258 23.7958"
//     stroke={hovered ? "#3FCF8E" : "#5D5D5D"}
//     stroke-width="3px"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     fill="none"
//   ></path>
//   <defs>
//     <linearGradient
//       id="paint0_linear_4470_831"
//       x1="253.929"
//       y1="-92.5"
//       x2="254.929"
//       y2="136.846"
//       gradientUnits="userSpaceOnUse"
//     >
//       {/* 5F5D5D */}
//       {/* 33996B */}
//       <stop stop-color={hovered ? "#33996B" : "#5D5D5D"}></stop>
//       <stop offset="1" stop-color="#474747" stop-opacity="0"></stop>
//     </linearGradient>
//     <linearGradient
//       id="paint0_linear_4470_831"
//       x1="253.929"
//       y1="-92.5"
//       x2="254.929"
//       y2="136.846"
//       gradientUnits="userSpaceOnUse"
//     >
//       <stop stop-color="#93C5FD"></stop>
//       <stop offset="1" stop-color="#93C5FD" stop-opacity="0"></stop>
//     </linearGradient>
//   </defs>
// </svg>
// <div className="w-24 h-8 bg-secondary absolute top-2/3 rounded-lg opacity-0 group-hover:top-1/4 group-hover:opacity-100 transition-all duration-300 flex items-center px-1 gap-2 z-30">
//   <div className="bg-muted h-2/3 w-1/4 rounded-full "></div>
//   <div className="h-2/3 rounded-lg w-full bg-muted flex-1"></div>
// </div>
// <div className="h-1/2 absolute top-16 border-l-4 border-muted group-hover:border-secondary opacity-0 group-hover:opacity-80 transition duration-200 z-10"></div>
