import React from 'react';
import { Text, View } from 'react-native';
import { formatNumber } from './formatNumber';

export const getSummary = (
  calculatorType,
  invested,
  returns,
  totalAmount,
  withdrawal,
  extraWithdrawalMonths
) => {
  switch (calculatorType) {
    case 'sip':
      return (
        <View style={{ marginVertical: 10 }}>
          <Text>
            By investing a fixed amount every month, your total investment of{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(invested)}</Text> will grow to{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(totalAmount)}</Text>, generating returns of{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(returns)}</Text>.
          </Text>
        </View>
      );

    case 'lumpsum':
      return (
        <View style={{ marginVertical: 10 }}>
          <Text>
            With a one-time investment of{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(invested)}</Text>, your investment will grow
            to <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(totalAmount)}</Text>, earning returns of{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(returns)}</Text>.
          </Text>
        </View>
      );

    case 'swp':
      return (
        <View style={{ marginVertical: 10 }}>
          <Text>
            With a starting corpus of <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(invested)}</Text>,
            withdrawing monthly <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(withdrawal)}</Text>, you
            can withdraw for approximately{' '}
            <Text style={{ fontWeight: 'bold' }}>{formatNumber(extraWithdrawalMonths)} months</Text> while
            your capital continues to grow. Your total withdrawals will amount to{' '}
            <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(invested)}</Text>, and you will earn total
            returns of <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(returns)}</text>. The total value
            of your investment will be <Text style={{ fontWeight: 'bold' }}>₹{formatNumber(totalAmount)}</Text>.
          </Text>
        </View>
      );

    default:
      return null;
  }
};