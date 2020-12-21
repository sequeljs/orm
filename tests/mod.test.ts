import SequelORM from '../src/SequelORM.js'

import * as mod from '../src/mod.js'

test('exports from module', () => {
  expect(SequelORM).toStrictEqual(mod.SequelORM)
})
