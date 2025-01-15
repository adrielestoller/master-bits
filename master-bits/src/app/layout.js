import "./globals.css";

export const metadata = {
    title: "MasterBits",
    description: "Manage your life in one app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`w-screen h-screen bg-teal-100`}>{children}</body>
        </html>
    );
}
