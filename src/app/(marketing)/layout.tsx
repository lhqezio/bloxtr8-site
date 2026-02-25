import Header from "./components/Header";
import Footer2 from "./components/Footer2";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer2 />
    </div>
  );
}
