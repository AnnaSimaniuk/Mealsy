interface IIngredientItem {
  extra_comment: string;
  name: string;
  primary_unit: {
    quantity: string;
    display: string;
  };
  metric_unit: {
    quantity: string;
    display: string;
  };
}

interface IInstruction {
  display_text: string;
}

interface IIngredientSection {
  name: string;
  ingredients: IIngredientItem[];
}

export interface IIngredient {
  name: string;
  ingredient_sections: IIngredientSection[];
  instructions: IInstruction[];
}
