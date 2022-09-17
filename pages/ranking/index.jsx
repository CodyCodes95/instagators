import Image from "next/image";
import PageContainer from "../../components/PageContainer";
import stickerTrans from '../../public/stickerTrans.png'

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "localhost:3000/api/cars"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       cars: data,
//     },
//   };
// };

// const CarList = ({cars}) => {
//   return (
//     <PageContainer className="bg-black">
//       {cars.length && cars.map((car, i) => 
//       <div key={i} className="flex w-[50%]" name="car-container">
//         <div className="flex flex-col w-[50%]" name="details-container" >
//             <p>{car.make} {car.model}</p>
//           <p>{car.owner}</p>
//             <p>{car.description}</p>
//         </div>
//         <div className="flex items-center justify-center w-[50%]" name="image-container">
//           <img src={car.images} />
//         </div>
//       </div>
//       )}
//     </PageContainer>
//   );
// };

const CarList = ({ cars }) => {
  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row w-[50%]" name="car-container">
        <div className="flex flex-col w-[50%]" name="details-container">
          <p>Toyota 86</p>
          <p>Aaden</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa modi
            fugit quo officiis eos totam eligendi placeat. Numquam eum ducimus
            rem, amet nobis voluptatum, voluptate voluptas consequatur nulla id
            dolorum?
          </p>
        </div>
        <div
          className="flex items-center justify-center w-[50%]"
          name="image-container"
        >
          <img src={stickerTrans.src} />
        </div>
      </div>
    </PageContainer>
  );
};

export default CarList;
