export const customStyleSelect = (theme) => {
  return {
    container: (provided) => ({
      ...provided,
      marginBottom: '20px',
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#000',
      padding: '0 10px',
      fontFamily: theme.fonts.default,
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: '3px',
      fontFamily: theme.fonts.default,
    }),
    placeholder: () => ({
      fontFamily: theme.fonts.default,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'purple',
    }),
  };
};
