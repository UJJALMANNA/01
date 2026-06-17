.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.navbar--scrolled {
  background: rgba(10, 14, 20, 0.85);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--border-subtle);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
}

.navbar__brand-mark {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent-cyan);
  border-radius: 8px;
  color: var(--accent-cyan);
  font-family: var(--font-mono);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.navbar__link {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.navbar__link:hover {
  color: var(--text-primary);
}

.navbar__link--active {
  color: var(--accent-cyan);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-cyan);
  box-shadow: 0 0 8px var(--accent-cyan);
}

.navbar__toggle {
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-subtle);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .navbar__links--open {
    max-height: 320px;
  }

  .navbar__link {
    width: 100%;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border-subtle);
  }
}
