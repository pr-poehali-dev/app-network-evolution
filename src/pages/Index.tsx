import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [caloriesConsumed] = useState(1850);
  const caloriesGoal = 2200;
  const caloriesPercent = (caloriesConsumed / caloriesGoal) * 100;

  const sleepData = [
    { day: "Пн", hours: 7.5, quality: 85 },
    { day: "Вт", hours: 6.2, quality: 65 },
    { day: "Ср", hours: 8.0, quality: 92 },
    { day: "Чт", hours: 7.8, quality: 88 },
    { day: "Пт", hours: 6.5, quality: 70 },
    { day: "Сб", hours: 9.0, quality: 95 },
    { day: "Вс", hours: 8.5, quality: 90 },
  ];

  const socialLinks = [
    { name: "Telegram", icon: "Send", url: "#", color: "from-blue-500 to-cyan-400" },
    { name: "Instagram", icon: "Instagram", url: "#", color: "from-purple-500 to-pink-500" },
    { name: "LinkedIn", icon: "Linkedin", url: "#", color: "from-blue-600 to-blue-400" },
    { name: "GitHub", icon: "Github", url: "#", color: "from-gray-700 to-gray-900" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            LifeBoost
          </h1>
          <p className="text-muted-foreground text-lg">
            Твой путь к успеху начинается здесь
          </p>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 animate-scale-in backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Avatar className="w-32 h-32 ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary">АН</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Алексей Новиков
            </CardTitle>
            <CardDescription className="text-base">
              Product Manager | Спортсмен | Ментор
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity">
                🎯 Карьера
              </Badge>
              <Badge className="bg-gradient-to-r from-secondary to-accent hover:opacity-80 transition-opacity">
                💪 Фитнес
              </Badge>
              <Badge className="bg-gradient-to-r from-accent to-primary hover:opacity-80 transition-opacity">
                🧘 Здоровье
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative overflow-hidden rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative flex flex-col items-center space-y-2">
                    <Icon name={link.icon as any} className="w-6 h-6" />
                    <span className="text-xs font-medium">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg">
              <Icon name="Share2" className="mr-2" />
              Поделиться контактами
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="nutrition" className="w-full animate-slide-up">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary">
              <Icon name="Apple" className="mr-2 w-4 h-4" />
              Питание
            </TabsTrigger>
            <TabsTrigger value="sleep" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent">
              <Icon name="Moon" className="mr-2 w-4 h-4" />
              Сон
            </TabsTrigger>
            <TabsTrigger value="premium" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-primary">
              <Icon name="Crown" className="mr-2 w-4 h-4" />
              Premium
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nutrition" className="space-y-4 mt-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="w-6 h-6 text-primary" />
                  Калории за сегодня
                </CardTitle>
                <CardDescription>
                  {caloriesConsumed} из {caloriesGoal} ккал
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Progress value={caloriesPercent} className="h-3" />
                  <p className="text-sm text-muted-foreground text-right">
                    Осталось {caloriesGoal - caloriesConsumed} ккал
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center space-y-1 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                    <p className="text-2xl font-bold text-primary">85г</p>
                    <p className="text-xs text-muted-foreground">Белки</p>
                  </div>
                  <div className="text-center space-y-1 p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <p className="text-2xl font-bold text-secondary">200г</p>
                    <p className="text-xs text-muted-foreground">Углеводы</p>
                  </div>
                  <div className="text-center space-y-1 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
                    <p className="text-2xl font-bold text-accent">65г</p>
                    <p className="text-xs text-muted-foreground">Жиры</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-4 mt-6">
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" className="w-6 h-6 text-secondary" />
                  Качество сна за неделю
                </CardTitle>
                <CardDescription>Средняя оценка: 83%</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sleepData.map((day) => (
                    <div key={day.day} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{day.day}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">
                            {day.hours}ч
                          </span>
                          <Badge
                            variant="outline"
                            className={`${
                              day.quality >= 85
                                ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30"
                                : day.quality >= 70
                                ? "bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-yellow-500/30"
                                : "bg-gradient-to-r from-red-500/10 to-rose-500/10 border-red-500/30"
                            }`}
                          >
                            {day.quality}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={day.quality} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="premium" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" className="w-6 h-6" />
                    Бесплатный
                  </CardTitle>
                  <CardDescription>Базовые функции</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">
                    0₽<span className="text-lg text-muted-foreground">/мес</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Трекер питания",
                      "Монитор сна",
                      "Базовая визитка",
                      "3 соцсети",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Icon name="Check" className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Текущий план
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-950">
                    <Icon name="Crown" className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    <Icon name="Sparkles" className="w-6 h-6 text-primary" />
                    Premium
                  </CardTitle>
                  <CardDescription>Полный доступ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    499₽<span className="text-lg text-muted-foreground">/мес</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Все бесплатные функции",
                      "Неограниченные соцсети",
                      "VPN интеграция",
                      "Интеграция с мессенджерами",
                      "AI рекомендации",
                      "Продвинутая аналитика",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Icon name="Check" className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-semibold">
                    <Icon name="Rocket" className="mr-2 w-4 h-4" />
                    Перейти на Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
