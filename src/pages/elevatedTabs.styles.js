import { makeStyles } from '@material-ui/core/styles';

export const tabsStyles = makeStyles((theme) => {
  const tabsBackground = 'linear-gradient(60deg, #ab47bc, #8e24aa)';
  const indicatorBackground = 'rgba(255, 255, 255, 0)';
  const borderRadius = 1;
  return {
    root: {
      width: '100%',
      borderRadius: 5,
      background: tabsBackground,
      padding: 10,
      boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)',
    },
    indicator: {
      height: '100%',
      borderRadius,
      backgroundColor: indicatorBackground,
    },
    tabPanel: {
      background: 'transparent',
    },
    appBar: {
      backgroundColor: 'transparent',
    },
  };
});

// const tabItemStyles = ({ breakpoints, spacing }) => {
//   const tabsGutter = spacing(2);
//   const labelColor = '#ffffff';
//   return {
//     root: {
//       textTransform: 'initial',
//       margin: `0 ${tabsGutter}px`,
//       minWidth: 0,
//       [breakpoints.up('md')]: {
//         minWidth: 0,
//       },
//     },
//     wrapper: {
//       fontWeight: 'normal',
//       letterSpacing: 0.5,
//       color: labelColor,
//     },
//   };
// };