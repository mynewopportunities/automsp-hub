import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustedBy } from '@/components/TrustedBy';
import { ProblemSolution } from '@/components/ProblemSolution';
import { HowItWorks } from '@/components/HowItWorks';
import { Metrics } from '@/components/Metrics';
import { ForWhom } from '@/components/ForWhom';
import { Security } from '@/components/Security';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { TeamAvatars } from '@/components/TeamAvatars';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <TeamAvatars />
        <ProblemSolution />
        <HowItWorks />
        <Metrics />
        <ForWhom />
        <Security />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
