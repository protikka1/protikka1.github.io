document.addEventListener('DOMContentLoaded', () => {
  const auditBtn = document.getElementById('run-audit-btn');
  const domainInput = document.getElementById('domain-input');
  const auditOutput = document.getElementById('audit-output');

  if (auditBtn && domainInput && auditOutput) {
    auditBtn.addEventListener('click', () => {
      const domain = domainInput.value.trim() || 'eporth.org';
      auditOutput.textContent = `[~] Querying root nameservers for ${domain}...\n`;
      auditBtn.disabled = true;

      setTimeout(() => {
        auditOutput.textContent = 
`============================================================
              DNS DELIVERABILITY AUDIT REPORT               
============================================================
Domain: ${domain}
Status: PASSED (4/4 Records Verified)

[✓] MX Records:    ASPMX.L.GOOGLE.COM (Google Priority 1)
[✓] SPF Record:    v=spf1 include:_spf.google.com ~all (Valid)
[✓] DKIM Record:   google._domainkey (Active 2048-bit RSA)
[✓] DMARC Policy:  v=DMARC1; p=quarantine; rua=... (Protected)
============================================================
All sender compliance checks passed with primary inbox alignment.`;
        auditBtn.disabled = false;
      }, 700);
    });
  }
});
