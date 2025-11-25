import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import ProductDetail from "../components/ProductComponents/ProductDetail";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import axiosinstance from "../axiosinstance";

const ProductPage = () =>
{
  const [ openDropDown, setOpenDropDown ] = useState( null );
  const [ reviewFilter, setReviewFilter ] = useState( "recent" );
  const [ showreviewFilter, setShowReviewFilter ] = useState( false );
  const { productId } = useParams();
  const [ product, setProduct ] = useState( {} );
  const [ selectedImage, setSelectedImage ] = useState();
  const { addToCart } = useCart();
  
  const showProductDetailInfo = ( e ) =>
  {
    setOpenDropDown( ( prev ) => prev === e.target.dataset.dropdownId ? null : e.target.dataset.dropdownId );
  };

  const handleReviewFilterDisplay = ( e ) =>
  {
    setReviewFilter( e.target.innerText );
    setShowReviewFilter( false );
  };


  const getProduct = async () =>
  {
    const response = await axiosinstance.get( `/product/${productId}/` );
    setProduct( response.data );
    setSelectedImage(`http://localhost:8000${response.data.productImage.find( image => image.is_primary === true).image_url}`)
    // console.log( response.data.productImage );
  };

  const handleAddToCart = async ()=> {
    try{
      await addToCart(product.product_id, 1)
      console.log("Added");
    } catch (error){
      console.log(error);
    }
  }

  useEffect( () =>
  {
    getProduct();
  }, [] );

  useEffect(()=>{
     window.scrollTo(0, 0);
  }, [])

  return (
    <article className='min-h-100 px-2 md:px-15 pt-8'>
      <section className='w-full'>
        <div className='text-gray-600 font-medium text-lg flex gap-1 items-center-safe'>
          <NavLink to={"/"}>Home</NavLink>
          <MdOutlineKeyboardArrowRight className="text-gray-300" />
          <NavLink to={"/category/bread"} className="text-nowrap">Product Category</NavLink>
          <MdOutlineKeyboardArrowRight className="text-gray-300" />
          <p className="text-[#A02B84] truncate">{product.name}</p>
        </div>
      </section>

      <section className="flex gap-25 mt-5 lg:flex-nowrap flex-wrap">
        <div className="border-1 border-gray-300 rounded-3xl flex-1 w-full py-5 bg-black/2">
          <div className="w-full md:w-150 mx-auto mb-3 ">
            <img src={selectedImage} className="w-full h-100 object-contain" alt="" />
          </div>
          <div className="flex gap-3  justify-center-safe overflow-x-auto no-scrollbar px-5">
            {/* {product?.productImage?.map(p => console.log(p))} */}

            {product?.productImage?.map( images => <div key={images.image_id} className={`min-w-20 p-2 rounded-lg bg-[#F2FFF6] border-1 ${selectedImage === 'http://localhost:8000'+images.image_url ? 'border-[#B6349A]':'opacity-65 border-[#EFEEEE]'} `}>
              <img src={`http://localhost:8000${images.image_url}`} className=" object-cover h-15 w-20 object-center" alt="" onClick={()=> setSelectedImage(`http://localhost:8000${images.image_url}`)} />
            </div> )}

          </div>
        </div>

        <div className="w-120">
          <div className="text-4xl font-semibold mb-4">
            <h1>{product.name}</h1>
          </div>

          <div className="mb-8">
            {/* <p className="text-md font-norma text-gray-700l">$2.71/lb</p> */}
            <p className="font-semibold text-3xl">${product.price} <span className="line-through font-normal text-lg text-gray-700">${product.discount_price}</span> </p>
            <p className="text-[#A02B84] text-lg font-medium mb-4">12 Left</p>
            <button className="w-full bg-[#A02B84] flex justify-center-safe items-center-safe gap-4 text-white py-4  rounded-4xl text-xl font-medium" onClick={handleAddToCart}>
              <IoCartOutline className="size-7" />
              Add To Cart
            </button>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700 mb-4">About Product</h2>
            <div className="flex justify-between mb-5">
              <div className="flex justify-center-safe items-center-safe gap-4">
                <div className="text-[#A02B84] bg-[#EFEEEE] p-2 rounded-full"><IoMdTrophy className="size-5" /></div>
                <p className="font-medium text-xl">Best seller Product</p>
              </div>
              <p className="text-[#A02B84] font-medium text-sm flex gap-1 items-center-safe text-nowrap">View more <MdOutlineKeyboardArrowRight className="size-6" /></p>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-center-safe items-center-safe gap-4">
                <div className="text-green-700 bg-[#EFEEEE] p-2 rounded-full"><HiBadgeCheck className="size-5" /></div>
                <p className="font-medium text-xl">100% satisfaction guarantee</p>
              </div>
              {/* <p className="text-[#A02B84] font-medium">View more +</p> */}
            </div>
          </div>

        </div>
      </section>


      <section className="flex flex-wrap md:flex-nowrap bg-black/2 p-4 lg:p-8 gap-20 rounded-3xl mt-6">
        <div className="flex-1 md:min-w-80">
          <div>
            <h2 className="text-2xl font-semibold">Customer Reviews</h2>
            <p className="text-gray-700 font-medium">Averge rating: 4.5 (5744)</p>
          </div>
          <div className="flex  w-full flex-col gap-1">
            <div className="flex items-center-safe gap-3">
              <p className="font-medium text-lg flex items-center-safe gap-1">5 <CiStar className="size-5" /></p>
              <div className="flex-1 bg-gray-100 h-2 rounded-xl overflow-hidden"><div className="bg-[#A02B84] w-[90%] h-2 rounded-xl"></div> </div>
              <p className="text-nowrap truncate font-semibold">&bull; 4.28K</p>
            </div>
            <div className="flex items-center-safe gap-3">
              <p className="font-medium text-lg flex items-center-safe gap-1">4 <CiStar className="size-5" /></p>
              <div className="flex-1 bg-gray-100 h-2 rounded-xl overflow-hidden"><div className="bg-[#A02B84] w-[70%] h-2 rounded-xl"></div> </div>
              <p className="text-nowrap truncate font-semibold">&bull; 4.28K</p>
            </div>
            <div className="flex items-center-safe gap-3">
              <p className="font-medium text-lg flex items-center-safe gap-1">3 <CiStar className="size-5" /></p>
              <div className="flex-1 bg-gray-100 h-2 rounded-xl overflow-hidden"><div className="bg-[#A02B84] w-[50%] h-2 rounded-xl"></div> </div>
              <p className="text-nowrap truncate font-semibold">&bull; 4.28K</p>
            </div>
            <div className="flex items-center-safe gap-3">
              <p className="font-medium text-lg flex items-center-safe gap-1">2 <CiStar className="size-5" /></p>
              <div className="flex-1 bg-gray-100 h-2 rounded-xl overflow-hidden"><div className="bg-[#A02B84] w-[30%] h-2 rounded-xl"></div> </div>
              <p className="text-nowrap truncate font-semibold">&bull; 4.28K</p>
            </div>
            <div className="flex items-center-safe gap-3">
              <p className="font-medium text-lg flex items-center-safe gap-1">1 <CiStar className="size-5" /></p>
              <div className="flex-1 bg-gray-100 h-2 rounded-xl overflow-hidden"><div className="bg-[#A02B84] w-[10%] h-2 rounded-xl"></div> </div>
              <p className="text-nowrap truncate font-semibold">&bull; 4.28K</p>
            </div>
          </div>
        </div>
        <div className="md:max-w-180">
          <div className="flex  justify-between items-center-safe">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div>
              <p className="text-[#A02B84] flex items-center-safe capitalize cursor-pointer" onClick={() => setShowReviewFilter( ( prev ) => prev === true ? false : true )} >{reviewFilter} <MdOutlineKeyboardArrowDown className="size-5" /> </p>

              <div className={` ${!showreviewFilter && 'hidden'} absolute w-fit bg-white ring-1 ring-black/20`} onClick={handleReviewFilterDisplay}>
                <p className="text-[#A02B84] flex items-center-safe hover:bg-black/20 pl-1 pr-2 cursor-pointer font-medium">Most liked </p>
                <p className="text-[#A02B84] flex items-center-safe hover:bg-black/20 pl-1 pr-2 cursor-pointer font-medium">Oldest</p>
                <p className="text-[#A02B84] flex items-center-safe hover:bg-black/20 pl-1 pr-2 cursor-pointer font-medium">Recent</p>
              </div>
            </div>


          </div>

          <div className="flex flex-col gap-4 mt-5 h-100 overflow-y-auto no-scrollbar">
            <div className="">
              <p className="text-lg font-semibold mb-1">Perfect Combination!!</p>
              <div className="flex gap-0.5 items-center-safe mb-1">
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
              </div>
              <p className="text-black/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate earum ipsa reprehenderit ex rerum excepturi ipsum expedita dicta quis doloremque optio tempora reiciendis placeat vitae consectetur libero, ratione nobis velit rem odio ea? Aut et laudantium dignissimos optio aspernatur iusto quidem in vero obcaecati tempora, reiciendis rerum quos quo sequi autem, hic consequuntur accusamus accusantium dolor necessitatibus veniam ipsam.</p>
            </div>
            <div className="">
              <p className="text-lg font-semibold mb-1">Perfect Combination!!</p>
              <div className="flex gap-0.5 items-center-safe mb-1">
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
              </div>
              <p className="text-black/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate earum ipsa reprehenderit ex rerum excepturi ipsum expedita dicta quis doloremque optio tempora reiciendis placeat vitae consectetur libero, ratione nobis velit rem odio ea? Aut et laudantium dignissimos optio aspernatur iusto quidem in vero obcaecati tempora, reiciendis rerum quos quo sequi autem, hic consequuntur accusamus accusantium dolor necessitatibus veniam ipsam.</p>
            </div>
            <div className="">
              <p className="text-lg font-semibold mb-1">Perfect Combination!!</p>
              <div className="flex gap-0.5 items-center-safe mb-1">
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
              </div>
              <p className="text-black/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate earum ipsa reprehenderit ex rerum excepturi ipsum expedita dicta quis doloremque optio tempora reiciendis placeat vitae consectetur libero, ratione nobis velit rem odio ea? Aut et laudantium dignissimos optio aspernatur iusto quidem in vero obcaecati tempora, reiciendis rerum quos quo sequi autem, hic consequuntur accusamus accusantium dolor necessitatibus veniam ipsam.</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">Perfect Combination!!</p>
              <div className="flex gap-0.5 items-center-safe mb-1">
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
                <GiRoundStar className="size-5 text-amber-500" />
              </div>
              <p className="text-black/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate earum ipsa reprehenderit ex rerum excepturi ipsum expedita dicta quis doloremque optio tempora reiciendis placeat vitae consectetur libero, ratione nobis velit rem odio ea? Aut et laudantium dignissimos optio aspernatur iusto quidem in vero obcaecati tempora, reiciendis rerum quos quo sequi autem, hic consequuntur accusamus accusantium dolor necessitatibus veniam ipsam.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="border-b-1 border-gray-300 py-4">
          <div className="flex justify-between items-center-safe mb-3" >
            <h3 className="text-xl font-semibold">Details</h3>
            <SlArrowDown className={`size-4 cursor-pointer ${openDropDown == 1 && 'transform rotate-180'} transition-all duration-300`} data-dropdown-id="1" onClick={showProductDetailInfo} />
          </div>
          <div className={`${openDropDown !== "1" && 'hidden'}`} >
            <p className="md:w-[70%]">{product.description}</p>
          </div>
        </div>
        <div className="border-b-1 border-gray-300 py-4">
          <div className="flex justify-between items-center-safe mb-3" >
            <h3 className="text-xl font-semibold">Conservation and storage</h3>
            <SlArrowDown className={`size-4 cursor-pointer ${openDropDown == 2 && 'transform rotate-180'} transition-all duration-300`} data-dropdown-id="2" onClick={showProductDetailInfo} />
          </div>
          <div className={`${openDropDown !== "2" && 'hidden'}`}>
            <p className="md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum cumque modi nisi cupiditate soluta voluptatem, quas perspiciatis accusantium ipsam exercitationem expedita quidem ut veniam eius optio, tenetur nihil pariatur!</p>
          </div>
        </div>
        <div className=" py-4">
          <div className="flex justify-between items-center-safe mb-3" >
            <h3 className="text-xl font-semibold">Ingredients</h3>
            <SlArrowDown className={`size-4 cursor-pointer ${openDropDown == 3 && 'transform rotate-180'} transition-all duration-300`} data-dropdown-id="3" onClick={showProductDetailInfo} />
          </div>
          <div className={`${openDropDown !== "3" && 'hidden'}`} >
            <p className="md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum cumque modi nisi cupiditate soluta voluptatem, quas perspiciatis accusantium ipsam exercitationem expedita quidem ut veniam eius optio, tenetur nihil pariatur!</p>
          </div>
        </div>
      </section>


      <section className="mt-10 mb-18">
        <div className="w-full flex justify-between items-center mb-5">
          <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Recommendations</h3>
        </div>

        <section className="mt-2">
          <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />


          </div>
        </section>
      </section>
    </article>
  );
};

export default ProductPage;