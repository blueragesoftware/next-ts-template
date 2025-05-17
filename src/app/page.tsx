'use client';

import { Title } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';

export default function Home() {
  return (
    <Page back={false}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Title style={{ textAlign: 'center' }}>Telegram Mini App</Title>
      </div>
    </Page>
  );
}
