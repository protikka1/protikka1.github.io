document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching Logic
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });

  // Simulator Logic
  const auditBtn = document.getElementById('run-audit-btn');
  const domainInput = document.getElementById('domain-input');
  const auditOutput = document.getElementById('audit-output');

  if (auditBtn && domainInput && auditOutput) {
    auditBtn.addEventListener('click', () => {
      const domain = domainInput.value.trim() || 'eporth.org';
      auditOutput.textContent = `[~] Querying root nameservers for ${domain}...\n[~] Checking MX routing...\n[~] Parsing SPF & DKIM keys...`;
      auditBtn.disabled = true;

      setTimeout(() => {
        auditOutput.textContent = 
`========================================
       DNS DELIVERABILITY REPORT        
========================================
Domain: ${domain}
Status: PASSED (4/4 Records Verified)

[✓] MX:    ASPMX.L.GOOGLE.COM (Priority 1)
[✓] SPF:   v=spf1 include:_spf.google.com ~all
[✓] DKIM:  google._domainkey (2048-bit RSA)
[✓] DMARC: v=DMARC1; p=quarantine; (Aligned)
========================================
Primary inbox deliverability verified.`;
        auditBtn.disabled = false;
      }, 500);
    });
  }
});
