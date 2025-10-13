import { HiOutlinePencilAlt } from "react-icons/hi";
const AccountAddressPage = () => {
  return (
    <article className="p-5">
            <div className="mb-5">
              <h1 className="text-3xl font-semibold">Account Details</h1>
            </div>
          
            <section className="w-full flex flex-col gap-5">
          
              <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                <div className="flex items-center-safe gap-4">
                  <div>
                    <input type="radio" name="address" className="size-5 accent-[#B6349A]"  />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">My Grandpa's House</p>
                    <p className="text-black/50 text-lg">3082 Westheimer Rd. Santa Ana, illinois 95579</p>
                  </div>
                </div>
                <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                  <HiOutlinePencilAlt className="size-7" />
                  <span className="hidden md:block">Edit</span>
                </div>
              </div>
          
              <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                <div className="flex items-center-safe gap-4">
                  <div>
                    <input type="radio" name="address" className="size-5 accent-[#B6349A]"  />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">My Grandpa's House</p>
                    <p className="text-black/50 text-lg">3082 Westheimer Rd. Santa Ana, illinois 95579</p>
                  </div>
                </div>
                <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                  <HiOutlinePencilAlt className="size-7" />
                  <span className="hidden md:block">Edit</span>
                </div>
              </div>
          
              <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                <div className="flex items-center-safe gap-4">
                  <div>
                    <input type="radio" name="address" className="size-5 accent-[#B6349A]"  />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">My Grandpa's House</p>
                    <p className="text-black/50 text-lg">3082 Westheimer Rd. Santa Ana, illinois 95579</p>
                  </div>
                </div>
                <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                  <HiOutlinePencilAlt className="size-7" />
                  <span className="hidden md:block">Edit</span>
                </div>
              </div>
            

             <div className="fixed bottom-5 left-3 right-3  md:static">
                  <button className="font-semibold md:text-[#B6349A]  text-xl  bg-[#B6349A] w-full py-3 text-white rounded-4xl md:bg-transparent md:w-auto">+ Add <span className="md:hidden">New</span> Address</button>
                </div>
            </section>
          </article>
  )
}

export default AccountAddressPage