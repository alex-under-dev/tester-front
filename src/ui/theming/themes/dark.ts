import { ThemeItem } from '../model/types'
import { mainTheme } from './main'

const BASE_FONT = 'Roboto Regular'
const LIGHT_FONT = 'Roboto light'

export const darkTheme = {
  ...mainTheme,
  backgroundColor: 'rgb(25,25,30)',
  contentBg: '#1d1d24',
  fontColor: '#ffffff',
  boxShadow: '#3f3f5a 0px 50px 100px -20px, #3f3f5a 0px 30px 60px -30px,#3f3f5a 0px -2px 6px 0px inset; */',
  baseFont: BASE_FONT,
  baseFontLight: LIGHT_FONT,

  accent700: '#ccc1f0',
  accent600: '#aa98e7',
  accent500: '#8f76df',
  accent400: '#775ad8',
  accent300: '#5530cf',

  default800: '#15151e',
  default700: '#2a2a3c',
  default600: '#3f3f5a',
  default500: '#8888aa',
  default400: '#a5a5c0',


  blue500: '#1E90FF',
  green500: '#6FCF97',

  secondary700: '#1d1d24',

  error: '#F53333',
}
export const createDarkTheme = (): ThemeItem => ({
  name: 'dark',
  variables: darkTheme,
})
