#!/usr/bin/env bash
# Sube el landing a la raíz de public_html (FTP admin_archlytic).
set -euo pipefail
cd "$(dirname "$0")"

HOST="${FTP_HOST:-vps.marketandproducts.com}"
USER="${FTP_USER:-admin_archlytic}"

echo "=== Deploy Market & Products → $HOST ==="
echo "Usuario: $USER"
echo "Te pedirá la contraseña FTP (la de Hestia / Additional FTP)."
echo ""

for f in index.html styles.css script.js logo.png; do
  if [[ ! -f "$f" ]]; then
    echo "Falta archivo: $f"
    exit 1
  fi
  echo "Subiendo $f ..."
  curl --fail --silent --show-error \
    --ftp-create-dirs \
    -T "$f" "ftp://${HOST}/home/admin_archlytic/public_html/${f}" \
    --user "${USER}" \
    --ftp-pasv \
    --ftp-method multicwd
  echo "  OK"
done

echo ""
echo "Listo. Abre https://marketandproducts.com/ y recarga con Cmd+Shift+R"
