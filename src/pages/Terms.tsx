import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AutoMSP</title>
        <meta name="description" content="AutoMSP Terms of Service - Legal agreement governing the use of our AI-powered automation platform for Managed Service Providers." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
                  Terms of Service
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
                  <h2>1. ACCEPTANCE OF TERMS</h2>
                  <p>
                    These Terms of Service ("Terms") constitute a legal agreement between AutoMSP Inc. ("Company", "we", "us") and you ("Customer", "User"). By accessing and using the AutoMSP platform and services, you agree to be bound by these Terms. If you do not agree, do not use our Service.
                  </p>
                </section>

                <section className="mb-12">
                  <h2>2. SERVICE DESCRIPTION</h2>
                  <p>
                    AutoMSP provides a cloud-based SaaS platform that leverages artificial intelligence to automate ticket classification, routing, and analysis for Managed Service Providers (MSPs) using ServiceNow. Our Service includes:
                  </p>
                  <ul>
                    <li>ServiceNow integration and data synchronization</li>
                    <li>AI-powered ticket analysis and recommendations</li>
                    <li>Automated routing and prioritization</li>
                    <li>Analytics and reporting dashboard</li>
                    <li>Customer support and technical assistance</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>3. USER ACCOUNTS & RESPONSIBILITIES</h2>
                  
                  <h3>3.1 Account Registration</h3>
                  <p>
                    To use AutoMSP, you must create an account and provide accurate, complete, and current information. You are responsible for:
                  </p>
                  <ul>
                    <li>Maintaining the confidentiality of login credentials</li>
                    <li>All activity occurring under your account</li>
                    <li>Notifying us immediately of unauthorized access</li>
                    <li>Complying with all applicable laws and regulations</li>
                  </ul>

                  <h3>3.2 Account Types</h3>
                  <p><strong>MSP Clients:</strong> MSPs integrating ServiceNow with AutoMSP</p>
                  <p><strong>End Users:</strong> Customers of MSP Clients whose data is processed</p>
                  <p><strong>Administrators:</strong> Users managing account settings and integrations</p>
                </section>

                <section className="mb-12">
                  <h2>4. SERVICENOW INTEGRATION & DATA HANDLING</h2>
                  
                  <h3>4.1 Integration Requirements</h3>
                  <p>Customers must:</p>
                  <ul>
                    <li>Maintain valid ServiceNow licenses</li>
                    <li>Provide API credentials securely</li>
                    <li>Ensure ServiceNow data quality and compliance</li>
                    <li>Configure appropriate access controls</li>
                  </ul>

                  <h3>4.2 Data Processing</h3>
                  <ul>
                    <li>AutoMSP processes ServiceNow data per the Data Processing Agreement (DPA)</li>
                    <li>MSP Clients remain Data Controllers for End User data</li>
                    <li>AutoMSP acts as Data Processor</li>
                    <li>Data is processed only for agreed purposes</li>
                    <li>Data retention follows configured policies (default 2 years)</li>
                  </ul>

                  <h3>4.3 ServiceNow Terms Compliance</h3>
                  <p>Customer acknowledges and agrees to comply with:</p>
                  <ul>
                    <li>ServiceNow Subscription and Professional Services Terms</li>
                    <li>ServiceNow Data Processing Terms</li>
                    <li>ServiceNow API Usage Terms</li>
                    <li>All applicable ServiceNow policies</li>
                  </ul>
                  <p>
                    AutoMSP does not bypass, circumvent, or violate ServiceNow's terms. Any integration must comply with ServiceNow's stated policies and restrictions.
                  </p>
                </section>

                <section className="mb-12">
                  <h2>5. ARTIFICIAL INTELLIGENCE & AUTOMATION</h2>
                  
                  <h3>5.1 AI Processing</h3>
                  <p>AutoMSP uses the following AI models:</p>
                  <ul>
                    <li><strong>GPT-4 Turbo</strong> - Complex reasoning and analysis</li>
                    <li><strong>Claude 3.5</strong> - Context understanding and classification</li>
                    <li><strong>Custom Models</strong> - Fine-tuned on anonymized MSP data</li>
                  </ul>

                  <h3>5.2 Automated Actions</h3>
                  <p>AutoMSP provides:</p>
                  <ul>
                    <li>Intelligent recommendations (requires human approval)</li>
                    <li>Automated routing (configurable confidence thresholds)</li>
                    <li>Priority/severity suggestions</li>
                    <li>Anomaly detection alerts</li>
                  </ul>
                  <p>
                    All automated actions respect the 80% confidence threshold and require human validation before critical actions.
                  </p>

                  <h3>5.3 Human-in-the-Loop Safeguards</h3>
                  <ul>
                    <li>Recommendations are advisory only</li>
                    <li>Automated actions require human approval</li>
                    <li>Complete audit trails maintained</li>
                    <li>User feedback improves model accuracy</li>
                    <li>Users can override automated decisions</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>6. LICENSE GRANT & RESTRICTIONS</h2>
                  
                  <h3>6.1 License</h3>
                  <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
                  <ul>
                    <li>Access and use AutoMSP for authorized business purposes</li>
                    <li>Use features included in your subscription tier</li>
                    <li>View and analyze reports generated by our Service</li>
                  </ul>

                  <h3>6.2 Restrictions</h3>
                  <p>You may NOT:</p>
                  <ul>
                    <li>Reverse engineer, decompile, or disassemble the Service</li>
                    <li>Create derivative works or modifications</li>
                    <li>Use the Service to develop competing products</li>
                    <li>Access or use the Service beyond authorized scope</li>
                    <li>Remove, obscure, or alter proprietary notices</li>
                    <li>Sell, transfer, or sublicense access to third parties</li>
                    <li>Attempt to bypass security measures</li>
                    <li>Use the Service for illegal, harmful, or abusive purposes</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>7. INTELLECTUAL PROPERTY RIGHTS</h2>
                  
                  <h3>7.1 AutoMSP IP</h3>
                  <p>
                    All content, features, functionality, and intellectual property of AutoMSP are owned by Company and protected by copyright and trademark laws. These include:
                  </p>
                  <ul>
                    <li>Software code and algorithms</li>
                    <li>AI models and training data</li>
                    <li>Documentation and branding</li>
                    <li>Reports and analytics tools</li>
                  </ul>

                  <h3>7.2 Customer Data</h3>
                  <p>Customer retains ownership of data submitted to AutoMSP. By submitting data, Customer grants Company:</p>
                  <ul>
                    <li>License to process and analyze the data</li>
                    <li>License to use anonymized/aggregated data for service improvement</li>
                    <li>License to train AI models on anonymized data (with customer consent)</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>8. PAYMENT TERMS</h2>
                  
                  <h3>8.1 Subscription Plans</h3>
                  <p><strong>Starter:</strong> ₹41,916/month ($499 USD)/month (up to 100 managed clients)</p>
                  <p><strong>Professional:</strong> ₹83,916/month ($999 USD)/month (up to 300 managed clients)</p>
                  <p><strong>Enterprise:</strong> Custom pricing (300+ managed clients)</p>
                  <p>All plans include:</p>
                  <ul>
                    <li>ServiceNow integration</li>
                    <li>AI-powered automation</li>
                    <li>Standard support</li>
                    <li>Analytics dashboard</li>
                  </ul>

                  <h3>8.2 Billing & Payment</h3>
                  <ul>
                    <li>Billing occurs on a monthly or annual basis (per agreement)</li>
                    <li>Payment must be provided by valid credit card or invoice</li>
                    <li>Failure to pay may result in service suspension</li>
                    <li>No refunds for partial months or unused service</li>
                    <li>Overage charges apply if you exceed plan limits</li>
                  </ul>

                  <h3>8.3 Price Changes</h3>
                  <ul>
                    <li>Company may modify pricing with 30 days' written notice</li>
                    <li>Changes apply to renewals, not active subscriptions</li>
                    <li>Continued use after price change constitutes acceptance</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>9. TERM & TERMINATION</h2>
                  
                  <h3>9.1 Subscription Term</h3>
                  <ul>
                    <li><strong>Initial Term:</strong> Monthly or Annual (as selected)</li>
                    <li><strong>Renewal:</strong> Automatic unless canceled before renewal date</li>
                    <li><strong>Cancellation:</strong> Either party may cancel with 30 days' written notice</li>
                  </ul>

                  <h3>9.2 Termination for Cause</h3>
                  <p>Company may immediately terminate if Customer:</p>
                  <ul>
                    <li>Violates these Terms</li>
                    <li>Uses the Service illegally or unethically</li>
                    <li>Fails to pay fees (after 15-day cure period)</li>
                    <li>Threatens security or data integrity</li>
                    <li>Breaches the Data Processing Agreement</li>
                  </ul>

                  <h3>9.3 Effects of Termination</h3>
                  <p>Upon termination:</p>
                  <ul>
                    <li>Access to Service immediately ceases</li>
                    <li>Your data is retained per retention policy (default 2 years)</li>
                    <li>All licenses and rights terminate</li>
                    <li>Outstanding fees remain due</li>
                    <li>Confidentiality obligations survive</li>
                  </ul>

                  <h3>9.4 Data Deletion Request</h3>
                  <p>
                    Upon request within 30 days of termination, Customer may request expedited data deletion (subject to legal hold requirements).
                  </p>
                </section>

                <section className="mb-12">
                  <h2>10. WARRANTY DISCLAIMER</h2>
                  
                  <h3>10.1 AS-IS Service</h3>
                  <p>
                    AutoMSP is provided "AS-IS" and "AS AVAILABLE" without warranties. Company disclaims all warranties, express or implied, including:
                  </p>
                  <ul>
                    <li>Merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>Accuracy or completeness of results</li>
                    <li>Uninterrupted service availability</li>
                  </ul>

                  <h3>10.2 No Guarantee of Results</h3>
                  <p>AutoMSP provides tools and recommendations. Company does not guarantee:</p>
                  <ul>
                    <li>Specific business outcomes or ROI</li>
                    <li>Accuracy of AI classifications (human review required)</li>
                    <li>Complete automation of any process</li>
                    <li>Resolution of all tickets</li>
                    <li>Specific performance metrics</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>11. LIMITATION OF LIABILITY</h2>
                  
                  <h3>11.1 Damages Cap</h3>
                  <p>IN NO EVENT SHALL COMPANY BE LIABLE FOR:</p>
                  <ul>
                    <li>Indirect, incidental, special, or consequential damages</li>
                    <li>Loss of revenue, data, or profits</li>
                    <li>Business interruption or reputational harm</li>
                    <li>Damages exceeding the fees paid in the preceding 12 months</li>
                  </ul>

                  <h3>11.2 Exceptions</h3>
                  <p>This limitation does not apply to:</p>
                  <ul>
                    <li>Gross negligence or willful misconduct</li>
                    <li>Breach of confidentiality obligations</li>
                    <li>Indemnification obligations</li>
                    <li>Intellectual property infringement claims</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>12. INDEMNIFICATION</h2>
                  <p>Customer agrees to indemnify and hold harmless Company from:</p>
                  <ul>
                    <li>Claims arising from Customer's use of the Service</li>
                    <li>Customer's violation of these Terms</li>
                    <li>Customer's infringement of third-party intellectual property</li>
                    <li>Customer's violation of applicable laws</li>
                    <li>Disputes between Customer and End Users</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>13. CONFIDENTIALITY</h2>
                  
                  <h3>13.1 Confidential Information</h3>
                  <p>Each party agrees to:</p>
                  <ul>
                    <li>Keep the other party's confidential information confidential</li>
                    <li>Use confidential information only for purposes under these Terms</li>
                    <li>Protect confidential information with reasonable security measures</li>
                    <li>Not disclose confidential information to third parties without consent</li>
                  </ul>

                  <h3>13.2 Exceptions</h3>
                  <p>Confidentiality obligations do not apply to information that is:</p>
                  <ul>
                    <li>Publicly available</li>
                    <li>Independently developed</li>
                    <li>Received from third parties without confidentiality obligations</li>
                    <li>Required to be disclosed by law (with notice when possible)</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>14. DATA SECURITY & COMPLIANCE</h2>
                  
                  <h3>14.1 Security Standards</h3>
                  <p>Company implements industry-standard security measures:</p>
                  <ul>
                    <li>AES-256 encryption at rest, TLS 1.3 in transit</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Intrusion detection and prevention systems</li>
                    <li>Regular penetration testing</li>
                    <li>SOC 2 Type II compliance (Target 2025)</li>
                    <li>ISO 27001 certification (Target 2026)</li>
                  </ul>

                  <h3>14.2 Incident Response</h3>
                  <ul>
                    <li>24/7 security monitoring</li>
                    <li>Incident response team</li>
                    <li>Customer notification of breaches (per GDPR/CCPA)</li>
                    <li>Post-incident audit and remediation</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>15. COMPLIANCE OBLIGATIONS</h2>
                  
                  <h3>15.1 GDPR (EU Regulation 2016/679)</h3>
                  <p>For EU customers:</p>
                  <ul>
                    <li>Data Processing Agreement (DPA) governs processing</li>
                    <li>Standard Contractual Clauses enable lawful transfers</li>
                    <li>Data subject rights are honored (access, deletion, portability)</li>
                    <li>Data Protection Officer available (<a href="mailto:dpo@automsp.us">dpo@automsp.us</a>)</li>
                  </ul>

                  <h3>15.2 CCPA (California Consumer Privacy Act)</h3>
                  <p>For California customers:</p>
                  <ul>
                    <li>Customer rights are honored (access, deletion, opt-out)</li>
                    <li>No sale of personal information to third parties</li>
                    <li>Service Providers agreement in place with sub-processors</li>
                  </ul>

                  <h3>15.3 Regulatory Compliance</h3>
                  <p>Customer is responsible for:</p>
                  <ul>
                    <li>Compliance with data protection laws in their jurisdiction</li>
                    <li>Proper data classification and handling</li>
                    <li>End User notifications and consent</li>
                    <li>Audit and documentation of processing</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>16. SUB-PROCESSORS & THIRD PARTIES</h2>
                  
                  <h3>16.1 Current Sub-Processors</h3>
                  <ul>
                    <li>Amazon Web Services (AWS) - Cloud infrastructure</li>
                    <li>OpenAI/Anthropic - AI model providers</li>
                    <li>Stripe - Payment processing</li>
                    <li>Datadog - Monitoring and analytics</li>
                    <li>SendGrid - Email delivery</li>
                  </ul>

                  <h3>16.2 Adding Sub-Processors</h3>
                  <ul>
                    <li>30-day notice provided before adding new sub-processors</li>
                    <li>Customers have 15 days to object</li>
                    <li>Alternative solution offered if objection upheld</li>
                    <li>Sub-processor list available at: <a href="https://automsp.us/legal/subprocessors">https://automsp.us/legal/subprocessors</a></li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>17. SERVICE LEVEL AGREEMENT (SLA)</h2>
                  
                  <h3>17.1 Availability Commitment</h3>
                  <ul>
                    <li>99.9% uptime guarantee (excluding scheduled maintenance)</li>
                    <li>Scheduled maintenance: Monthly, during low-use windows</li>
                    <li>Maintenance notice: 14 days advance notification</li>
                  </ul>

                  <h3>17.2 Support Commitment</h3>
                  <p><strong>Business Hours Support:</strong></p>
                  <ul>
                    <li>Response time: 4 hours</li>
                    <li>Available: 9 AM - 5 PM Pacific Time, Monday-Friday</li>
                  </ul>
                  <p><strong>Premium Support (Enterprise):</strong></p>
                  <ul>
                    <li>24/7 support</li>
                    <li>Response time: 1 hour</li>
                  </ul>

                  <h3>17.3 Service Credits</h3>
                  <p>For uptime below 99.9%:</p>
                  <ul>
                    <li>99.0-99.9%: 10% monthly credit</li>
                    <li>98.0-99.0%: 25% monthly credit</li>
                    <li>Below 98.0%: 50% monthly credit</li>
                  </ul>
                  <p>Credits are the sole remedy for service availability issues.</p>
                </section>

                <section className="mb-12">
                  <h2>18. GOVERNING LAW & DISPUTE RESOLUTION</h2>
                  
                  <h3>18.1 Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles.
                  </p>

                  <h3>18.2 Dispute Resolution</h3>
                  <ol>
                    <li><strong>Negotiation:</strong> Parties attempt to resolve disputes through good-faith negotiation (30 days)</li>
                    <li><strong>Mediation:</strong> If unresolved, parties engage neutral mediator (60 days)</li>
                    <li><strong>Arbitration:</strong> If mediation fails, binding arbitration in Delaware</li>
                    <li><strong>Small Claims:</strong> Either party may pursue claims in small claims court</li>
                  </ol>

                  <h3>18.3 Injunctive Relief</h3>
                  <p>
                    Either party may seek injunctive relief for breaches of IP rights or confidentiality without waiving other remedies.
                  </p>
                </section>

                <section className="mb-12">
                  <h2>19. GENERAL PROVISIONS</h2>
                  
                  <h3>19.1 Entire Agreement</h3>
                  <p>
                    These Terms, together with the Data Processing Agreement and Privacy Policy, constitute the entire agreement and supersede all prior agreements.
                  </p>

                  <h3>19.2 Modifications</h3>
                  <ul>
                    <li>Company may modify these Terms with 30 days' written notice</li>
                    <li>Material changes notify via email</li>
                    <li>Continued use implies acceptance of modified Terms</li>
                  </ul>

                  <h3>19.3 Severability</h3>
                  <p>If any provision is unenforceable, the remaining provisions continue in effect.</p>

                  <h3>19.4 Waiver</h3>
                  <p>Failure to enforce any right does not constitute waiver of that right.</p>

                  <h3>19.5 Assignment</h3>
                  <ul>
                    <li>Customer may not assign these Terms without Company's written consent</li>
                    <li>Company may assign to affiliates or successors</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>20. PROHIBITED USES</h2>
                  <p>You may not use AutoMSP for:</p>
                  <ul>
                    <li>Illegal activities or compliance violations</li>
                    <li>Hacking, phishing, or security attacks</li>
                    <li>Harassment, abuse, or hate speech</li>
                    <li>Spam or unsolicited communications</li>
                    <li>Copyright or intellectual property infringement</li>
                    <li>Malware distribution or system compromise</li>
                    <li>Unauthorized access to other systems</li>
                    <li>Violating third-party rights</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2>21. CONTACT INFORMATION</h2>
                  <p><strong>Legal Inquiries:</strong><br />Email: <a href="mailto:legal@automsp.store">legal@automsp.store</a></p>
                  <p><strong>Support:</strong><br />Email: <a href="mailto:support@automsp.store">support@automsp.store</a><br />Phone: +1 (510) 560 7084</p>
                  <p><strong>Data Protection Officer:</strong><br />Email: <a href="mailto:dpo@automsp.store">dpo@automsp.store</a></p>
                  <p>
                    <strong>Mailing Address:</strong><br />
                    AutoMSP AI Automation Services.<br />
                    C1 - 1003, Burhani Centenary Park<br />
                    Bhestan, Surat, Gujarat<br />
                    India 395023
                  </p>
                </section>

                <hr className="my-12 border-border" />

                <p className="text-center text-muted-foreground">
                  <strong>These Terms of Service are effective as of December 27, 2025. Your use of AutoMSP constitutes acceptance of these terms.</strong>
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

export default Terms;
