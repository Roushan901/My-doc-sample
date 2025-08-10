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
          <HomepageHeader />
          
          <section className={styles.videoSection}>
            <div className="container">
              <iframe
                className={styles.videoEmbed}
                src="https://www.youtube.com/embed/XU5xt1kBuyI"
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Menu Cards */}
          <section className={styles.menuSection}>
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
            <Link
              to="/docs/tutorial-basics"
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
                <span style={{ fontSize: '2.2rem' }}>🎓</span>
                <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#2563eb' }}>Tutorial</h3>
                <p style={{ fontSize: '1rem', color: '#555' }}>Start the tutorial</p>
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
