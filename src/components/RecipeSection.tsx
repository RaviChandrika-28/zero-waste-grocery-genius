
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed, Clock, ChefHat, ArrowRight } from 'lucide-react';
import { RecipeSuggestion } from '@/types';

// Mock recipe data
const mockRecipes: RecipeSuggestion[] = [
  {
    id: '1',
    title: 'Quick Veggie Stir Fry',
    ingredients: ['Bell Peppers', 'Carrots', 'Broccoli', 'Tofu', 'Soy Sauce'],
    instructions: 'Stir fry all vegetables in a pan. Add tofu and soy sauce. Cook for 5-7 minutes.',
    preparationTime: 15,
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Banana Oatmeal Smoothie',
    ingredients: ['Bananas', 'Oats', 'Milk', 'Honey', 'Cinnamon'],
    instructions: 'Blend all ingredients until smooth. Serve chilled.',
    preparationTime: 5,
    difficulty: 'easy'
  },
  {
    id: '3',
    title: 'Simple Avocado Toast',
    ingredients: ['Bread', 'Avocado', 'Lemon Juice', 'Salt', 'Pepper'],
    instructions: 'Toast bread. Mash avocado with lemon juice, salt, and pepper. Spread on toast.',
    preparationTime: 10,
    difficulty: 'easy'
  }
];

const RecipeSection = () => {
  const [recipes] = useState<RecipeSuggestion[]>(mockRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeSuggestion | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium flex items-center">
        <UtensilsCrossed className="h-5 w-5 mr-2 text-zw-green-500" />
        Recipe Suggestions
      </h2>
      
      {selectedRecipe ? (
        <Card className="p-6 shadow-soft">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-medium">{selectedRecipe.title}</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedRecipe(null)}
              className="text-zw-slate-500"
            >
              Back to recipes
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center text-zw-slate-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{selectedRecipe.preparationTime} min</span>
            </div>
            <Badge className="bg-zw-green-100 text-zw-green-800 hover:bg-zw-green-200 border-none">
              {selectedRecipe.difficulty}
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Ingredients</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Instructions</h4>
              <p className="text-zw-slate-700 dark:text-zw-slate-300">
                {selectedRecipe.instructions}
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Card 
              key={recipe.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-elevation cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="h-48 bg-gradient-to-br from-zw-green-50 to-zw-green-100 flex items-center justify-center">
                <ChefHat className="h-16 w-16 text-zw-green-300" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{recipe.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-zw-slate-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{recipe.preparationTime} min</span>
                  </div>
                  <Badge className="bg-zw-green-100 text-zw-green-800 hover:bg-zw-green-200 border-none">
                    {recipe.difficulty}
                  </Badge>
                </div>
                <div className="mt-3 text-sm text-zw-slate-500">
                  {recipe.ingredients.slice(0, 3).join(', ')}
                  {recipe.ingredients.length > 3 && '...'}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 p-0 h-auto text-zw-green-500"
                >
                  View Recipe <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeSection;
