import BlogAside from "@/components/blog/BlogAside";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-14 mt-20 md:mt-0">
            {children}
            <aside className="col-span-4 bg-[#f2f2f2] md:h-screen sticky top-0 overflow-y-auto">
                <BlogAside />
            </aside>
        </div>);
}
