import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Telegram Mini App',
  description: 'This Mini App was generated via t.me/blueragebot',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
          <Root>
            {children}
          </Root>
      </body>
    </html>
  );
}
