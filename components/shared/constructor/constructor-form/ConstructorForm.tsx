import AddIngredients from "@/components/shared/constructor/constructor-form/AddIngredients";
import AdditionalIngredients from "@/components/shared/constructor/constructor-form/AdditionalIngredients";
import TimeCooking from "@/components/shared/constructor/constructor-form/TimeCooking";
import ExcludeIngredients from "@/components/shared/constructor/constructor-form/ExcludeIngredients";

const ConstructorForm = async () => {
  return (
    <div className="flex gap-x-8">
      <div className="flex flex-col text-xl min-w-[444px] gap-y-14">
        <AddIngredients />
        <AdditionalIngredients />
      </div>
      <div className="flex flex-col text-xl gap-y-14 w-full">
        <TimeCooking />
        <ExcludeIngredients />
      </div>
    </div>
  );
};

export default ConstructorForm;
