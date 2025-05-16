
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const movements = [
  {
    title: "The Hundred",
    description: "Упражнение для разогрева, которое улучшает кровообращение и активирует мышцы кора. Лёжа на спине, ноги на весу, руки вытянуты вдоль тела, выполняются быстрые покачивания руками.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  },
  {
    title: "Roll Up",
    description: "Укрепляет мышцы живота и повышает гибкость позвоночника. Из положения лёжа на спине выполняется плавный подъём корпуса, скручивая позвоночник позвонок за позвонком.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  },
  {
    title: "Single Leg Circles",
    description: "Развивает подвижность тазобедренных суставов и стабилизирует таз. Лёжа на спине, одна нога выпрямлена и чертит круги в воздухе, не отрывая поясницу от пола.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  },
  {
    title: "Rolling Like a Ball",
    description: "Массирует позвоночник и улучшает баланс. Сидя с согнутыми коленями, тело скручивается в шар и перекатывается назад и вперёд, сохраняя контроль и не касаясь пола стопами.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  },
  {
    title: "Spine Stretch Forward",
    description: "Растягивает позвоночник и заднюю поверхность ног. Сидя с прямыми ногами, корпус наклоняется вперед, удлиняя позвоночник и растягивая всю заднюю поверхность тела.",
    image: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  },
  {
    title: "The Saw",
    description: "Улучшает подвижность плечевого пояса и растягивает спину. Сидя с широко расставленными ногами, выполняется скручивание и наклон к противоположной ноге.",
    image: "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
  }
];

const PilatesMovements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-background/90 dark:to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold font-playfair md:text-4xl">Основные движения пилатеса</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Методика пилатеса включает более 500 упражнений, но всё начинается с освоения базовых движений.
            Познакомьтесь с ключевыми упражнениями, которые станут основой вашей практики.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {movements.map((movement, index) => (
            <Card key={index} className="overflow-hidden border border-border/40 shadow-sm transition-all duration-300 bg-white/80 dark:bg-card/60 backdrop-blur-sm hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={movement.image} 
                  alt={movement.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{movement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {movement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            На групповых и индивидуальных занятиях с Анастасией вы освоите эти и многие другие упражнения,
            адаптированные под ваш уровень подготовки и особенности тела.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PilatesMovements;
