import { SchemaTypeDefinition } from 'sanity';

import { event } from './event';
import { category } from './category';
import { svgLogo } from './svg.logo';

export const schemaTypes = [event, category, svgLogo];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, category, svgLogo],
};
