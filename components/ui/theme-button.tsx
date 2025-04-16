'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeChangeButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === 'dark';

	const classname =
		'absolute cursor-pointer flex items-center justify-center bottom-6 right-6 z-50 rounded-full p-3 shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black duration-300 hover:bg-gray-100 dark:hover:bg-gray-900 rotate-0 hover:-rotate-90 ease-in-out';

	return (
		<button onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} className={classname}>
			{isDark ? <Sun className='w-6 h-6 text-yellow-400' /> : <Moon className='w-6 h-6 text-gray-600' />}
		</button>
	);
}
