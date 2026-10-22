import './globals.css';

export const metadata = {
  title: 'Nirikshak',
  description: 'Project Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FFF9F2] text-[#292524] min-h-screen font-body antialiased selection:bg-[#F9B233] selection:text-[#292524]">
        {children}
      </body>
    </html>
  );
}
