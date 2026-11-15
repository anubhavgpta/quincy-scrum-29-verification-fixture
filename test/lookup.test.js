import test from 'node:test';
import assert from 'node:assert/strict';
import { lookupHost } from '../src/lookup.js';

test('lookupHost is exported', () => {
  assert.equal(typeof lookupHost, 'function');
});
