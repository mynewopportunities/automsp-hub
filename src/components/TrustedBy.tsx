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

export const TrustedBy = () => {
  return (
    <section className="py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-wider">
          Trusted by MSPs and Built for Enterprise
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          {/* ServiceNow inline SVG */}
          <div className="w-32 md:w-40 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 512 108" className="w-full h-full" fill="currentColor">
              <path d="M149.7 53.7c0-16.2 12.6-28.7 28.7-28.7 16.2 0 28.7 12.6 28.7 28.7 0 16.2-12.6 28.7-28.7 28.7-16.2.1-28.7-12.5-28.7-28.7zm45.5 0c0-10.2-7.4-17.6-16.8-17.6-9.5 0-16.8 7.4-16.8 17.6 0 10.2 7.4 17.6 16.8 17.6 9.4 0 16.8-7.4 16.8-17.6zM0 26.4h12.3l.1 5.4c4.2-4.3 9.4-6.8 16-6.8 12.7 0 20.9 8.4 20.9 21.8v34.4H37V49.6c0-8.3-4.4-13.3-12-13.3-7.8 0-12.7 5.1-12.7 13.8v31.2H0V26.4zm231.3 0h12.3l.1 5.4c4.2-4.3 9.4-6.8 16-6.8 12.7 0 20.9 8.4 20.9 21.8v34.4h-12.3V49.6c0-8.3-4.4-13.3-12-13.3-7.8 0-12.7 5.1-12.7 13.8v31.2h-12.3V26.4zm-63.4 0h12.3v54.9h-12.3v-6.1c-4.2 4.8-10.1 7.5-17.5 7.5-14.5 0-26.1-12.6-26.1-28.7 0-16.2 11.6-28.7 26.1-28.7 7.4 0 13.3 2.7 17.5 7.5v-6.4zm-16 44c9.4 0 16.8-7.4 16.8-17.6 0-10.2-7.4-17.6-16.8-17.6-9.5 0-16.8 7.4-16.8 17.6-.1 10.2 7.3 17.6 16.8 17.6zm169.8-44h12.3l-.1 54.9h-12.3V75c-4.2 4.8-10.1 7.5-17.5 7.5-14.5 0-26.1-12.6-26.1-28.7 0-16.2 11.6-28.7 26.1-28.7 7.4 0 13.3 2.7 17.5 7.5v-6.2zm-16 44c9.4 0 16.8-7.4 16.8-17.6 0-10.2-7.4-17.6-16.8-17.6-9.5 0-16.8 7.4-16.8 17.6 0 10.2 7.3 17.6 16.8 17.6zm-42.3-44h-12.3l-12.1 38.6-12.6-38.6h-12.5l19.7 54.9h11l19.8-54.9zm84.4 54.9h12.7l16.3-43.8 16.3 43.8h12.8l23.5-54.9h-13.3l-16.3 43.3-16.2-43.3h-13l-16.2 43.3-16.3-43.3h-13.4l23.1 54.9zm110.7-55.9c16.2 0 27.3 12.4 27.3 29.6v3.3h-43c1.5 8.4 8.2 14.1 17.4 14.1 6.4 0 11.8-2.4 15.6-7l7.7 6.9c-5.6 6.8-14 10.4-24 10.4-17.1 0-29.1-12.3-29.1-28.7.1-16 12.1-28.6 28.1-28.6zm-15.3 23.3h30.7c-1.3-8.2-7.5-13.4-15.1-13.4-7.9 0-14.1 5.2-15.6 13.4zM76.3 25c-8.1 0-15.1 3.3-20.1 8.8l-7.6-7.1C55.3 19.2 64.9 14 76.3 14c18.2 0 31.4 13.5 31.4 32.5v34.8H95.3V75c-5 5.7-12.1 8.9-20.6 8.9-12.5 0-22.9-8.7-22.9-21.1 0-12.3 10.4-21 22.9-21 8.5 0 15.6 3.2 20.6 8.8v-4.2c0-11.8-8-16.4-19-16.4zm-1.5 46.5c8.4 0 15.3-4.5 15.3-13.1 0-8.7-6.9-13.2-15.3-13.2s-13.5 4.4-13.5 13.2c0 8.7 5.1 13.1 13.5 13.1z" className="text-muted-foreground"/>
            </svg>
          </div>
          
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300`}
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};