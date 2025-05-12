
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Сбросить состояние формы через некоторое время
      setTimeout(() => setIsSubmitted(false), 5000);
      
      // Очистить форму
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-50/30 dark:from-background dark:to-background/90">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h2 className="text-3xl font-bold font-playfair md:text-4xl mb-4">Запишитесь на занятие</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Оставьте свои контактные данные, и мы свяжемся с вами для подбора 
            оптимальной программы тренировок.
          </p>
          
          <Card className="border shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Контактная форма</CardTitle>
              <CardDescription>
                Заполните поля ниже, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Спасибо за интерес к нашим занятиям. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Иван Иванов" 
                        required 
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Электронная почта</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="example@email.com" 
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+7 (XXX) XXX-XX-XX" 
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение (необязательно)</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Расскажите о своих целях, опыте или задайте вопрос..."
                      className="min-h-[120px]"
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
