import { FC, ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin as any],
});

interface IProps {
  children: ReactNode;
}

export const RTL: FC<IProps> = ({ children }) => <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
