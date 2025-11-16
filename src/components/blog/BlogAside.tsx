import { listTags, listCategories } from "@/data/blog";
import Link from "next/link";

const categoriesData = await listCategories();
const categories: string[] = categoriesData.data ?? [];

const tagsData = await listTags();
const tags: string[] = tagsData.data ?? [];

const BlogAside = () => {
  return (
    <div className="inner-shadow lg:block col-span-3 p-4 bg-[#f2f2f2]">
      <div className=" mt-5 p-4">
        <h2 className=" text-2xl mb-4 underline font-medium">
          Top Categories
        </h2>
        <ul className=" flex flex-col gap-y-2 text-gray-600">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-base cursor-pointer hover:text-brandRed hover:underline"
            >
              <Link href={`/blogs/category/?category=${encodeURIComponent(category)}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" mt-5 p-4 ">
        <h2 className=" text-2xl mb-4 underline font-medium">
          Tags
        </h2>
        <ul className=" flex flex-wrap gap-y-2 text-gray-600">
          {tags.map((tag, ind) => (
            <li
              key={ind}
              className="text-base cursor-pointer text-sm text-brandRed px-3 py-1 border border-brandOrange rounded mr-2 mb-2 hover:bg-brandRed hover:text-white transition duration-300 ease-in-out"
            >
              <Link href={`/blogs/tags/?tag=${encodeURIComponent(tag)}`}>#{tag}</Link>

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogAside