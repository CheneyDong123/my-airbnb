const theme = {
  colors: {
    primary: '#FF385C',
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadowActive: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px #ccc;
      }
    `
  }
}

export default theme