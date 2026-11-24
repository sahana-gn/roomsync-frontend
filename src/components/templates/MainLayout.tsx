import type { ReactNode } from 'react';
import { Brand } from '../atoms/Brand';
import { Button } from '../atoms/Button';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-layout">
        <header className="site-header">
          <Brand />

          <nav className="site-nav" aria-label="Main navigation">
            <a className="nav-link" href="#roomsync-idea">
              How it works
            </a>

            <Button className="button-text" disabled>
              Log in
            </Button>

            <Button className="button-small" disabled>
              Get started
            </Button>
          </nav>
        </header>

        <main id="main-content" className="site-main" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}