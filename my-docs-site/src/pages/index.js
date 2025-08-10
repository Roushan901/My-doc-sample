import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              🚀 Click & Learn
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * Homepage component for the documentation site.
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Welcome to ${siteConfig.title}`}
        description="Sample Project Documentation"
      >
        <main>
          <section
            style={{
              background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
              color: '#fff',
              padding: '4rem 0',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <h1 style={{ fontSize: '3.2rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              🚀 My Documentation Sample
            </h1>
            <p style={{ fontSize: '1.6rem', marginBottom: '2.2rem' }}>
              Empower your team with clear, beautiful docs.
            </p>
            <button
              style={{
                fontSize: '1.2rem',
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                border: 'none',
                background: '#38bdf8',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => (e.target.style.background = '#2563eb')}
              onMouseOut={e => (e.target.style.background = '#38bdf8')}
            >
              ✨ Get Started
            </button>
          </section>
          
          {/* Menu Card Section */}
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              margin: '3rem 0',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/docs/intro"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  width: '220px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <span style={{ fontSize: '2.2rem' }}>📚</span>
                <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#2563eb' }}>Docs</h3>
                <p style={{ fontSize: '1rem', color: '#555' }}>Read the documentation</p>
              </div>
            </Link>
            <Link
              to="/blog"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  width: '220px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <span style={{ fontSize: '2.2rem' }}>📝</span>
                <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#2563eb' }}>Blog</h3>
                <p style={{ fontSize: '1rem', color: '#555' }}>Latest updates & news</p>
              </div>
            </Link>
            <a
              href="https://github.com/Roushan901"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  width: '220px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <span style={{ fontSize: '2.2rem' }}>💻</span>
                <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#2563eb' }}>GitHub</h3>
                <p style={{ fontSize: '1rem', color: '#555' }}>View source code</p>
              </div>
            </a>
          </section>

          <HomepageFeatures />
          <footer
            style={{
              background: '#f3f4f6',
              color: '#2563eb',
              textAlign: 'center',
              padding: '2rem 0 1rem 0',
              marginTop: '3rem',
              fontSize: '1rem',
            }}
          >
            <span>
              Made with ❤️ by Roushan901 &nbsp;|&nbsp;
              <a href="https://github.com/Roushan901" style={{ color: '#2563eb', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </footer>
        </main>
      </Layout>
    );
}
