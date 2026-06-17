.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border-subtle);
  padding: 40px 0;
  margin-top: 60px;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
}

.footer__role {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.footer__social {
  display: flex;
  gap: 20px;
  color: var(--text-secondary);
}

.footer__social a {
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer__social a:hover {
  color: var(--accent-cyan);
  transform: translateY(-2px);
}

.footer__copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
