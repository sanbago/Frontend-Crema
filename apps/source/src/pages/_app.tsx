import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from '../core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';

import '@crema/mockapi';
import '../../public/styles/vendors/index.css';
import AppPageMeta from '@crema/components/AppPageMeta';
import InfoViewContextProvider from '@crema/context/InfoViewContextProvider';
import createEmotionCache from "../../createEmotionCache";
import JWTAuthAuthProvider from '../../../../libs/services/auth/src/jwt-auth/JWTAuthProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider>
        <AppThemeProvider>
          <AppStyleProvider>
            <AppLocaleProvider>
              <InfoViewContextProvider>
                <AppAuthProvider>
                  <JWTAuthAuthProvider>
                  <AuthRoutes>
                    <CssBaseline />
                    <AppPageMeta />
                    <Component {...pageProps} />
                  </AuthRoutes>
                  </JWTAuthAuthProvider>
                </AppAuthProvider>
              </InfoViewContextProvider>
            </AppLocaleProvider>
          </AppStyleProvider>
        </AppThemeProvider>
      </AppContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
