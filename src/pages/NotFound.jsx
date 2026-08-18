import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | AI KISA School"
        description="The requested page could not be found on the AI KISA School website."
        url="https://www.aikisaschool.com/404"
      />
      <main className="container-page flex min-h-[60vh] items-center justify-center py-20 text-center">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">404</p>
          <h1 className="mt-4 text-4xl font-black text-[#1F2937]">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-[#4d5967]">
            The page you requested does not exist. Use the links below to continue exploring AI KISA School.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="rounded-full bg-[#1B2A5C] px-6 py-3 text-sm font-semibold text-white">
              Go to Home
            </Link>
            <Link to="/admission" className="rounded-full border border-[#DFB863] bg-[#DFB863] px-6 py-3 text-sm font-semibold text-[#1B2A5C]">
              Learn about admissions
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
