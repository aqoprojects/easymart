import { HiOutlinePencilAlt } from "react-icons/hi";
import AccountAsideMenu from "./AccountAsideMenu";



const AccountPage = () =>
{
  return (
    
      <article className="p-5">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold">Account Details</h1>
        </div>
      
        <section className="w-full flex flex-col gap-5">
      
          <div className="flex justify-between ring-1 ring-black/10 rounded-2xl py-3 px-5">
            <div>
              <p className="font-semibold text-xl">Full Name</p>
              <p className="text-black/50 text-lg">Alicii Virgo</p>
            </div>
            <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
              <HiOutlinePencilAlt className="size-7" />
              <span className="hidden md:block">Edit</span>
            </div>
          </div>
      
          <div className="flex justify-between ring-1 ring-black/10 rounded-2xl py-3 px-5">
            <div>
              <p className="font-semibold text-xl">Phone Number</p>
              <p className="text-black/50 text-lg">+447xx3472043</p>
            </div>
            <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
              <HiOutlinePencilAlt className="size-7" />
              <span className="hidden md:block">Edit</span>
            </div>
          </div>
      
          <div className="flex justify-between ring-1 ring-black/10 rounded-2xl py-3 px-5">
            <div>
              <p className="font-semibold text-xl">Email</p>
              <p className="text-black/50 text-lg">github.com/aqoprojects</p>
            </div>
            <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
              <HiOutlinePencilAlt className="size-7" />
              <span className="hidden md:block">Edit</span>
            </div>
          </div>
      
        </section>
      </article>

  );
};

export default AccountPage;