+++
noatcards = True
isdraft = False
+++


# Base 62
---

## Introduction of base 62
- Encodes to `[a-zA-Z0-9]` which works well for urls, eliminating the need for escaping special characters
- Only one hash result for the original input and and the operation is deterministic (no randomness involved) 
- Base 64 is another popular encoding but provides issues for urls because of the additional `+` and `/` characters