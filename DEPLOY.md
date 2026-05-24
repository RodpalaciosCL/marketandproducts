# Market and Products — deploy

## Destino en el servidor

| Origen (este repo) | Ruta en VPS |
|--------------------|-------------|
| Raíz del repo | `/home/admin_archlytic/public_html/` |

URL: **https://marketandproducts.com/**

## Archivos a publicar

- `index.html`
- `styles.css`
- `script.js`
- `neural-bg.js`
- `logo.png`

## FTP manual

Host: `vps.marketandproducts.com`  
Usuario: `admin_archlytic`  
Ruta remota: `home/admin_archlytic/public_html/`

## Script

```bash
./deploy-ftp.sh
```

Variables opcionales: `FTP_HOST`, `FTP_USER`. La contraseña se pide por consola (no la guardes en el repo).

## Archlytic (otro repo)

El motor Archlytic **no** va en la raíz de este dominio. Vive en `/Archlytic/` y se despliega desde el repo [Archlytic](https://github.com/RodpalaciosCL/Archlytic).
