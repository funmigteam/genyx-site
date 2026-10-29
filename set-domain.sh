#!/bin/sh
set -eu
[ $# -eq 1 ] || { echo "Usage: $0 https://www.your-domain.com"; exit 1; }
DOMAIN=$(printf '%s' "$1" | sed 's:/*$::')
cd "$(dirname "$0")"
for file in index.html sitemap.xml robots.txt; do
  sed -i.bak "s#https://example.com#${DOMAIN}#g" "$file" && rm -f "$file.bak"
done
echo "Domain set to ${DOMAIN}"
