import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);
    return (
        <div>
            <h1 className="font-semibold">
                All Category ({categories.length})
            </h1>
            <div className="flex flex-col items-center gap-2 py-4">
                {categories.map((category) => (
                    <NavLink
                        to={`/category/${category.category_id}`}
                        className="w-full px-10 py-3 font-bold rounded-lg"
                        key={category.category_id}
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;
