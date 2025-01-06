import { Widget, PopupButton } from "@typeform/embed-react";

const GetStartedWidget = () => {
  return (
    <section className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-4 lg:py-[10px] xl:py-[20px] 2xl:py-[40px]">
      <Widget
        id="PtAggMKR"
        // style={{ width: "100%" }}
        className="w-[40%] h-[600px] rounded-2xl"
      />
    </section>
  );
};

export default GetStartedWidget;
