.news-page {
  position: relative;
  z-index: 1;
  padding-top: 130px;
}

.news-page__sub {
  color: var(--text-secondary);
  max-width: 600px;
  margin-top: 16px;
}

.news-section {
  margin-top: 60px;
}

.news-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.news-section__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.news-refresh {
  padding: 8px 16px;
  font-size: 0.85rem;
  margin-bottom: 16px;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.news-page__status {
  color: var(--text-muted);
  padding: 30px 0;
}

.news-page__status--error {
  color: var(--danger);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.news-card {
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.news-card:hover {
  border-color: var(--accent-cyan-dim);
  transform: translateY(-3px);
}

.news-card--manual {
  border-left: 3px solid var(--accent-amber);
}

.news-card__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
}

.news-card h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  margin: 12px 0 8px;
  line-height: 1.4;
}

.news-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  flex-grow: 1;
}

.news-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  color: var(--accent-cyan);
  font-size: 0.85rem;
  font-weight: 500;
}

.tag--amber {
  border-color: var(--accent-amber-dim);
  color: var(--accent-amber);
}
