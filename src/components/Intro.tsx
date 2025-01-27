import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="intro">
      <div className="contain">
        <div className="flex gap-5">
          <div className="flex gap-1">
            <Image
              src="/images/icons/phone.svg"
              alt=""
              width={18}
              height={18}
            />
            <p>08140317561 , 08065508406</p>
          </div>
          <div>
            <Link href="mailto:denohotels@gmail.com" className="flex gap-1">
              <Image
                src="/images/icons/mail.svg"
                alt=""
                width={18}
                height={18}
              />
              <p>denohotels@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className=" socials">
          <Link
            href="https://www.facebook.com/reel/674203408170667/?mibextid=cr9u03"
            target="_blank"
          >
            <Image
              src="/images/icons/facebook.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://twitter.com/DenoHotels77851" target="_blank">
            <Image
              src="/images/icons/twitter.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="https://instagram.com/denohotels?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
          >
            <Image
              src="/images/icons/instagram.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
