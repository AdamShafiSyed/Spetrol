// import {StyleSheet} from 'react-native';
// import scaling from './scaling';
import colors from './colors';
import spacing from './spacing';

// const navBarPadding = scaling.setValues({
//   m: spacing.spacingXs,
//   l: spacing.spacingM,
// });

// const navBarHeight = scaling.setValues({m: 59, l: 76});

const globalStyles = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  flex1: {
    flex: 1,
  },
  justifySpacebtw: {
    justifyContent: 'space-between',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  alignItemstart: {
    alignItems: 'flex-start',
  },
  formField: {
    // height: scaling.setValues({s: 45, m: 50, l: 56}),
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.black30,
    position: 'relative',
    justifyContent: 'center',
  },
  // formFieldHeight: scaling.setValues({s: 46, m: 50, l: 56}),
  // navBarHeight,
  // navigationBar: {
  //   height: navBarHeight,
  //   paddingTop: navBarPadding,
  //   paddingBottom: navBarPadding,
  // },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  alignSpaceBetween: {
    alignContent: 'space-between',
  },
  justifyAlignSpaceBtw: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  flexGrow: {
    flexGrow: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  aliginItemsCenter: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  textAlign: {
    textAlign: 'center',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  spetrolColor: {
    color: colors.spetrolRed,
  },
  backGroundWhite: {
    backgroundColor: colors.white,
  },
  divider: {
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  greyDivider: {backgroundColor: colors.divider, height: spacing.spacing10},
  padding16: {
    padding: spacing.spacingM,
  },
  width100: {
    width: '100%',
  },
  width50: {
    width: '50%',
  },
};

export default globalStyles;
