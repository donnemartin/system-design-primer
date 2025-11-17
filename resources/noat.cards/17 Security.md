+++
noatcards = True
isdraft = False
weight = 170
+++
Security
--------
---
This section could use some updates. Consider [contributing](https://github.com/donnemartin/system-design-primer#contributing) !

Security is a broad topic. Unless you have considerable experience, a security background, or are applying for a position that requires knowledge of security, you probably won't need to know more than the basics:

- Encrypt in transit and at rest.
- Sanitize all user inputs or any input parameters exposed to user to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting)  and [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) .
- Use parameterized queries to prevent SQL injection.
- Use the principle of [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) .

## Source(s) and further reading

- [Security guide for developers](https://github.com/FallibleInc/security-guide-for-developers) 
- [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet) 