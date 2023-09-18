"use client";

import Layout from "@/components/shared/layout/Layout/Layout";
import ConstructorForm from "@/components/shared/constructor/constructor-form/ConstructorForm";
import ActionButtons from "@/components/shared/constructor/ActionButtons";
import ConstructorProvider from "@/components/context/ConstructorContext";
import ConstructorList from "@/components/shared/constructor/ConstructorList";

const Constructor = () => {
  return (
    <ConstructorProvider>
      <Layout className="bg-white p-5 lg:p-7 mt-12 shadow text-dark mb-12 lg:mb-36 rounded-lg">
        <h2 className="font-bold text-2xl lg:text-4xl pb-6 lg:pb-7">
          Recipe Builder
        </h2>
        <p className="text-base lg:text-xl pb-14">
          Choose the products that are in your refrigerator. "Recipe Builder"
          will select recipes based on your ingredients. The maximum number of
          products is 7.
        </p>
        <ConstructorForm />
        <ActionButtons />
      </Layout>
      <ConstructorList />
    </ConstructorProvider>
  );
};

export default Constructor;
