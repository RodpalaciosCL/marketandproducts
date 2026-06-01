# Market and Products — landing

Sitio estático de [marketandproducts.com](https://marketandproducts.com/).

## Local

```bash
php -S localhost:5500
```

Abre http://localhost:5500/ (el formulario de contacto requiere PHP; con `python3 -m http.server` no envía correo).

## Deploy

```bash
./deploy-ftp.sh
```

Sube a `public_html/` del dominio (FTP `admin_archlytic` en `vps.marketandproducts.com`).

## Archivos del sitio

- `index.html`
- `styles.css`
- `script.js`
- `logo.png`
- `contact.php` (envío del formulario a rodrigo@airontechs.com)

Referencia de diseño (no se despliega): `DESIGN.html`.

## Archlytic

Motor y landing en repo aparte: https://github.com/RodpalaciosCL/archlytic — producción en `/Archlytic/`.
