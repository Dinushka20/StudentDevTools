import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StudentDev Hub",
  description: "Privacy policy for StudentDev Hub.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">1. Introduction</h2>
        <p>Welcome to StudentDev Hub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
          <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8">3. Advertising and Cookies</h2>
        <p>We use Google AdSense to display advertisements. Google uses cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8">4. Consent Management</h2>
        <p>For users in the European Economic Area (EEA) and the UK, we use a certified Consent Management Platform (CMP) to collect and manage your consent for the use of cookies and personal data for personalized advertising.</p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">5. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us via our Contact page.</p>
      </div>
    </div>
  );
}
