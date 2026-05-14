import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>AutoMSP – AI Automation for ServiceNow MSPs</title>
        <meta name="description" content="AI-powered ticket triage and intelligent workflows for ServiceNow MSPs. Cut SLA breaches and manual effort without expensive consulting." />
        <link rel="canonical" href="https://automsp.us/" />
        <meta property="og:title" content="AutoMSP – AI Automation for ServiceNow MSPs" />
        <meta property="og:description" content="AI-powered ticket triage and intelligent workflows for ServiceNow MSPs." />
        <meta property="og:url" content="https://automsp.us/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
