import { UserProvider, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import PageContainer from "../../components/PageContainer";

const index = () => {

  const changeAvailability = (id, bool) => {
    fetch((`http://localhost:3000/api/products/update`), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        id: id,
        available: bool
      })
    }
  )} 
  return (
      <PageContainer>
        <Link href="..">
          <button className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center bg-orange-400 hover:bg-orange-700 duration-200 m-4">
            Back Home
          </button>
        </Link>
        <div className="flex ">
          <div className="flex flex-col">
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center bg-red-500 hover:bg-red-800 duration-200 m-4"
              onClick={() =>
                changeAvailability("62f9f32be68cc6229e44f6e8", false)
              }
            >
              Mark border as sold out
            </button>
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center bg-[#606c38] hover:bg-[#283618] duration-200 m-4"
              onClick={() =>
                changeAvailability("62f9f32be68cc6229e44f6e8", true)
              }
            >
              Make border available
            </button>
          </div>
          <div className="flex flex-col">
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center bg-red-500 hover:bg-red-800 duration-200 m-4"
              onClick={() =>
                changeAvailability("62f9f318e68cc6229e44f6e6", false)
              }
            >
              Mark borderless as sold out
            </button>
            <button
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center bg-[#606c38] hover:bg-[#283618] duration-200 m-4"
              onClick={() =>
                changeAvailability("62f9f318e68cc6229e44f6e6", true)
              }
            >
              Make borderless available
            </button>
          </div>
        </div>
      </PageContainer>
  );
};

export default withPageAuthRequired(index);
