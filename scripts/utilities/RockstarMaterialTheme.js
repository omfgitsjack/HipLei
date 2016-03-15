import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#594F8B",
    primary2Color: Colors.deepPurple500,
    primary3Color: Colors.deepPurple100,
    accent1Color: "#8272b3",
    accent2Color: Colors.deepPurpleA100,
    accent3Color: Colors.deepPurpleA400,
    textColor: Colors.grey900,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.purple700,
  }
};