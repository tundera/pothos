import SchemaBuilder from '@pothos/core';
import WithInputPlugin from '../../src';

export default new SchemaBuilder({
  plugins: [WithInputPlugin],
  withInput: {
    argOptions: {
      description: 'input arg',
    },
  },
});