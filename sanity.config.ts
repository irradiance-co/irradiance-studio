import { defineConfig } from 'sanity';
import { assist } from '@sanity/assist';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/lib/schema';

import { projectId, dataset } from '@/lib/sanity';

export default defineConfig({
  basePath: '/studio',
  name: 'irradiance',
  title: 'Irradiance Studio',
  projectId,
  dataset,

  plugins: [assist(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
