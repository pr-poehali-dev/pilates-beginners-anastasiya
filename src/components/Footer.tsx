
import React from "react";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold font-playfair mb-4">Пилатес с Анастасией</h3>
            <p className="text-muted-foreground max-w-sm">
              Персональные и групповые занятия пилатесом для начинающих и продолжающих.
              Индивидуальный подход к каждому клиенту.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">О пилатесе</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Расписание</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">г. Москва, ул. Пилатесная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">info@pilates-studio.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Пилатес с Анастасией Воронковой. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
