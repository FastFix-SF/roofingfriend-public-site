import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const canonicalUrl = "https://roofingfriend.com/privacy-policy";
const description =
  "Privacy Policy for The Roofing Friend, Inc. — what information we collect, how we use it, and our SMS messaging terms.";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy &amp; SMS Terms | The Roofing Friend, Inc.</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Privacy Policy &amp; SMS Terms | The Roofing Friend, Inc." />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy &amp; SMS Terms | The Roofing Friend, Inc." />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <Navbar />

      <main className="pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-slate max-w-none
              prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground prose-li:my-1
              prose-strong:text-foreground
              prose-a:text-primary prose-a:font-medium"
          >
            <h1>Privacy Policy</h1>
            <p className="text-sm">
              <strong>Last updated:</strong> September 15, 2026
            </p>

            <p>
              This Privacy Policy explains how <strong>The Roofing Friend, Inc.</strong>{" "}
              (&ldquo;The Roofing Friend,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) collects, uses, shares, and protects your information when
              you visit our website, contact us, request a quote or service, or receive text
              messages from us. We provide metal roofing, roof repair, and related
              home-improvement services in the San Francisco Bay Area.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact and identity details such as your name, phone number, and email address.</li>
              <li>Your property or service address and details about your project.</li>
              <li>Photos, images, and documents you choose to share with us.</li>
              <li>Billing and payment information when you pay for a service.</li>
              <li>The content of messages, requests, and communications you send us.</li>
              <li>
                Basic device and usage data collected automatically on our website, such as IP
                address, browser type, and pages viewed, through cookies and similar technologies.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Schedule and perform the roofing services you request.</li>
              <li>Prepare quotes and estimates and respond to your questions.</li>
              <li>Communicate with you by phone, text message, and email about your service.</li>
              <li>Process payments and maintain billing and accounting records.</li>
              <li>Operate, maintain, secure, and improve our website and services.</li>
              <li>Detect and prevent fraud, abuse, and security issues.</li>
              <li>Comply with our legal obligations and enforce our agreements.</li>
            </ul>

            <h2>SMS / Text Messaging</h2>
            <p>
              If you provide your phone number and opt in, you may receive text messages from
              The Roofing Friend, Inc. about your quote, appointment, or service.
            </p>
            <p>
              <strong>
                We do not sell or share your SMS opt-in data or personal information with third
                parties for marketing purposes.
              </strong>
            </p>
            <ul>
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply <strong>STOP</strong> at any time to stop receiving messages.</li>
              <li>Reply <strong>HELP</strong> for help.</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We do not sell your personal information. We share it only as described below:</p>
            <ul>
              <li>
                <strong>Service providers.</strong> Vendors that host our systems, power our
                scheduling and customer records, send communications, and process payments —
                under contracts that limit their use of your information. SMS opt-in data is
                never shared with third parties for their own marketing.
              </li>
              <li>
                <strong>Legal and safety.</strong> When required to comply with law, respond to
                legal process, enforce our agreements, or protect the rights, property, and
                safety of our customers, the public, or us.
              </li>
              <li>
                <strong>Business transfers.</strong> In connection with a merger, acquisition,
                financing, or sale of assets, subject to this Policy.
              </li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We keep personal information for as long as needed to provide our services,
              maintain business and accounting records, resolve disputes, and comply with legal
              obligations, after which we delete or de-identify it.
            </p>

            <h2>Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards designed to
              protect your information. No method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Choices and Rights</h2>
            <p>
              You may request to access, correct, update, or delete your personal information,
              or opt out of marketing communications, by emailing us at{" "}
              <a href="mailto:roofingfriend@gmail.com">roofingfriend@gmail.com</a>. California
              residents may have additional rights under the CCPA/CPRA, and we will not
              discriminate against you for exercising them.
            </p>

            <h2>Children&rsquo;s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly
              collect their personal information. If you believe a child has provided us
              information, contact us and we will delete it.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will post the
              updated version on this page and revise the &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>Contact Us</h2>
            <p>
              <strong>The Roofing Friend, Inc.</strong>
              <br />
              San Francisco Bay Area, California
              <br />
              Email: <a href="mailto:roofingfriend@gmail.com">roofingfriend@gmail.com</a>
              <br />
              Phone: <a href="tel:+15109162408">(510) 916-2408</a>
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
