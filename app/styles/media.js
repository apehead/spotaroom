import { css } from 'styled-components';

import sizes from './sizes';

const fontBase = 16;

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / fontBase;
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default media;
