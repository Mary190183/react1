import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="container_404 container">
      This page doesn&apos;t exist. Go
      <Link href="/">
        <h1 className="logo">Houseplants</h1>
      </Link>
    </div>
  );
}
