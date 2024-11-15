import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="grid items-start w-11/12 grid-cols-1 gap-4 mx-auto md:grid-cols-12">
                <section className="col-span-12 md:col-span-9">
                    <h2 className="mb-4 text-lg font-semibold">Dragon News</h2>
                    <div className="w-full p-8 bg-white rounded-lg shadow-lg md:w-auto">
                        <div className="flex justify-center">
                            <img
                                src={news?.image_url}
                                alt=""
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <h2 className="mb-2 text-2xl font-bold text-left">
                                {news.title}
                            </h2>
                            <p className="text-gray-700">{news.details}</p>
                            <div className="mt-4">
                                <Link
                                    to={`/category/${news?.category_id}`}
                                    className="inline-flex items-center px-4 py-2 font-medium text-white bg-[#D72050] rounded hover:bg-[#c51845]"
                                >
                                    <FaArrowLeftLong className="mr-2" /> All
                                    news in this category
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="col-span-12 md:col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
