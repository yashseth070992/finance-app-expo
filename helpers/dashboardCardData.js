import CalculateOutlinedIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use react-native-vector-icons for icons
import AttachMoneyOutlinedIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlagOutlinedIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrendingUpOutlinedIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MoneyOffOutlinedIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const dashboardCardData = [
  {
    title: 'Sip Calculator',
    screen: '/sip',
    icon: CalculateOutlinedIcon,
  },
  {
    title: 'Debt Manager',
    screen: '/debt',
    icon: MoneyOffOutlinedIcon,
  },
  {
    title: 'Lumpsum Calculator',
    screen: '/lumpsum',
    icon: AttachMoneyOutlinedIcon,
  },
  {
    title: 'Set Goals',
    screen: '/setgoals',
    icon: FlagOutlinedIcon,
  },
  {
    title: 'SWP Calculator',
    screen: '/swp',
    icon: TrendingUpOutlinedIcon,
  },
];