import { useUser } from "@auth0/nextjs-auth0";
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
      <button>Back Home</button>
    </Link>
    <button
      onClick={() => changeAvailability("62f9f32be68cc6229e44f6e8", true)}
    >
      Make border available : Mark border as sold out
    </button>
    <button
      onClick={() => changeAvailability("62f9f318e68cc6229e44f6e6", true)}
    >
      Make borderless available : Mark borderless as sold out
    </button>
  </PageContainer>
)
};

export default index;
