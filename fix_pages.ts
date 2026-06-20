import fs from 'fs';

const eulaContentStr = `  <div class="hero">
    <h1>End User License Agreement (EULA)</h1>
    <p><strong>Effective date:</strong> June 20, 2026<br>
    <strong>Version:</strong> Aurora (1.0)<br>
    <strong>License:</strong> GNU General Public License v3.0 (GPLv3)<br>
    <strong>Source code:</strong> <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a></p>
  </div>
  
  <hr>

  <h2>1. Agreement to Terms</h2>
  <p>By downloading, installing, or using KydeOS in any form, you agree to be bound by this End User License Agreement. If you do not agree to these terms, do not install or use KydeOS.</p>

  <hr>

  <h2>2. About KydeOS</h2>
  <p>KydeOS is a personal, experimental, open-source operating system built on top of Debian Stable and distributed free of charge. It is designed and maintained by a single independent developer. KydeOS is not a commercial product. It is provided to the public in the spirit of open-source collaboration, with no warranties or guarantees of any kind.</p>

  <hr>

  <h2>3. License Grant</h2>
  <p>KydeOS is licensed under the GNU General Public License v3.0 (GPLv3). Under this license, you are granted the following rights:</p>
  <ul>
    <li><strong>Run:</strong> You may run KydeOS for any purpose, on any number of machines.</li>
    <li><strong>Study:</strong> You may examine the source code to understand how the system works.</li>
    <li><strong>Modify:</strong> You may modify KydeOS for personal use or for distribution.</li>
    <li><strong>Distribute:</strong> You may distribute verbatim or modified copies of KydeOS, provided you do so under the same GPLv3 license and make the source code available to recipients.</li>
  </ul>
  <p>These rights are perpetual, worldwide, royalty-free, and irrevocable as long as you comply with the terms of the GPLv3. The full text of the GPLv3 is included in the LICENSE file distributed with KydeOS and is available at <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">https://www.gnu.org/licenses/gpl-3.0.html</a>.</p>

  <hr>

  <h2>4. Restrictions</h2>
  <p>While the GPLv3 grants broad freedoms, the following restrictions apply:</p>
  <ul>
    <li>You may not distribute modified versions of KydeOS under a different or more restrictive license.</li>
    <li>You may not distribute KydeOS or any derivative work without making the corresponding source code available to recipients under the same GPLv3 terms.</li>
    <li>You may not use the KydeOS name, logo, or branding in a way that implies official endorsement of a product or service not affiliated with this project.</li>
    <li>You may not misrepresent the origin of KydeOS or claim that you authored the original work.</li>
  </ul>

  <hr>

  <h2>5. Disclaimer of Warranty</h2>
  <p>KydeOS IS PROVIDED STRICTLY "AS IS", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</p>
  <ul>
    <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
    <li>NON-INFRINGEMENT</li>
    <li>SYSTEM STABILITY OR RELIABILITY</li>
    <li>ACCURACY OR COMPLETENESS OF ANY INCLUDED SOFTWARE OR DOCUMENTATION</li>
  </ul>
  <p>YOU ASSUME ALL RISK ARISING FROM YOUR USE OR INABILITY TO USE KYDEOS. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SYSTEM RESTS WITH YOU.</p>

  <hr>

  <h2>6. Limitation of Liability</h2>
  <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER BE LIABLE FOR ANY DAMAGES WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE KYDEOS, INCLUDING BUT NOT LIMITED TO:</p>
  <ul>
    <li>Loss of data, files, or storage contents</li>
    <li>System damage or hardware failure</li>
    <li>Boot failures or unrecoverable system states</li>
    <li>Loss of productivity or business interruption</li>
    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
  </ul>
  <p>THIS LIMITATION APPLIES EVEN IF THE DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>

  <hr>

  <h2>7. Experimental Status &amp; Known Risks</h2>
  <p>KydeOS Aurora (1.0) is an early-stage, experimental build. By using this software, you explicitly acknowledge and accept the following known risks:</p>
  <ul>
    <li>The system may fail to boot on certain hardware configurations.</li>
    <li>Installation to physical hardware may result in data loss, including total loss of existing operating system data and personal files.</li>
    <li>System components may crash, hang, or behave unpredictably.</li>
    <li>Features described in documentation may be incomplete, non-functional, or subject to removal without notice.</li>
    <li>Updates between versions may introduce breaking changes to system configuration, installed applications, or user data.</li>
  </ul>
  <p>You are strongly advised to evaluate KydeOS exclusively within a virtualized environment such as QEMU or VirtualBox before any attempt at physical hardware installation.</p>

  <hr>

  <h2>8. Third-Party Software</h2>
  <p>KydeOS may include or interact with third-party software components, libraries, and applications, each governed by their own respective licenses. The inclusion of third-party software in KydeOS does not constitute an endorsement of those components by the KydeOS developer. You are responsible for reviewing and complying with the license terms of any third-party software you install or use in conjunction with KydeOS.</p>
  <p>Third-party applications installed via .deb, Flatpak, or AppImage are entirely independent of this agreement and are subject to their own EULAs and terms of service.</p>

  <hr>

  <h2>9. KydeStore &amp; Developer Program</h2>
  <p>KydeStore is the native software center included in KydeOS. Participation in the KydeStore alpha developer program is voluntary. By registering for the developer program, you agree to any additional terms presented during the registration process within KydeStore. The developer reserves the right to revoke program access at any time and for any reason.</p>
  <p>Software distributed through KydeStore may be subject to its own individual license terms separate from this agreement.</p>

  <hr>

  <h2>10. Privacy</h2>
  <p>Your use of KydeOS is also governed by the KydeOS Privacy Policy, which describes what data the system may collect and how it is handled. The Privacy Policy is incorporated into this agreement by reference. By using KydeOS, you also agree to the terms of the Privacy Policy.</p>

  <hr>

  <h2>11. Modifications to This Agreement</h2>
  <p>This EULA may be updated as KydeOS develops. All changes will be committed to the public GitHub repository at <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a> with a full auditable history. The effective date at the top of this document will be updated with each revision. Continued use of KydeOS following the publication of changes constitutes your acceptance of the revised terms.</p>

  <hr>

  <h2>12. Governing Law</h2>
  <p>This agreement is provided in good faith by an independent solo developer. As KydeOS is distributed internationally and free of charge, no specific jurisdiction is imposed. In the event of any dispute, the parties agree to attempt resolution in good faith before pursuing any formal legal remedy.</p>

  <hr>

  <h2>13. Entire Agreement</h2>
  <p>This EULA, together with the KydeOS Privacy Policy and the GNU General Public License v3.0, constitutes the entire agreement between you and the KydeOS developer with respect to your use of KydeOS. It supersedes all prior communications, representations, or agreements relating to the subject matter herein.</p>

  <hr>

  <h2>14. Contact</h2>
  <p>For questions regarding this agreement:</p>
  <ul>
    <li>GitHub: <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a></li>
  </ul>`;

const licContentStr = `  <div class="hero">
    <h1>Open Source Licenses</h1>
    <p><strong>Version:</strong> Aurora (1.0)<br>
    <strong>Source code:</strong> <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a></p>
  </div>
  
  <hr>

  <h2>1. KydeOS Primary License</h2>
  <p>KydeOS is licensed under the GNU General Public License v3.0 (GPLv3).</p>
  <p>Copyright (C) 2026 r1nzd</p>
  <p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>
  <p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.</p>
  <p>You should have received a copy of the GNU General Public License along with this program. If not, see <a href="https://www.gnu.org/licenses/" target="_blank">https://www.gnu.org/licenses/</a>.</p>

  <hr>

  <h2>2. What GPLv3 Means for You</h2>
  <p><strong>You are free to:</strong></p>
  <ul>
    <li>Run KydeOS for any purpose, on any machine, without restriction.</li>
    <li>Study the source code and learn how the system works.</li>
    <li>Modify KydeOS to suit your own needs.</li>
    <li>Distribute verbatim copies of KydeOS to anyone.</li>
    <li>Distribute your modified versions of KydeOS to anyone.</li>
  </ul>
  <p><strong>Under the following conditions:</strong></p>
  <ul>
    <li>Any modified version you distribute must also be licensed under GPLv3.</li>
    <li>You must make the corresponding source code available to anyone who receives your distribution.</li>
    <li>You must include a copy of the GPLv3 license with any distribution.</li>
    <li>You must clearly mark any modified files as changed, including a relevant date.</li>
    <li>You may not impose additional restrictions on the rights granted by this license.</li>
  </ul>

  <hr>

  <h2>3. Third-Party Components &amp; Dependencies</h2>
  <p>KydeOS is built on top of Debian Bookworm Stable and incorporates a number of third-party open-source components. Each component is governed by its own respective license. The inclusion of these components in KydeOS does not alter their original license terms.</p>
  
  <p><strong>Debian GNU/Linux</strong><br>
  License: Various (per-package). The Debian distribution as a whole is a collection of software packages each carrying their own license. See <a href="https://www.debian.org/legal/" target="_blank">https://www.debian.org/legal/</a> for details.</p>
  
  <p><strong>Linux Kernel</strong><br>
  License: GNU General Public License v2.0 with the Linux syscall note exception.<br>
  The Linux kernel is not relicensed under GPLv3 by its inclusion in KydeOS. User-space components of KydeOS interact with the kernel through the standard syscall interface, which does not create a derivative work relationship under the kernel's license terms.<br>
  See <a href="https://www.kernel.org/legal.html" target="_blank">https://www.kernel.org/legal.html</a> for details.</p>
  
  <p><strong>systemd</strong><br>
  License: GNU Lesser General Public License v2.1 (LGPLv2.1) for the core libraries; GNU General Public License v2.0 for certain utilities.<br>
  See <a href="https://github.com/systemd/systemd/blob/main/LICENSE.md" target="_blank">https://github.com/systemd/systemd/blob/main/LICENSE.md</a> for details.</p>

  <p><strong>Wayland &amp; XWayland</strong><br>
  License: MIT License.<br>
  Wayland is a display server protocol and its reference implementation is distributed under the MIT License.<br>
  See <a href="https://wayland.freedesktop.org/" target="_blank">https://wayland.freedesktop.org/</a> for details.</p>

  <p><strong>Material Symbols (Icons)</strong><br>
  License: Apache License 2.0.<br>
  Material Symbols are provided by Google and used under the Apache 2.0 License.<br>
  See <a href="https://github.com/google/material-design-icons/blob/master/LICENSE" target="_blank">https://github.com/google/material-design-icons/blob/master/LICENSE</a> for details.</p>

  <p><strong>Google Sans Flex &amp; Google Sans Text (Fonts)</strong><br>
  License: These fonts are provided by Google via Google Fonts. Usage is subject to the applicable font license terms as specified by Google.<br>
  See <a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a> for details.</p>

  <p><strong>Flatpak</strong><br>
  License: GNU Lesser General Public License v2.1 (LGPLv2.1).<br>
  See <a href="https://github.com/flatpak/flatpak/blob/main/COPYING" target="_blank">https://github.com/flatpak/flatpak/blob/main/COPYING</a> for details.</p>

  <p><strong>AppImage</strong><br>
  License: MIT License.<br>
  See <a href="https://github.com/AppImage/AppImageKit/blob/master/LICENSE" target="_blank">https://github.com/AppImage/AppImageKit/blob/master/LICENSE</a> for details.</p>

  <p><strong>QEMU (used in development and testing)</strong><br>
  License: GNU General Public License v2.0, with components under MIT and BSD licenses.<br>
  QEMU is used exclusively as a development and testing tool and is not distributed as part of KydeOS.<br>
  See <a href="https://www.qemu.org/license/" target="_blank">https://www.qemu.org/license/</a> for details.</p>

  <hr>

  <h2>4. KydeShell</h2>
  <p>KydeShell is the custom desktop shell developed specifically for KydeOS, written in Rust. KydeShell is an original work and is licensed under the GNU General Public License v3.0 as part of the KydeOS project.</p>
  <p>Copyright (C) 2026 r1nzd</p>

  <hr>

  <h2>5. Krowser</h2>
  <p>Krowser is the first-party browser developed by the KydeOS developer and bundled with KydeOS. Krowser is an original work and is licensed under the GNU General Public License v3.0 as part of the KydeOS project.</p>
  <p>Copyright (C) 2026 r1nzd</p>

  <hr>

  <h2>6. KydeStore</h2>
  <p>KydeStore is the native software center developed for KydeOS. KydeStore is an original work and is licensed under the GNU General Public License v3.0 as part of the KydeOS project.</p>
  <p>Copyright (C) 2026 r1nzd</p>
  <p>Software distributed through KydeStore is provided by independent developers and carries its own respective license terms. KydeOS takes no responsibility for the licensing compliance of third-party software distributed via KydeStore.</p>

  <hr>

  <h2>7. Rust Standard Library &amp; Toolchain</h2>
  <p>KydeShell is written in Rust. The Rust standard library is dual-licensed under the MIT License and the Apache License 2.0. The Rust compiler and toolchain are used exclusively during development and are not distributed as part of KydeOS.<br>
  See <a href="https://github.com/rust-lang/rust/blob/master/LICENSE-MIT" target="_blank">https://github.com/rust-lang/rust/blob/master/LICENSE-MIT</a> and <a href="https://github.com/rust-lang/rust/blob/master/LICENSE-APACHE" target="_blank">https://github.com/rust-lang/rust/blob/master/LICENSE-APACHE</a> for details.</p>

  <hr>

  <h2>8. No Endorsement</h2>
  <p>The inclusion of any third-party component, library, or tool in KydeOS does not imply endorsement by or affiliation with the authors or maintainers of those projects. All trademarks referenced herein are the property of their respective owners.</p>

  <hr>

  <h2>9. Reporting License Issues</h2>
  <p>If you believe any component of KydeOS is being used in violation of its applicable license, please report it via GitHub at <a href="https://github.com/r1nzd/KydeOS" target="_blank">https://github.com/r1nzd/KydeOS</a> so the issue can be investigated and resolved promptly.</p>

  <hr>

  <h2>10. Full License Text</h2>
  <p>The full text of the GNU General Public License v3.0 is included in the LICENSE file at the root of the KydeOS repository and is available online at <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">https://www.gnu.org/licenses/gpl-3.0.html</a>.</p>`;


function replacePayload(filename, newTitle, newContent, footerNotice) {
  let text = fs.readFileSync(filename, 'utf8');
  text = text.replace(/<title>.*?<\/title>/, \`<title>\${newTitle} &mdash; KydeOS</title>\`);
  
  // Custom Regex matching the main tag up to the first p with center alignment
  const updated = text.replace(/<div class="hero">[\s\S]*?(<hr>\s*<p style="text-align: center;)/, newContent + '\\n\\n  $1');
  
  let final = updated.replace(/<p style="text-align: center; font-size: 14px; margin-top: 40px; opacity: 0\.7;"><em>.*?<\/em><\/p>/, \`<p style="text-align: center; font-size: 14px; margin-top: 40px; opacity: 0.7;"><em>\${footerNotice}</em></p>\`);
  
  fs.writeFileSync(filename, final, 'utf8');
}

replacePayload('eula.html', 'End User License Agreement', eulaContentStr, 'KydeOS Aurora &middot; GPLv3 &middot; No warranty provided. Use at your own risk.');
replacePayload('licenses.html', 'Open Source Licenses', licContentStr, 'KydeOS Aurora &middot; GPLv3 &middot; Copyright (C) 2026 r1nzd');
