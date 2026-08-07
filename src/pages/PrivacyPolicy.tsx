import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | The Roofing Friend</title>
        <meta
          name="description"
          content="How The Roofing Friend collects, uses, and protects your information across our website and mobile application."
        />
        <link rel="canonical" href="https://roofingfriend.com/privacy" />
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
              <strong>Last updated:</strong> June 28, 2026
            </p>

            <p>
              This Privacy Policy explains how The Roofing Friend (&ldquo;The Roofing Friend,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
              shares, and protects your information when you visit{" "}
              <a href="https://roofingfriend.com">roofingfriend.com</a>, contact us, request a quote or
              service, or use our mobile application (together, the &ldquo;Services&rdquo;).
              We provide metal roofing, roof repair, and related home-improvement services in the San Francisco Bay Area.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information you provide to us</h3>
            <ul>
              <li>Contact and identity details such as your name, email address, and phone number.</li>
              <li>Service details such as your property or service address and information about your project or property.</li>
              <li>Photos, images, and documents you choose to share or upload.</li>
              <li>Billing and payment information when you pay for a service.</li>
              <li>The content of messages, requests, and communications you send us.</li>
            </ul>
            <h3>Information from use of our mobile application</h3>
            <ul>
              <li>Account and login information used to access the application.</li>
              <li>Customer, job, scheduling, and project records you create or access in the app.</li>
              <li>Photos and notes you capture or upload while documenting work.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>Device and usage data such as device model, operating system, app version, unique identifiers, and log data.</li>
              <li>IP address and analytics about how you interact with the Services.</li>
              <li>On our website, cookies and similar technologies used to operate the site and understand usage.</li>
            </ul>
            <h3>Location information</h3>
            <p>
              With your permission, our mobile application may access your device&rsquo;s
              approximate or precise location to support dispatch, routing, job check-in,
              and site mapping. You can enable or disable location access at any time in
              your device settings.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide, schedule, and perform the services you request.</li>
              <li>Respond to inquiries, prepare quotes, and manage your account.</li>
              <li>Communicate with you by phone, SMS/text, and email about your service.</li>
              <li>Process payments and maintain billing and accounting records.</li>
              <li>Operate, maintain, secure, and improve the Services.</li>
              <li>Detect, prevent, and address fraud, abuse, and security issues.</li>
              <li>Comply with our legal obligations and enforce our agreements.</li>
            </ul>

            <h2>SMS / Text Messaging</h2>
            <p>
              If you provide your phone number, you consent to receive service-related and,
              where permitted, marketing text messages from us or our service providers.
              Message and data rates may apply and message frequency varies. Reply STOP to
              opt out or HELP for help. Opting out of marketing texts does not affect
              transactional messages necessary to deliver a service you requested.
            </p>

            <h2>How We Share Your Information</h2>
            <p>We do not sell your personal information. We share it only as described below:</p>
            <ul>
              <li><strong>Service providers.</strong> Vendors that host our systems, power our CRM, send communications (SMS and email), process payments, provide analytics, and support scheduling and mapping — under contracts that limit their use of your information.</li>
              <li><strong>Legal and safety.</strong> When required to comply with law, respond to legal process, enforce our agreements, or protect the rights, property, and safety of our customers, the public, or us.</li>
              <li><strong>Business transfers.</strong> In connection with a merger, acquisition, financing, or sale of assets, subject to this Policy.</li>
            </ul>

            <h2>Mobile Application Permissions</h2>
            <p>
              Our application may request the following device permissions. Each is optional
              and can be changed at any time in your device settings; denying a permission
              may limit related features.
            </p>
            <ul>
              <li><strong>Camera</strong> — to capture job and project photos.</li>
              <li><strong>Photos / Storage</strong> — to upload and save images and documents.</li>
              <li><strong>Location</strong> — for dispatch, routing, and job check-in.</li>
              <li><strong>Notifications</strong> — for job, schedule, and message alerts.</li>
              <li><strong>Microphone</strong> — only if you choose to record a voice note.</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain personal information for as long as needed to provide the Services,
              maintain business and accounting records, resolve disputes, and comply with our
              legal obligations, after which we delete or de-identify it.
            </p>

            <h2>Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards designed to
              protect your information. No method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Privacy Rights and Choices</h2>
            <p>
              You may request to access, correct, update, or delete your personal information,
              or opt out of marketing communications, by contacting us at{" "}
              <a href="mailto:roofingfriend@gmail.com">roofingfriend@gmail.com</a>. Depending on where you live (including
              California residents under the CCPA/CPRA), you may have additional rights, and we
              will not discriminate against you for exercising them.
            </p>
            <h3>Account and data deletion</h3>
            <p>
              To request deletion of your account and the personal data collected through our
              mobile application, email us at{" "}
              <a href="mailto:roofingfriend@gmail.com?subject=Data%20Deletion%20Request">roofingfriend@gmail.com</a> with the
              subject &ldquo;Data Deletion Request.&rdquo; After we verify your request, we will
              delete the personal data we are not required to retain by law.
            </p>

            <h2>Children&rsquo;s Privacy</h2>
            <p>
              The Services are not directed to children under 13 (or 16 where applicable), and we
              do not knowingly collect their personal information. If you believe a child has
              provided us information, contact us and we will delete it.
            </p>

            <h2>Third-Party Links and Services</h2>
            <p>
              Our Services may link to or integrate third-party sites and services that have their
              own privacy policies. We are not responsible for their content or practices.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will post the
              updated version on this page and revise the &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your information, contact us:
            </p>
            <p>
              <strong>The Roofing Friend</strong>
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

export default PrivacyPolicy;
