import test from 'node:test';
import assert from 'node:assert/strict';
import { lookupHost } from '../src/lookup.js';

test('lookupHost is exported', () => {
  assert.equal(typeof lookupHost, 'function');
});

test('deliberately failing Jenkins fixture', () => {
  assert.fail('intentional failing fixture for Jenkins rejection coverage');
});
