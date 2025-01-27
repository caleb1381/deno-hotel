import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Intro from "@/components/Intro";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* <Intro />
      <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
