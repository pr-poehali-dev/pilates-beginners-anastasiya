import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TrainerSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Анастасия Воронкова"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/4" }}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <Badge className="bg-primary hover:bg-primary/90">
                Сертифицированный тренер
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/80 text-black hover:bg-white"
              >
                2+ лет опыта
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-3xl font-bold font-playfair md:text-4xl mb-6">
              Познакомьтесь с вашим тренером
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Анастасия Воронкова</strong>{" "}
                — сертифицированный инструктор по пилатесу с более чем 2-летним
                опытом. Её путь в пилатесе начался из-за личных проблем со
                здоровьем: сколиоза и остеохондроза, когда традиционные методы
                лечения не давали нужного результата.
              </p>

              <p>
                После прохождения обучения в профессиональных школах пилатеса,
                Анастасия разработала собственный подход, который объединяет
                классические принципы пилатеса с современными знаниями о
                биомеханике тела.
              </p>

              <p>
                Её клиенты — это люди разного возраста и уровня подготовки: от
                профессиональных спортсменов до людей, имеющих проблемы с
                позвоночником (сколиоз, остеохондроз), и тех, кто просто хочет
                укрепить мышечный корсет и иметь красивое, стройное тело.
              </p>

              <blockquote className="pl-4 border-l-4 border-primary italic my-6">
                "Пилатес — это не просто упражнения, это философия движения,
                которая меняет ваше тело и сознание. Я на собственном опыте
                знаю, как пилатес может помочь при проблемах с позвоночником, и
                помогу вам обрести гармонию с собственным телом."
              </blockquote>
            </div>

            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary/90">
                Записаться на персональную тренировку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
