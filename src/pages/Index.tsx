import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [downloadUrl] = useState("");

  const handleDownload = () => {
    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      alert("Пожалуйста, укажите ссылку на файл для скачивания в настройках");
    }
  };

  const newsItems = [
    {
      date: "8 Ноября 2024",
      title: "Обновление 2.0: Новая Эра",
      description: "Представляем масштабное обновление с новыми локациями, персонажами и улучшенной графикой"
    },
    {
      date: "1 Ноября 2024",
      title: "Хэллоуин Ивент",
      description: "Специальное событие с уникальными наградами и тематическими квестами"
    },
    {
      date: "25 Октября 2024",
      title: "Релиз версии 1.5",
      description: "Исправлены ошибки, улучшена производительность и добавлен новый контент"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Crown" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Majestic Development
            </h1>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#requirements" className="text-foreground/80 hover:text-primary transition-colors">
              Требования
            </a>
            <a href="#news" className="text-foreground/80 hover:text-primary transition-colors">
              Новости
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary animate-fade-in">
              <Icon name="Sparkles" size={16} />
              <span>Новая версия доступна</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Погрузись в мир
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Магии и Приключений
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Эпическое RPG приключение с потрясающей графикой, захватывающим сюжетом и динамичным геймплеем
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6 h-auto group"
            >
              <Icon name="Download" size={24} className="mr-2 group-hover:animate-pulse" />
              Скачать игру
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 h-auto"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Трейлер
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://cdn.poehali.dev/projects/fe79cbf9-e952-46cc-af20-3fe3f63ac4c4/files/feff0819-afdd-47b4-8914-0a808bb2c84c.jpg"
              alt="Game Screenshot"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Системные требования
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Icon name="Laptop" size={24} className="text-muted-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-muted-foreground">Минимальные</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ОС</p>
                    <p className="font-semibold">Windows 10 64-bit</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Процессор</p>
                    <p className="font-semibold">Intel Core i5-6600 / AMD Ryzen 3 1300X</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Память</p>
                    <p className="font-semibold">8 GB RAM</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Видеокарта</p>
                    <p className="font-semibold">NVIDIA GTX 1050 Ti / AMD RX 570</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Место на диске</p>
                    <p className="font-semibold">50 GB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary hover:border-secondary transition-all hover:shadow-xl hover:shadow-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Рекомендуемые</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ОС</p>
                    <p className="font-semibold">Windows 11 64-bit</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Процессор</p>
                    <p className="font-semibold">Intel Core i7-9700K / AMD Ryzen 5 5600X</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Память</p>
                    <p className="font-semibold">16 GB RAM</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Видеокарта</p>
                    <p className="font-semibold">NVIDIA RTX 3060 / AMD RX 6700 XT</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Место на диске</p>
                    <p className="font-semibold">50 GB SSD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Последние новости
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newsItems.map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">Читать далее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">Majestic Development</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Majestic Development. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
