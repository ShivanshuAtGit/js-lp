import Link from 'next/link';
import { playFlairFont } from '@/utils/fonts';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className={`${playFlairFont.className} text-6xl md:text-8xl text-center`}>
                404
            </h1>
            <h2 className={`${playFlairFont.className} text-2xl md:text-4xl text-center mt-4`}>
                Page Not Found
            </h2>
            <p className="text-center mt-4 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="mt-8 px-6 py-3 bg-[#472f37] text-white rounded hover:bg-[#5a3b45] transition-colors"
            >
                Return to Home
            </Link>
        </div>
    );
} 