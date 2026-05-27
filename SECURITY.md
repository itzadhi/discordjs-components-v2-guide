# Security Policy

## Reporting

Please open a private security advisory or contact the maintainer before publishing exploit details.

## Scope

- Token leakage
- Unsafe interaction authorization
- Persistent component replay issues
- Insecure example defaults
- Dependency vulnerabilities

## Example Safety Rules

- Never commit bot tokens.
- Use environment variables.
- Validate permissions on every destructive interaction.
- Treat custom IDs as routing hints, not trusted authorization.
