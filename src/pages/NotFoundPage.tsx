import { Link } from 'react-router-dom';
export function NotFoundPage() {
  return <section className="container not-found"><span className="eyebrow">404 ERROR</span><h1>Page not found</h1><p>Sorry, the page you are looking for does not exist.</p><Link className="button button-primary" to="/">Return home</Link></section>;
}
