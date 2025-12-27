import microsoftLogo from '@/assets/logos/microsoft.svg';
import awsLogo from '@/assets/logos/aws.svg';
import nvidiaLogo from '@/assets/logos/nvidia.svg';
import azureLogo from '@/assets/logos/azure.svg';
import googleLogo from '@/assets/logos/google.svg';

const logos = [
  { name: 'Microsoft', src: microsoftLogo, width: 'w-28 md:w-32' },
  { name: 'AWS', src: awsLogo, width: 'w-16 md:w-20' },
  { name: 'NVIDIA', src: nvidiaLogo, width: 'w-24 md:w-28' },
  { name: 'Azure', src: azureLogo, width: 'w-24 md:w-28' },
  { name: 'Google', src: googleLogo, width: 'w-8 md:w-10' },
];

const IBMLogo = () => (
  <svg viewBox="0 0 100 40" className="w-full h-full" fill="currentColor">
    <g className="text-[#0530AD]">
      <rect x="0" y="0" width="24" height="4"/>
      <rect x="0" y="6" width="24" height="4"/>
      <rect x="6" y="12" width="12" height="4"/>
      <rect x="6" y="18" width="12" height="4"/>
      <rect x="0" y="24" width="24" height="4"/>
      <rect x="0" y="30" width="24" height="4"/>
      <rect x="0" y="36" width="24" height="4"/>
      
      <rect x="28" y="0" width="24" height="4"/>
      <rect x="28" y="6" width="18" height="4"/>
      <rect x="28" y="12" width="20" height="4"/>
      <rect x="28" y="18" width="24" height="4"/>
      <rect x="28" y="24" width="20" height="4"/>
      <rect x="28" y="30" width="18" height="4"/>
      <rect x="28" y="36" width="24" height="4"/>
      
      <rect x="56" y="0" width="8" height="4"/>
      <rect x="66" y="0" width="8" height="4"/>
      <rect x="76" y="0" width="24" height="4"/>
      <rect x="56" y="6" width="8" height="4"/>
      <rect x="68" y="6" width="6" height="4"/>
      <rect x="76" y="6" width="6" height="4"/>
      <rect x="84" y="6" width="6" height="4"/>
      <rect x="92" y="6" width="8" height="4"/>
      <rect x="62" y="12" width="6" height="4"/>
      <rect x="70" y="12" width="6" height="4"/>
      <rect x="82" y="12" width="8" height="4"/>
      <rect x="92" y="12" width="8" height="4"/>
      <rect x="62" y="18" width="14" height="4"/>
      <rect x="82" y="18" width="8" height="4"/>
      <rect x="92" y="18" width="8" height="4"/>
      <rect x="62" y="24" width="6" height="4"/>
      <rect x="70" y="24" width="6" height="4"/>
      <rect x="82" y="24" width="8" height="4"/>
      <rect x="92" y="24" width="8" height="4"/>
      <rect x="56" y="30" width="8" height="4"/>
      <rect x="68" y="30" width="6" height="4"/>
      <rect x="76" y="30" width="6" height="4"/>
      <rect x="84" y="30" width="6" height="4"/>
      <rect x="92" y="30" width="8" height="4"/>
      <rect x="56" y="36" width="8" height="4"/>
      <rect x="66" y="36" width="8" height="4"/>
      <rect x="76" y="36" width="24" height="4"/>
    </g>
  </svg>
);

const LogoItem = ({ logo }: { logo: typeof logos[0] }) => (
  <div className={`${logo.width} h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0`}>
    <img 
      src={logo.src} 
      alt={`${logo.name} logo`} 
      className="w-full h-full object-contain"
    />
  </div>
);

export const TrustedBy = () => {
  return (
    <section className="py-16 bg-background border-b border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-wider">
          Trusted by MSPs and Built for Enterprise
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient masks for seamless edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-10 md:gap-14 lg:gap-20 px-5 md:px-7 lg:px-10">
            <div className="w-32 md:w-40 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
              <IBMLogo />
            </div>
            {logos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-10 md:gap-14 lg:gap-20 px-5 md:px-7 lg:px-10">
            <div className="w-32 md:w-40 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
              <IBMLogo />
            </div>
            {logos.map((logo) => (
              <LogoItem key={`${logo.name}-dup`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
