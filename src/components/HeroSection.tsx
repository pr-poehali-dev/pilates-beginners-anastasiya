
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 md:py-40 lg:py-52 max-w-7xl">
        <div className="max-w-3xl animate-fade-in text-white">
          <h1 className="font-playfair text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Пилатес для начинающих <br className="hidden sm:inline" />
            <span className="text-primary-foreground">с Анастасией Воронковой</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Начните свой путь к идеальному телу с профессиональным 
            тренером. Индивидуальный подход к каждому клиенту и 
            программы для любого уровня подготовки.
          </p>

          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Записаться на занятие
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
