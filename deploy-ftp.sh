#!/usr/bin/env bash
# Sube el landing a la raíz de public_html (FTP admin_archlytic).
set -euo pipefail
cd "$(dirname "$0")"

HOST="${FTP_HOST:-vps.marketandproducts.com}"
USER="${FTP_USER:-admin_archlytic}"
REMOTE_DIR="${FTP_REMOTE_DIR:-/home/admin_archlytic/public_html}"

if [[ -n "${FTP_PASS:-}" ]]; then
  CURL_USER="${USER}:${FTP_PASS}"
else
  CURL_USER="${USER}"
fi

echo "=== Deploy Market & Products → $HOST ==="
echo "Usuario: $USER"
if [[ -z "${FTP_PASS:-}" ]]; then
  echo "Te pedirá la contraseña FTP (la de Hestia / Additional FTP)."
  echo "Tip: FTP_PASS='…' ./deploy-ftp.sh para no escribirla a mano."
fi
echo ""

for f in index.html styles.css script.js logo.png contact.php; do
  if [[ ! -f "$f" ]]; then
    echo "Falta archivo: $f"
    exit 1
  fi
  echo "Subiendo $f ..."
  curl --fail --silent --show-error \
    --ftp-create-dirs \
    -T "$f" "ftp://${HOST}${REMOTE_DIR}/${f}" \
    --user "${CURL_USER}" \
    --ftp-pasv \
    --ftp-method multicwd
  echo "  OK"
done

echo ""
echo "Listo. Verifica: curl -sI https://marketandproducts.com/ | grep -i last-modified"
echo "Abre https://marketandproducts.com/ y recarga con Cmd+Shift+R"
