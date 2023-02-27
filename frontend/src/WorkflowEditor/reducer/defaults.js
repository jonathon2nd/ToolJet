import { v4 as uuidv4 } from 'uuid';

export const defaultNode = {
  id: uuidv4(),
  type: 'query',
  sourcePosition: 'right',
  targetPosition: 'left',
  draggable: true,
  data: {
    nodeType: 'query',
    label: 'Query',
    kind: 'runjs',
    options: {},
  },
};