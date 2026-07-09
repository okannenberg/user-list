import Link from 'next/link';

export default function ActionLink({ href, children }) {
    return (
        <Link
            href={href}
            className="inline-flex text-sm font-extrabold text-app-primary hover:text-blue-800 transition-colors"
        >
            {children}
        </Link>
    );
}