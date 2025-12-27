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

const SalesforceLogo = () => (
  <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
    <path 
      d="M50.5 16c-4.8 0-9 2.5-11.5 6.2-2.2-1.4-4.8-2.2-7.5-2.2-8 0-14.5 6.5-14.5 14.5 0 1.2.2 2.4.4 3.5C9.8 40 4 47 4 55.5 4 65.4 12 73.5 22 73.5c1.8 0 3.5-.2 5.2-.7 2.5 4.2 7 7.2 12.3 7.2 4.8 0 9-2.4 11.5-6 2.5 3.6 6.7 6 11.5 6 5.3 0 9.8-3 12.3-7.2 1.7.5 3.4.7 5.2.7 10 0 18-8.1 18-18 0-8.5-5.8-15.5-13.4-17.5.3-1.1.4-2.3.4-3.5 0-8-6.5-14.5-14.5-14.5-2.7 0-5.3.8-7.5 2.2C60.5 18.5 55.3 16 50.5 16z" 
      fill="#00A1E0"
    />
    <text x="22" y="52" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
      salesforce
    </text>
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
              <SalesforceLogo />
            </div>
            {logos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-10 md:gap-14 lg:gap-20 px-5 md:px-7 lg:px-10">
            <div className="w-32 md:w-40 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
              <SalesforceLogo />
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
