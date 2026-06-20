import fs from 'fs';

const cssAdd = `h3 {
  font-family:'Outfit','Google Sans Flex',sans-serif;
  font-size:20px;
  font-weight:500;
  color:var(--ons);
  margin-top:24px;
  margin-bottom:12px;
}`;

const content = `  <h2>1. Overview</h2>
  <p>KydeOS is a free, open-source operating system designed and maintained by a single independent developer. This Privacy Policy explains what data KydeOS may collect, how it is used, and what control you have over it.</p>
  <p>Privacy in KydeOS is opt-in by design. During the initial setup process (OOBE), you are presented with a Privacy & Diagnostics screen where you can individually enable or disable each data collection feature before the system is fully active. Every toggle defaults to off, with the exception of Crash Reports which defaults to on to help identify critical bugs during early development. You can change any of these settings at any time after setup via System Settings.</p>
  <p>KydeOS has no advertising business model, no investors requiring growth metrics, and no commercial interest in your data. This project exists as a personal, open-source endeavor.</p>

  <hr>
  
  <h2>2. Privacy & Diagnostics Settings</h2>
  <p>During setup, you are given direct control over the following three settings. None of these features transmit any data without your knowledge.</p>

  <h3>2.1 Location Services</h3>
  <p><strong>Default state:</strong> OFF</p>
  <p>When enabled, Location Services allows KydeOS and supported applications to access an estimated location derived from your network or hardware. This is used to assist apps that benefit from location context, such as weather, maps, and automatic time zone detection.</p>
  <p>When disabled, no location data of any kind is collected, accessed, or transmitted by the system. Individual applications you install may have their own location permission requests, which are handled separately and are not governed by this system-level toggle.</p>
  <p>You can change this setting at any time in System Settings.</p>

  <h3>2.2 Telemetry & Usage Data</h3>
  <p><strong>Default state:</strong> OFF</p>
  <p>When enabled, KydeOS may collect anonymous, aggregated data about how the system is used. This may include general information such as which system features are accessed, session durations, or performance metrics. The purpose of this data is strictly to understand how KydeOS is used in practice and to guide future development decisions.</p>
  <p>This data is:</p>
  <ul>
    <li>Anonymous — it is not linked to your identity, account, or any personally identifiable information</li>
    <li>Aggregated — individual sessions are not stored or analyzed in isolation</li>
    <li>Never sold or shared with any third party</li>
    <li>Never used for advertising purposes of any kind</li>
  </ul>
  <p>When disabled, no usage data or telemetry of any kind is collected or transmitted by the system.</p>
  <p>You can change this setting at any time in System Settings.</p>

  <h3>2.3 Crash Reports</h3>
  <p><strong>Default state:</strong> ON</p>
  <p>When enabled, KydeOS automatically collects and transmits error logs when the system or a core system component crashes. These reports contain technical diagnostic information such as stack traces, system state at the time of the crash, kernel version, and hardware architecture. Crash reports help the developer identify and fix critical bugs, especially during the early Aurora development phase.</p>
  <p>Crash reports do not contain:</p>
  <ul>
    <li>Your name, email address, or any account information</li>
    <li>The contents of your files, documents, or clipboard</li>
    <li>Your browsing history or application usage</li>
    <li>Any personally identifiable information</li>
  </ul>
  <p>When disabled, no crash or error data is ever transmitted from your device.</p>
  <p>You can change this setting at any time in System Settings.</p>

  <hr>

  <h2>3. Data We Never Collect</h2>
  <p>Regardless of your Privacy & Diagnostics settings, KydeOS never collects the following under any circumstances:</p>
  <ul>
    <li>Names, email addresses, or personally identifiable information during normal OS operation</li>
    <li>The contents of your files, documents, photos, or any stored data</li>
    <li>Keyboard input or clipboard contents</li>
    <li>Browsing history or Krowser activity</li>
    <li>Hardware serial numbers or unique device identifiers used for tracking</li>
    <li>Location data when Location Services is disabled</li>
    <li>Any data sold to or shared with advertisers, data brokers, or commercial third parties</li>
  </ul>

  <hr>

  <h2>4. Krowser</h2>
  <p>Krowser is the first-party browser bundled with KydeOS. When you browse the web, Krowser connects to the websites you visit — those websites operate under their own privacy policies. Krowser does not report your browsing history, visited URLs, or search queries back to the KydeOS developer in any form, regardless of your Privacy & Diagnostics settings.</p>

  <hr>

  <h2>5. KydeStore & Developer Program</h2>
  <p>KydeStore is the native software center in KydeOS. An alpha developer program is available, allowing early community members to register as testers directly inside KydeStore. If you register, the information you voluntarily submit is used solely for managing the program and is never shared with third parties.</p>

  <hr>

  <h2>6. Third-Party Applications</h2>
  <p>Applications installed via .deb, Flatpak, or AppImage are independent software with their own developers and privacy practices. KydeOS has no control over or responsibility for the data practices of third-party applications. Consult each application's privacy policy individually.</p>

  <hr>

  <h2>7. System Update Checks</h2>
  <p>When KydeOS checks for available updates, a standard network request is made to the update server. Your IP address is exposed to that server as an unavoidable consequence of internet networking. No additional data is transmitted alongside this request.</p>

  <hr>

  <h2>8. Open Source as a Privacy Guarantee</h2>
  <p>KydeOS is fully open source under the GPLv3. Every component of the system is publicly auditable at <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a>. You are never required to take our word for anything stated in this policy — you can verify it directly in the source code. If you discover any undisclosed data collection or network transmission in KydeOS, please report it immediately as a privacy issue on GitHub.</p>

  <hr>

  <h2>9. Security</h2>
  <p>KydeOS includes the following system-level security features:</p>
  <ul>
    <li>LUKS2 full-disk encryption to protect data stored on your device at rest</li>
    <li>AppArmor and SELinux sandboxing to isolate applications</li>
    <li>Minimal default service configuration to reduce attack surface</li>
    <li>Security patches from Debian Stable upstream, with critical fixes applied out-of-cycle when necessary</li>
  </ul>

  <hr>

  <h2>10. Your Rights</h2>
  <p>If you participated in the KydeStore developer program or any associated service, you have the right to request access to, correction of, or deletion of any personal data held about you. Contact the developer via GitHub at <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a>.</p>

  <hr>

  <h2>11. Children's Privacy</h2>
  <p>KydeOS does not knowingly collect personal data from children under the age of 13. If you believe a minor has submitted personal information through KydeStore or any associated service, contact the developer via GitHub so it can be promptly removed.</p>

  <hr>

  <h2>12. Changes to This Policy</h2>
  <p>All changes to this policy will be committed to the public GitHub repository with a full auditable history. The effective date at the top of this document will be updated with each revision. Continued use of KydeOS after changes are published constitutes acceptance of the updated policy.</p>

  <hr>

  <h2>13. Contact</h2>
  <p>For privacy-related questions, concerns, or data requests:</p>
  <ul>
    <li>GitHub: <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a></li>
  </ul>`;

let html = fs.readFileSync('privacy.html', 'utf8');

// Insert h3 styling
html = html.replace('h2 {', cssAdd + '\n\nh2 {');

// Replace body payload
html = html.replace(/<h2>1\. Overview<\/h2>[\s\S]+?(?=<hr>\n\s*<p style="text-align: center;)/, content + '\n\n  ');

// Also update the footer note
html = html.replace(/<p style="text-align: center; font-size: 14px; margin-top: 40px; opacity: 0\.7;"><em>.+?<\/em><\/p>/, '<p style="text-align: center; font-size: 14px; margin-top: 40px; opacity: 0.7;"><em>KydeOS Aurora &middot; GPLv3 &middot; No warranty provided. Use at your own risk.</em></p>');

fs.writeFileSync('privacy.html', html);
