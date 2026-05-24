# Market and Products — landing

Sitio corporativo estático de [marketandproducts.com](https://marketandproducts.com/).

## Desarrollo local

```bash
python3 -m http.server 8765
```

Abre http://127.0.0.1:8765/

## Deploy (VPS Hestia)

```bash
./deploy-ftp.sh
```

Sube a `public_html/` del dominio (cuenta FTP `admin_archlytic`). Ver `DEPLOY.md`.

Referencia de diseño (Uiverse card): `DESIGN.html` (no se despliega).

## Repo relacionado

- **Archlytic** (producto): https://github.com/RodpalaciosCL/archlytic — se sirve en `/Archlytic/` del mismo dominio.
