
export default function TermsOfServicePage() {
  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto py-8 space-y-6">
      <h1>Terms of Service</h1>
      <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using the SpontAlign website located at [Your Website URL] (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        The Site and its original content, features, and functionality are owned by SpontAlign and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes, but is not limited to, text, graphics, logos, images, research papers, and software. You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as generally permitted through the Site's functionality or with our prior written consent.
      </p>

      <h2>3. Use of the Site</h2>
      <p>
        You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
      </p>
      <ul>
        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
        <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm SpontAlign or users of the Site or expose them to liability.</li>
        <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.</li>
         <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
      </ul>

       <h2>4. Disclaimer of Warranties</h2>
        <p>
            The Site is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied. SpontAlign does not warrant that the Site will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or usefulness of any information on the Site. Any reliance you place on such information is strictly at your own risk.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
            In no event will SpontAlign, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, any websites linked to it, any content on the Site or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
        </p>

      <h2>6. Governing Law</h2>
      <p>
        All matters relating to the Site and these Terms and any dispute or claim arising therefrom or related thereto shall be governed by and construed in accordance with the internal laws of the State of [Your State, e.g., California] without giving effect to any choice or conflict of law provision or rule.
      </p>

       <h2>7. Changes to Terms of Service</h2>
        <p>
            We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
        </p>

      <h2>8. Contact Information</h2>
      <p>
        To ask questions or comment about these Terms of Service, contact us at:
      </p>
      <p>
        SpontAlign<br />
        [Your Company Address]<br />
        [Your Contact Email, e.g., legal@spontalign.com]
      </p>
    </div>
  );
}
