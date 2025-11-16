import BlogCard from "../ui/cards/BlogCard";

type Post = {
    slug: string;
    title: string;
    coverImage?: string;
    publishedAt?: string;
    category?: string;
};

const RelatatedPosts = ({
    posts,
    heading = "Related posts",
}: {
    posts: Post[];
    heading?: string;
}) => {
    if (!posts.length) return null;
    return (

        <>
            <h2 className="text-2xl font-medium py-4 lg:pb-0 underline">
                {heading}
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-15">
                {posts.map((p) => (
                    <article key={p.slug}>
                        <BlogCard
                            title={p.title}
                            duration={p.publishedAt}
                            img={p.coverImage}
                            slug={p.slug}
                        />
                    </article>
                ))}
            </div>
        </>
    )
}

export default RelatatedPosts