import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
width: 100%;
height:${RFPercentage(42)}px;
background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const UserWrapper= styled.View`
width: 100%;
padding: 0 ${RFValue(24)}px; 
margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFValue(28) : RFValue(28)}px;

flex-direction: row;
justify-content: space-between;
align-items: center;
`


export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;


export const User = styled.View`
  margin-left: 16px;
`;

export const UserGreeting = styled.Text`
color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({theme})=>theme.fonts.regular};
`;


export const UserName = styled.Text`
color: ${({theme})=>theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({theme})=>theme.fonts.bold};
`;


export const Icon = styled(Feather)`
font-size: ${RFValue(24)}px;
color: ${({theme})=>theme.colors.secondary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  contextContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  
  position: absolute;
  margin-top: ${RFPercentage(32)}px;
`;