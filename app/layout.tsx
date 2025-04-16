import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeChangeButton } from '@/components/ui/theme-button';

const lora = Lora({
	variable: '--font-lora',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Bill Buddy – Free Invoice Generator',
	description: 'A simple, fast, and GST-compliant invoice generator for Indian freelancers and small businesses. No login. No ads. Just invoicing.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${lora.variable} antialiased relative`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					{children}

					<ThemeChangeButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
