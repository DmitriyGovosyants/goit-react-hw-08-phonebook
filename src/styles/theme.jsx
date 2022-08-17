export const theme = Object.freeze({
  colors: {
    titleMain: '#f5f5f5',
    titleForm: '#ffffff',

    textMain: '#0d2646',
    textSecond: '#ffffff',
    textThird: '#296d98',

    bgcMain: '#ddeeff',
    bgcSecond: '#ffeeff',

    iconColor: '#a16f6f',
    iconColorAccent: '#8b5353',
    iconBgcAccent: '#ffadff',

    attentionBtnBgc: '#eeaa47',
    attentionBtnBgcAccent: '#00aa47',

    contactAvatarBgc: '#ff6347',
    line: '#d3d3d3',
  },
  fontSizes: {
    titleMain: '48px',
    titleForm: '32px',
    S: '12px',
    M: '18px',
    XL: '32px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  shadow: {
    titleMain: `1px 1px 1px #919191,
      1px 2px 1px #919191,
      1px 3px 1px #919191,
      1px 4px 1px #919191,
      1px 5px 1px #919191,
      1px 6px 1px #919191,
      1px 7px 1px #919191,
  1px 10px 3px rgba(16,16,16,0.4),
  1px 25px 35px rgba(16,16,16,0.2)`,
    titleForm: `1px 1px 1px #919191,
      1px 2px 1px #919191`,
    userMenu: `3px 3px 15px #26207a, -3px -3px 15px #26207a`,
  },
});
