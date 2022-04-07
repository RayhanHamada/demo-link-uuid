import { performance } from 'perf_hooks';

export function generate(uuidFn: () => string) {
  const startMs = performance.now();
  const value = uuidFn();
  const endMs = performance.now();

  return {
    start: startMs,
    end: endMs,
    value,
    takenMs: endMs - startMs,
  };
}
