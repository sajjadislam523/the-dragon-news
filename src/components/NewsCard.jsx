import PropTypes from "prop-types";
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ singleNews }) => {
    const { author, title, details, thumbnail_url, rating, total_view } =
        singleNews;
    return (
        <div className="p-4 mx-auto bg-white rounded-lg shadow-lg ">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img
                        src={author.img}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold">
                            {author.name ? author.name : "Unknown"}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                    <FaBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-bold">{title}</h3>

            {/* Thumbnail Image */}
            <img
                src={thumbnail_url}
                alt="Thumbnail"
                className="object-cover w-full h-48 mt-3 rounded-lg"
            />

            {/* Description */}
            <p className="mt-3 text-gray-600">
                {details.substring(0, 100)}...{" "}
                <span className="text-blue-500 cursor-pointer">Read More</span>
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from(
                        { length: Math.floor(rating.number) },
                        (_, i) => (
                            <AiFillStar key={i} />
                        )
                    )}
                    <span className="font-semibold text-gray-700">
                        {rating.number}
                    </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object,
};

export default NewsCard;
