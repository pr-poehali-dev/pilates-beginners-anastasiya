
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    title: "Развитие гибкости",
    description: "Регулярные занятия помогают увеличить диапазон движений и повысить эластичность мышц.",
    icon: "Dumbbell"
  },
  {
    title: "Улучшение осанки",
    description: "Укрепление глубоких мышц спины и корпуса способствует формированию красивой осанки.",
    icon: "Activity"
  },
  {
    title: "Снижение стресса",
    description: "Сосредоточенность на дыхании и движении помогает снять нервное напряжение и улучшить сон.",
    icon: "Sparkles"
  },
  {
    title: "Восстановление после травм",
    description: "Мягкие, контролируемые движения делают пилатес идеальным для реабилитации.",
    icon: "Heart"
  },
  {
    title: "Укрепление мышц кора",
    description: "Проработка глубоких мышц живота, спины и таза создаёт сильный и стабильный центр тела.",
    icon: "FlameKindling"
  },
  {
    title: "Доступность для всех",
    description: "Программы пилатеса адаптируются под любой возраст и уровень физической подготовки.",
    icon: "Users"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-background/90">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold font-playfair md:text-4xl">Преимущества пилатеса</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Пилатес — это больше, чем просто упражнения. Это целостный подход к здоровью тела и разума, 
            который изменит вашу жизнь к лучшему.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border/40 shadow-sm hover-scale transition-all duration-300 bg-white/80 dark:bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon name={benefit.icon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
