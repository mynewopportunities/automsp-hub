import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AutoMSP</title>
        <meta name="description" content="AutoMSP Privacy Policy - Learn how we collect, use, disclose, and safeguard your information when using our AI-powered automation platform." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
                  Privacy Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Last Updated:</strong> December 27, 2025
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
                
                <section className="mb-12">
                  <h2>1. Introduction</h2>
                  <p>
                    AutoMSP ("Company," "we," "us," or "our") operates the AutoMSP SaaS platform ("Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including data from MSP customers ("MSP Clients") and their end customers ("End Users").
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service.
                  </p>
                </section>

                <section className="mb-12">
                  <h2>2. Information We Collect</h2>
                  
                  <h3>2.1 Information You Provide Directly</h3>
                  
                  <p><strong>Account Information:</strong></p>
                  <ul>
                    <li>Name, email address, phone number, company name</li>
                    <li>ServiceNow instance details and integration credentials</li>
                    <li>Billing and payment information</li>
                    <li>User preferences and account settings</li>
                  </ul>

                  <p><strong>ServiceNow Data:</strong></p>
                  <ul>
                    <li>Ticket information and ticket metadata</li>
                    <li>Customer contact information from ServiceNow</li>
                    <li>Service catalog data</li>
                    <li>Incident and change management data</li>
                    <li>User access logs and activity records</li>
                  </ul>

                  <p><strong>Communication Data:</strong></p>
                  <ul>
                    <li>Support inquiries and correspondence</li>
                    <li>Feedback, surveys, and feature requests</li>
                    <li>Chat and email communications</li>
                  </ul>

                  <h3>2.2 Information Collected Automatically</h3>
                  
                  <p><strong>Technical Information:</strong></p>
                  <ul>
                    <li>IP addresses and device identifiers</li>
                    <li>Browser type and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Clickstream data and user behavior analytics</li>
                    <li>Performance and error logs</li>
                  </ul>

                  <p><strong>Usage Data:</strong></p>
                  <ul>
                    <li>Features accessed and frequency of use</li>
                    <li>Time spent on platform sections</li>
                    <li>Search queries and filtering activities</li>
                    <li>API calls and integration usage</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>3. How We Use Your Information</h2>
                  
                  <h3>3.1 Primary Uses</h3>
                  
                  <p><strong>1. Service Delivery & Operations</strong></p>
                  <ul>
                    <li>Provision and maintain the AutoMSP platform</li>
                    <li>Process ServiceNow integrations and data synchronization</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Monitor platform performance and reliability</li>
                  </ul>

                  <p><strong>2. AI Processing & Automation</strong></p>
                  <ul>
                    <li>Analyze tickets using AI models (GPT-4 Turbo, Claude 3.5)</li>
                    <li>Generate intelligent ticket classification and routing</li>
                    <li>Provide automated recommendations</li>
                    <li>Improve AI model accuracy through human-in-loop validation</li>
                  </ul>

                  <p><strong>3. Business Operations</strong></p>
                  <ul>
                    <li>Process payments and manage billing</li>
                    <li>Send service updates and maintenance notices</li>
                    <li>Conduct user research and feedback analysis</li>
                    <li>Generate usage reports and analytics</li>
                  </ul>

                  <p><strong>4. Security & Compliance</strong></p>
                  <ul>
                    <li>Detect, prevent, and address fraud and abuse</li>
                    <li>Enforce our Terms of Service</li>
                    <li>Comply with legal obligations</li>
                    <li>Audit and log access to customer data</li>
                  </ul>

                  <h3>3.2 Data Used by MSP Clients</h3>
                  <p>MSP Clients have the ability to:</p>
                  <ul>
                    <li>Access and analyze ticket data belonging to their End Users</li>
                    <li>Use AutoMSP insights to improve ticket resolution</li>
                    <li>Export and store reports containing End User data</li>
                    <li>Configure data retention and access policies</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>4. Data Retention Policy</h2>
                  
                  <h3>4.1 Retention Periods</h3>
                  
                  <p><strong>Active Customer Data:</strong></p>
                  <ul>
                    <li>Retained for the duration of the Service agreement plus 30 days post-termination</li>
                  </ul>

                  <p><strong>Inactive Accounts:</strong></p>
                  <ul>
                    <li>Account and operational data retained for 2 years from last access</li>
                    <li>Longer retention if required by law</li>
                  </ul>

                  <p><strong>End User Data (Tickets, etc.):</strong></p>
                  <ul>
                    <li>Default retention: 2 years from creation date</li>
                    <li>Configurable by MSP Clients (minimum 30 days)</li>
                    <li>Permanently deleted upon request (where not legally required)</li>
                  </ul>

                  <p><strong>Backup Data:</strong></p>
                  <ul>
                    <li>Retained for 90 days for disaster recovery purposes</li>
                    <li>Not accessible except in recovery scenarios</li>
                  </ul>

                  <p><strong>Legal Hold:</strong></p>
                  <ul>
                    <li>Data retained longer if required by legal process or litigation</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>5. Sharing of Information</h2>
                  
                  <h3>5.1 We Do NOT Share Information With:</h3>
                  <ul>
                    <li>Third-party marketers or advertisers (without consent)</li>
                    <li>Data brokers</li>
                    <li>Unaffiliated business partners (except as specified below)</li>
                  </ul>

                  <h3>5.2 We Share Information With:</h3>
                  
                  <p><strong>Service Providers:</strong></p>
                  <ul>
                    <li>Cloud infrastructure providers (AWS)</li>
                    <li>Payment processors</li>
                    <li>Analytics providers</li>
                    <li>Customer support tools</li>
                  </ul>

                  <p><strong>Legal Requirements:</strong></p>
                  <ul>
                    <li>Law enforcement with valid warrants</li>
                    <li>Government agencies for legal compliance</li>
                    <li>To protect rights and safety of users</li>
                  </ul>

                  <p><strong>Business Transfers:</strong></p>
                  <ul>
                    <li>In event of merger, acquisition, or bankruptcy</li>
                    <li>Your data would transfer under this Privacy Policy</li>
                  </ul>

                  <p><strong>MSP Client Control:</strong></p>
                  <ul>
                    <li>End Users' data is shared with their MSP Client</li>
                    <li>MSP Clients control access to their data</li>
                    <li>Sub-processors may be added as per ServiceNow integration model</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>6. Data Security</h2>
                  
                  <h3>6.1 Security Measures</h3>
                  <ul>
                    <li><strong>Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</li>
                    <li><strong>Access Control:</strong> Role-based access control (RBAC), multi-factor authentication</li>
                    <li><strong>Infrastructure:</strong> AWS multi-region deployment with DDoS protection</li>
                    <li><strong>Monitoring:</strong> Real-time security event monitoring and alerting</li>
                    <li><strong>Penetration Testing:</strong> Regular third-party security assessments</li>
                    <li><strong>Incident Response:</strong> 24/7 security incident response team</li>
                  </ul>

                  <h3>6.2 Data Processing Standards</h3>
                  <p>We follow ServiceNow's data security standards:</p>
                  <ul>
                    <li>SOC 2 Type II compliance (Target 2025)</li>
                    <li>ISO 27001 certification (Target 2026)</li>
                    <li>NIST cybersecurity framework alignment</li>
                    <li>Data Residency: Multi-region AWS (data centers in US, EU, APAC)</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>7. Compliance & Legal Frameworks</h2>
                  
                  <h3>7.1 GDPR Compliance (EU Users)</h3>
                  
                  <p><strong>Legal Basis for Processing:</strong></p>
                  <ul>
                    <li>Contract performance (delivering the Service)</li>
                    <li>Legitimate business interests (analytics, security)</li>
                    <li>Consent (marketing communications)</li>
                  </ul>

                  <p><strong>User Rights:</strong></p>
                  <ul>
                    <li>Right to access personal data</li>
                    <li>Right to rectification (correction)</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Rights related to automated decision-making</li>
                  </ul>

                  <p><strong>Data Protection Officer:</strong> Contact <a href="mailto:privacy@automsp.com">privacy@automsp.com</a></p>

                  <h3>7.2 CCPA Compliance (California Users)</h3>
                  
                  <p><strong>Consumer Rights:</strong></p>
                  <ul>
                    <li>Right to know categories of personal information collected</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of sale/sharing of personal information</li>
                    <li>Right to non-discrimination for exercising rights</li>
                    <li>Right to correction of inaccurate personal information</li>
                  </ul>

                  <p><strong>Notice of Right to Opt-Out:</strong></p>
                  <p>We do not sell personal information to third parties. We may share information with service providers necessary for business operations.</p>

                  <h3>7.3 CCPA Business to Business (B2B) Exception</h3>
                  <p>
                    As a B2B SaaS platform, certain CCPA protections may not apply to business contact information of MSP representatives used solely for B2B communications.
                  </p>

                  <h3>7.4 Other Jurisdiction Compliance</h3>
                  <ul>
                    <li><strong>UK GDPR:</strong> Full compliance for UK user data</li>
                    <li><strong>Canada PIPEDA:</strong> Compliance with Personal Information Protection and Electronic Documents Act</li>
                    <li><strong>Australia Privacy Act:</strong> Compliance with Australian Privacy Principles</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>8. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to, processed in, and stored in countries other than your country of residence, including the United States. These countries may not have equivalent data protection laws as your home country.
                  </p>
                  <p><strong>Safeguards:</strong></p>
                  <ul>
                    <li>EU Standard Contractual Clauses for GDPR-compliant transfers</li>
                    <li>Data Processing Agreements with third-party processors</li>
                    <li>Regular compliance audits</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>9. Cookies & Tracking Technologies</h2>
                  
                  <h3>9.1 Cookies We Use</h3>
                  
                  <p><strong>Essential Cookies:</strong></p>
                  <ul>
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Cannot be disabled</li>
                  </ul>

                  <p><strong>Analytics Cookies:</strong></p>
                  <ul>
                    <li>Platform usage analytics</li>
                    <li>User behavior tracking (anonymized)</li>
                    <li>Can be disabled in account settings</li>
                  </ul>

                  <p><strong>Preference Cookies:</strong></p>
                  <ul>
                    <li>User interface preferences</li>
                    <li>Language and display settings</li>
                  </ul>

                  <h3>9.2 Your Cookie Choices</h3>
                  <p>Most browsers allow you to refuse cookies. However, disabling essential cookies may impair Service functionality.</p>
                </section>

                <section className="mb-12">
                  <h2>10. Artificial Intelligence & Automated Processing</h2>
                  
                  <h3>10.1 AI Processing Practices</h3>
                  
                  <p><strong>Models Used:</strong></p>
                  <ul>
                    <li>GPT-4 Turbo for complex reasoning</li>
                    <li>Claude 3.5 for context analysis</li>
                    <li>Custom fine-tuned models on anonymized MSP data</li>
                  </ul>

                  <p><strong>Processing Activities:</strong></p>
                  <ul>
                    <li>Ticket classification and categorization</li>
                    <li>Priority and severity assessment</li>
                    <li>Automated routing recommendations</li>
                    <li>Anomaly detection for potential issues</li>
                  </ul>

                  <h3>10.2 Human-in-the-Loop Safeguards</h3>
                  <ul>
                    <li>Recommendations require human approval before automation</li>
                    <li>Confidence threshold: Only actions with &gt;80% confidence are auto-executed</li>
                    <li>Audit trails for all AI-driven decisions</li>
                    <li>Regular model accuracy reviews</li>
                    <li>User feedback mechanisms to improve models</li>
                  </ul>

                  <h3>10.3 Automated Decision-Making Rights</h3>
                  <p>Under GDPR Article 22, you have the right to:</p>
                  <ul>
                    <li>Not be subject to solely automated decision-making</li>
                    <li>Request human review of automated decisions</li>
                    <li>Express your point of view regarding automated processing</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>11. End User Data & MSP Client Responsibilities</h2>
                  
                  <h3>11.1 MSP Client as Data Controller</h3>
                  <p>When MSP Clients integrate their ServiceNow instances with AutoMSP:</p>
                  <ul>
                    <li>MSP Client is the Data Controller for End User data</li>
                    <li>AutoMSP is the Data Processor</li>
                    <li>MSP Client is responsible for End User privacy notices</li>
                    <li>MSP Client must obtain necessary consents from End Users</li>
                  </ul>

                  <h3>11.2 Data Processing Agreement</h3>
                  <p>AutoMSP Data Processing Agreement (DPA) covers:</p>
                  <ul>
                    <li>Sub-processors and their roles</li>
                    <li>Data retention and deletion protocols</li>
                    <li>Security obligations and standards</li>
                    <li>Audit rights and compliance verification</li>
                    <li>International data transfer mechanisms</li>
                  </ul>
                  <p>The DPA is available at: <a href="https://automsp.com/legal/dpa">https://automsp.com/legal/dpa</a></p>
                </section>

                <section className="mb-12">
                  <h2>12. Third-Party Services & Sub-Processors</h2>
                  
                  <h3>12.1 ServiceNow Integration</h3>
                  <p>Data flows through ServiceNow's systems as per ServiceNow's:</p>
                  <ul>
                    <li>Privacy Statement: <a href="https://www.servicenow.com/privacy">https://www.servicenow.com/privacy</a></li>
                    <li>Data Processing Terms</li>
                    <li>Customer Success Platform (CSP) terms</li>
                  </ul>

                  <h3>12.2 Sub-Processors</h3>
                  
                  <p><strong>Current Sub-Processors:</strong></p>
                  <ul>
                    <li>Amazon Web Services (AWS) - Infrastructure</li>
                    <li>OpenAI/Anthropic - AI model providers</li>
                    <li>Datadog - Monitoring and analytics</li>
                    <li>Stripe - Payment processing</li>
                    <li>SendGrid - Email delivery</li>
                  </ul>

                  <p><strong>Adding New Sub-Processors:</strong></p>
                  <ul>
                    <li>30-day notice provided to customers</li>
                    <li>Right to object with 15-day window</li>
                    <li>Alternative solution offered if objection upheld</li>
                  </ul>

                  <p>List of sub-processors: <a href="https://automsp.com/legal/subprocessors">https://automsp.com/legal/subprocessors</a></p>
                </section>

                <section className="mb-12">
                  <h2>13. Children's Privacy</h2>
                  <p>
                    AutoMSP is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
                  </p>
                </section>

                <section className="mb-12">
                  <h2>14. Your Privacy Rights & Choices</h2>
                  
                  <h3>14.1 Access & Portability</h3>
                  <p>You can request:</p>
                  <ul>
                    <li>Confirmation of what personal data we hold</li>
                    <li>Copies of your personal data</li>
                    <li>Your data in a portable format (CSV, JSON)</li>
                  </ul>

                  <h3>14.2 Correction & Deletion</h3>
                  <p>You can request:</p>
                  <ul>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion of data (subject to legal holds)</li>
                    <li>Anonymization of data</li>
                  </ul>

                  <h3>14.3 Opt-Out Options</h3>
                  <ul>
                    <li><strong>Marketing Communications:</strong> Unsubscribe link in emails</li>
                    <li><strong>Analytics Tracking:</strong> Opt-out in account settings</li>
                    <li><strong>Cookies:</strong> Browser cookie management or account settings</li>
                  </ul>

                  <h3>14.4 Exercising Your Rights</h3>
                  <p>Email privacy requests to: <strong><a href="mailto:privacy@automsp.com">privacy@automsp.com</a></strong></p>
                  <p>Include:</p>
                  <ul>
                    <li>Your name and email</li>
                    <li>Specific rights you're exercising</li>
                    <li>Any supporting documentation</li>
                  </ul>
                  <p><strong>Response Timeline:</strong> 30 days (extendable to 90 days for complex requests)</p>
                </section>

                <section className="mb-12">
                  <h2>15. Retention & Deletion</h2>
                  
                  <h3>15.1 Requesting Data Deletion</h3>
                  <p>Upon account termination, we will:</p>
                  <ul>
                    <li>Delete active account data within 30 days</li>
                    <li>Delete End User data per configured retention settings</li>
                    <li>Retain backup data for 90 days (then destroyed)</li>
                    <li>Retain legally required data as specified</li>
                  </ul>

                  <h3>15.2 Data Destruction Certification</h3>
                  <p>Upon request, we provide certification of data destruction for audit purposes.</p>
                </section>

                <section className="mb-12">
                  <h2>16. Privacy Policy Updates</h2>
                  <p>We may update this Privacy Policy to reflect:</p>
                  <ul>
                    <li>Changes in our practices</li>
                    <li>Regulatory requirements</li>
                    <li>Technological advances</li>
                  </ul>
                  <p><strong>Material Changes:</strong></p>
                  <ul>
                    <li>We will notify users via email</li>
                    <li>Updated policy effective 30 days after notice</li>
                    <li>Your continued use implies acceptance</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>17. Contact Information</h2>
                  <p><strong>Privacy Inquiries:</strong><br />Email: <a href="mailto:privacy@automsp.com">privacy@automsp.com</a><br />Phone: +1 (888) AUTO-MSP (or applicable regional number)</p>
                  <p><strong>Data Protection Officer:</strong><br />Email: <a href="mailto:dpo@automsp.com">dpo@automsp.com</a></p>
                  <p>
                    <strong>Mailing Address:</strong><br />
                    AutoMSP Inc.<br />
                    C1 - 1003, Burhani Centenary Park<br />
                    Bhestan, Surat, Gujarat<br />
                    India 395023
                  </p>
                  <p><strong>GDPR Complaints:</strong><br />You have the right to lodge a complaint with your local supervisory authority (e.g., ICO in UK, CNIL in France).</p>
                </section>

                <section className="mb-12">
                  <h2>18. Definitions</h2>
                  <ul>
                    <li><strong>Personal Data:</strong> Information identifying or relating to an identified or identifiable individual</li>
                    <li><strong>Processing:</strong> Any operation on data (collection, use, storage, deletion)</li>
                    <li><strong>Data Controller:</strong> Entity determining processing purposes and means</li>
                    <li><strong>Data Processor:</strong> Entity processing data on controller's behalf</li>
                    <li><strong>End User:</strong> Customer of MSP Client whose data is processed</li>
                    <li><strong>MSP Client:</strong> Managed Service Provider using AutoMSP</li>
                  </ul>
                </section>

                <hr className="my-12 border-border" />

                <p className="text-center text-muted-foreground">
                  <strong>This Privacy Policy is effective as of December 27, 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately upon posting to this page.</strong>
                </p>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
