import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const downloadUrl = "https://drive.google.com/file/d/1yRaTYCND9vQFP7Wy9DJDi30ZE0z0sfl5/view?usp=sharing";
  const [showTrailer, setShowTrailer] = useState(false);
  const [onlinePlayers] = useState(12847);

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleTrailer = () => {
    setShowTrailer(true);
  };

  const newsItems = [
    {
      date: "8 Ноября 2024",
      title: "GTA Online: Новое DLC",
      description: "Встречайте новое обновление с эксклюзивным контентом, транспортом и миссиями",
      image: "https://cdn.poehali.dev/projects/fe79cbf9-e952-46cc-af20-3fe3f63ac4c4/files/96fd4445-02a7-404f-89d8-f39af160f22c.jpg"
    },
    {
      date: "1 Ноября 2024",
      title: "Ограбление века",
      description: "Новый режим ограблений с повышенными наградами и уникальными челленджами",
      image: "https://cdn.poehali.dev/projects/fe79cbf9-e952-46cc-af20-3fe3f63ac4c4/files/3db1234b-eb7e-4188-8aa5-d95d5127fc49.jpg"
    },
    {
      date: "25 Октября 2024",
      title: "Обновление графики",
      description: "Улучшенная графика, оптимизация производительности и исправление багов",
      image: "https://cdn.poehali.dev/projects/fe79cbf9-e952-46cc-af20-3fe3f63ac4c4/files/3f231be9-4a5c-4640-a862-8c5a252aff26.jpg"
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
          <div className="flex items-center gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#requirements" className="text-foreground/80 hover:text-primary transition-colors">
              Требования
            </a>
            <a href="#news" className="text-foreground/80 hover:text-primary transition-colors">
              Новости
            </a>
            <a href="https://forum.majestic-rp.ru/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
              Форум
            </a>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">{onlinePlayers.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">онлайн</span>
            </div>
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
            <span className="text-primary">Majestic</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Los Santos ждёт тебя
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Окунись в мир РП
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Серверов</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-secondary mb-1">200K+</div>
              <div className="text-sm text-muted-foreground">Игроков</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Фракций</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>

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
              onClick={handleTrailer}
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 h-auto"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Трейлер
            </Button>
          </div>

          {showTrailer ? (
            <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/iWlTc9S_Gik?autoplay=1"
                  title="GTA 5 Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button 
                onClick={() => setShowTrailer(false)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full p-2 z-10"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
          ) : (
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/fe79cbf9-e952-46cc-af20-3fe3f63ac4c4/files/96fd4445-02a7-404f-89d8-f39af160f22c.jpg"
                alt="GTA 5 Screenshot"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Особенности сервера
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Реалистичная РП система</h4>
                <p className="text-muted-foreground">
                  Глубокая ролевая игра с уникальными фракциями, бизнесами и возможностью построить свою карьеру от простого гражданина до влиятельного магната
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Огромный автопарк</h4>
                <p className="text-muted-foreground">
                  Более 500+ уникальных автомобилей с возможностью тюнинга. От бюджетных седанов до эксклюзивных суперкаров и мотоциклов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">Недвижимость</h4>
                <p className="text-muted-foreground">
                  Покупайте дома, квартиры и бизнесы. Создавайте свою империю недвижимости и получайте пассивный доход в игровом мире
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Фракции</h4>
                <p className="text-muted-foreground">
                  Полиция, EMS, мафия, банды и легальные организации. Выберите свой путь и станьте частью увлекательной истории
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Работы и бизнесы</h4>
                <p className="text-muted-foreground">
                  Устройтесь на одну из 30+ работ или откройте свой бизнес. Таксист, механик, фермер - выбор за вами
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" size={24} className="text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">Активности</h4>
                <p className="text-muted-foreground">
                  Квесты, ивенты, гонки, казино и многое другое. Скучать не придется - каждый день новые приключения
                </p>
              </CardContent>
            </Card>
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
                className="bg-card border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
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