import AddIngredients from "@/components/shared/constructor/constructor-form/AddIngredients";
import AdditionalIngredients from "@/components/shared/constructor/constructor-form/AdditionalIngredients";
import TimeCooking from "@/components/shared/constructor/constructor-form/TimeCooking";
import ExcludeIngredients from "@/components/shared/constructor/constructor-form/ExcludeIngredients";

const ConstructorForm = async () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-col text-sm lg:text-xl min-w-[250px] lg:min-w-[444px] gap-y-14">
        <AddIngredients />
        <AdditionalIngredients />
      </div>
      <div className="flex flex-col text-sm lg:text-xl gap-y-14 w-full">
        <TimeCooking />
        <ExcludeIngredients />
      </div>
    </div>
  );
};

export default ConstructorForm;
