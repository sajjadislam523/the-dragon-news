import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl">
                Dragon News Home
            </h2>
            <p className="mt-4 text-sm text-gray-400">
                {news.length} News Found On This Category
            </p>
            <div className="flex flex-col gap-4">
                {news.map((singleNews) => (
                    <NewsCard key={singleNews._id} singleNews={singleNews} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;
