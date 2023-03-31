export const initialState = {
    isContrast: false,
};

export const initializer = (state) => ({
    ...state,
    isContrast: false,
});

export const actions = ({ setState, getState }) => ({
    toggleTheme() {
      const { isContrast } = getState()
      setState({ isContrast: !isContrast });
    },
});
