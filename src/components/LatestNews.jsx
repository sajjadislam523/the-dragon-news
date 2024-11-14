import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-4 p-2 bg-gray-100">
            <p className="bg-[#D72050] p-3 text-white">Latest</p>
            <Marquee
                pauseOnHover={true}
                speed={100}
                className="flex space-x-10"
            >
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore, nobis.🙂
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore, nobis.💔
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore, nobis.🔥
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tempore, nobis.😐
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
