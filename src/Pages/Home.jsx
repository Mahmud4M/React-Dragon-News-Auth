import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSightNav from "../Shared/RightSideNav/RightSightNav";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <p className="text-2xl">News Comming</p>
                </div>
                <div >
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </>
    );
};

export default Home;