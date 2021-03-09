import BenefitCard from "./BenefitCard";

const BenefitCardContainer = () => (
  <div className="mt-24 lg:my-2 flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
    <BenefitCard
      title="First main benefit of your product"
      subTitle="Brief explanation of why and how this benefit will help your customers"
      imageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-music.png"
    />
    <BenefitCard
      title="Second main benefit of your product"
      subTitle="Brief explanation of why and how this benefit will help your customers"
      imageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-task.png"
    />

    <BenefitCard
      title="Third main benefit of your product"
      subTitle="Brief explanation of why and how this benefit will help your customers"
      imageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-coffee.png"
    />
  </div>
);

export default BenefitCardContainer;
