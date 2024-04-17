import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSightNav = () => {
    return (
        <>
            <div className="space-y-5">
            {/* Login With */}
            <div>
                <h2 className="text-2xl">Login With</h2>
                <div>
                    <button className="btn bg-gray-50 border-gray-500 w-full flex text-lg mb-2">
                        <FaGoogle></FaGoogle>
                        Google
                        </button>
                    <button className="btn bg-gray-50 border-gray-500 w-full flex text-lg">
                        <FaGithub></FaGithub>
                        Github
                        </button>
                </div>
            </div>

            {/* Find Us On */}
            <div>
                <h2 className="text-2xl">Find Us On</h2>
                <div>
                    <button className="btn flex items-center w-full border border-gray-500 text-lg mb-2">
                    <FaFacebook className="mr-3"></FaFacebook>
                        <span>FaceBook</span>
                    </button>
                    <button className="btn flex items-center w-full border border-gray-500 text-lg mb-2">
                    <FaTwitter className="mr-3"></FaTwitter>
                        <span>Twitter</span>
                    </button>
                    <button className="btn flex items-center w-full border border-gray-500 text-lg mb-2">
                        <FaInstagram className="mr-3"></FaInstagram>
                        <span>Instragram</span>
                    </button>
                </div>
            </div>

            {/* Q Zone */}
            <div className="bg-gray-200 px-4 py-1 rounded-lg">
                <h2 className="text-2xl">Q Zone</h2>
                <div>
                    <img className="mb-2" src={qZone1} alt="" />
                    <img className="mb-2" src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>

            </div>
        </>
    );
};

export default RightSightNav;