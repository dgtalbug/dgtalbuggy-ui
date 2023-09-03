/* eslint-disable react/no-children-prop */
"use client";
import NextTopLoader from 'nextjs-toploader';
import { Provider } from 'react-redux';

import { store } from '@/store/store';
import EmotionCacheProvider from '@/utils/EmotionCache';
import { ColorPalette } from '@/utils/styles/Constants';
import { ThemeSettings } from '@/utils/styles/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const App = ({children}: {children: React.ReactNode}) => {
  const theme = ThemeSettings();
  return (
    <>
     <NextTopLoader color={ColorPalette.NextTopLoader} />
     <EmotionCacheProvider options={{key: 'dgtalbuggy'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
     </EmotionCacheProvider>
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <Provider store={store}>
           <App children={children} />
         </Provider>
        </body>
    </html>
  )
}
