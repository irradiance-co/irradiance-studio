import { SchemaTypeDefinition } from 'sanity';

import { event } from './event';
import { category } from './category';

export const schemaTypes = [event, category];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, category],
};
