import './globals.css';

export const metadata = {
  title: 'Vanda Nichada Homes | ISB Expat Housing',
  description: 'Premium rental homes in Nichada Thani near International School Bangkok for expat families.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
