import Image from "next/image";
import Link from "next/link";

function Header() {
  const user = true;
  return (
    <header className="sticky flex justify-between max-w-7xl mx-auto px-5 py-2">
      <div className="md:flex lg:flex items-center space-x-5">
        <Link href="/">
          <Image
            className="w-44 object-contain cursor-pointer"
            src="/../public/assets/blog-new.png"
            width="200"
            height="200"
            alt=""
          />
        </Link>
        <div
          className={
            user
              ? "uppercase inline-flex items-center space-x-5 md:inline-flex lg:inline-flex"
              : "hidden"
          }
        >
          <h3>About</h3>
          <h3>Contact</h3>
          {/* <Link href="/write">
            <h3>Write</h3>
          </Link> */}
        </div>
      </div>
      <div className="uppercase flex items-center space-x-5">
        {user ? (
          <>
            {/* <Link href="/settings"> */}
            <Image
              className="w-16 h-16 rounded-full object-contain cursor-pointer"
              src="/../public/assets/bitmoji-3.png"
              width="200"
              height="200"
              alt=""
            />
            {/* </Link> */}
            <h3 className="text-[#f08080] border px-4 py-1 rounded-full border-[#f08080] hover:bg-[#f08080] hover:text-white hover:opacity-60">
              Logout
            </h3>
          </>
        ) : (
          <div className="inline-flex items-center space-x-5 text-[#f08080]">
            <Link href="/login">
              <h3 className="text-black px-4 py-1 border-[#f08080] hover:opacity-60">
                Login
              </h3>
            </Link>
            <Link href="/register">
              <h3 className="text-[#f08080] border px-4 py-1 rounded-full border-[#f08080] hover:bg-[#f08080] hover:text-white hover:opacity-60">
                Register
              </h3>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
