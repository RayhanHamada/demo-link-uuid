export async function generate(uuidFn: () => string) {
  const start = performance.now();
  const value = uuidFn();
  const end = performance.now();

  return {
    start,
    end,
    value,
  };
}
