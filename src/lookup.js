import { execFile } from 'node:child_process';

export function lookupHost(hostname, callback) {
  return execFile('nslookup', [hostname], callback);
}
