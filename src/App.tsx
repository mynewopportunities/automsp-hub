import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ScrollToTop } from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";

// Eager load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages for better performance
const Solutions = lazy(() => import("./pages/Solutions"));
const WhyAutoMSP = lazy(() => import("./pages/WhyAutoMSP"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Auth = lazy(() => import("./pages/Auth"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Portal = lazy(() => import("./pages/Portal"));
const WorkplacePolicy = lazy(() => import("./pages/WorkplacePolicy"));
const Support = lazy(() => import("./pages/Support"));
const AITriage = lazy(() => import("./pages/solutions/AITriage"));
const IntelligentWorkflows = lazy(() => import("./pages/solutions/IntelligentWorkflows"));
const ComplianceSLA = lazy(() => import("./pages/solutions/ComplianceSLA"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const Webinars = lazy(() => import("./pages/resources/Webinars"));
 const AdminSubmissions = lazy(() => import("./pages/admin/Submissions"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/ai-triage" element={<AITriage />} />
              <Route path="/solutions/intelligent-workflows" element={<IntelligentWorkflows />} />
              <Route path="/solutions/compliance-sla" element={<ComplianceSLA />} />
              <Route path="/why-automsp" element={<WhyAutoMSP />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/whitepapers" element={<Whitepapers />} />
              <Route path="/resources/webinars" element={<Webinars />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/workplace-policy" element={<WorkplacePolicy />} />
              <Route path="/support" element={<Support />} />
               <Route path="/admin/submissions" element={<AdminSubmissions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
