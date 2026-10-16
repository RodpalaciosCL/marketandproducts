# Market and Products — deploy (Cloudflare Pages)

URL: **https://marketandproducts.com/**

## Deploy automático (recomendado)

1. Sube los cambios a GitHub (`main` de este repo).
2. En [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Repo: `RodpalaciosCL/marketandproducts`
4. Build settings:
   - Framework preset: **None**
   - Build command: *(vacío)*
   - Build output directory: `/`
5. **Save and Deploy**

Cada push a `main` publica solo.

## Dominio

En el proyecto Pages → **Custom domains** → agrega `marketandproducts.com` (y `www` si quieres).

Si el DNS del dominio ya está en Cloudflare, el registro se crea solo. Si no, apunta el dominio a Cloudflare (nameservers) o crea el CNAME que indique el dashboard.

## Formulario de contacto

El formulario valida campos y muestra el mensaje de éxito en UI. Por ahora **no envía correos**.

## Archivos publicados

- `index.html`, `styles.css`, `script.js`, `logo.png`, `logo.svg`

Ya no se usa FTP ni PHP.
