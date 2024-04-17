import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <>
            <div className="flex items-center">
                <button className="btn bg-orange-400 mr-3">Secondary</button>
                <div>
                    <Marquee pauseOnHover={true} speed={50}>
                        <Link className="mr-5 text-black no-underline"><span className="text-red-400">Match Highlights:</span> I can be a React component, multiple React components, or just some text.....</Link>
                        <Link className="mr-5 text-black no-underline"><span className="text-red-400">News Highlights:</span> I can be a React component, multiple React components, or just some text.....</Link>
                        <Link className="mr-5 text-black no-underline"><span className="text-red-400">Road Highlights:</span> I can be a React component, multiple React components, or just some text.....</Link>
                        <Link className="mr-5 text-black no-underline"><span className="text-red-400">Current Highlights:</span> I can be a React component, multiple React components, or just some text.....</Link>
                        <Link className="mr-5 text-black no-underline"><span className="text-red-400">Intrnational Highlights:</span> I can be a React component, multiple React components, or just some text.....</Link>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default LatestNews;