import React from 'react';

import { StyledChip } from './Chip.styles';

export const Chip = ({ borderColor, textColor, content }) => {
  // Customize the Chip adding props:
  // - content for text in Chip
  // - textColor for color of text
  // - borderColor for color of border

  const chipStyle = {
    // what we want to modify
    borderColor: borderColor,
    color: textColor,
  };

  return <StyledChip style={chipStyle}>{content}</StyledChip>;
};
