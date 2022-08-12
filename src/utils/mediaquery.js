export const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
}

export const device = {
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,

  mobileOnly: `@media screen and (max-width: calc(${size.tablet} - 0.01px))`,
  // mobileOnly: `screen and (min-width: ${size.tablet}) and (max-width: ${size.tabletOnly})`,
  // mobileOnly: `screen and (min-width: ${size.tablet}) and (max-width: ${size.tabletOnly})`,
}