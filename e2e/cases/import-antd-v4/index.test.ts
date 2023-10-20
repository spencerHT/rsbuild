import path from 'path';
import { expect, test } from '@playwright/test';
import { build } from '@scripts/shared';

test.setTimeout(120000);

test('should import antd v4 correctly', async () => {
  const rsbuild = await build(
    {
      cwd: __dirname,
      entry: { index: path.resolve(__dirname, './src/index.ts') },
    },
    undefined,
    false,
  );
  const files = await rsbuild.unwrapOutputJSON();
  expect(
    Object.keys(files).find((file) => file.includes('lib-antd')),
  ).toBeTruthy();
});