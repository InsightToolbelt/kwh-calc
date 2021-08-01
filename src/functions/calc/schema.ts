export default {
  type: "object",
  properties: {
    watt: { type: 'number' },
    hours: { type: 'number' },
    kwhPrice: { type: 'number' }
  },
  required: ['watt', 'hours', 'kwhPrice']
} as const;
