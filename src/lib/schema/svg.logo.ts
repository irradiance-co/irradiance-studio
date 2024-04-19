import { defineType } from 'sanity';

export const svgLogo = defineType({
  name: 'svgLogo',
  title: 'SVG Logo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'SVG Image',
      type: 'image',
      options: {
        accept: '.svg', // Restricts file uploads to SVG files
      },
      validation: (Rule: any) =>
        Rule.required().error('A SVG logo image is required.'),
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'Optional URL that the logo will link to',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
});
