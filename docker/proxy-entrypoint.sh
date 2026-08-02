#!/bin/sh
# Start Caddy, print the host URL once the site answers, then wait.
set -eu

PORT="${ORB_WEB_PORT:-8080}"

caddy run --config /etc/caddy/Caddyfile --adapter caddyfile &
pid=$!

shutdown() {
	kill -TERM "$pid" 2>/dev/null || true
	wait "$pid" 2>/dev/null || true
	exit 0
}
trap shutdown TERM INT

i=0
while [ "$i" -lt 120 ]; do
	if ! kill -0 "$pid" 2>/dev/null; then
		wait "$pid"
		exit $?
	fi
	# Succeeds only when upstream Astro responds (Caddy returns 5xx while web is down).
	if wget -q -O /dev/null http://127.0.0.1/ 2>/dev/null; then
		printf '\n  Dev server: http://localhost:%s\n\n' "$PORT"
		break
	fi
	i=$((i + 1))
	sleep 1
done

wait "$pid"
