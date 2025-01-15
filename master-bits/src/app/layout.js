import "./globals.css";

export const metadata = {
    title: "MasterBits",
    description: "Manage your life in one app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={``}>{children}</body>
        </html>
    );
}
