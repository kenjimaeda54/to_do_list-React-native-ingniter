import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

type BackgroundProps = {
  children: ReactNode;
};

export const BackGround = ({children}: BackgroundProps): JSX.Element => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(196, 196, 196, 0.24)', 'rgba(196, 196, 196, 0)']}
      style={styles.viewBackground}>
      {children}
    </LinearGradient>
  );
};
