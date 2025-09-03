import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'intro',
      title: 'Стероиды: Медицинская информация',
      subtitle: 'Комплексный обзор применения и рисков',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-coral to-teal rounded-full flex items-center justify-center mb-4">
              <Icon name="Activity" size={40} className="text-white" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Стероиды — это обширная группа биологически активных веществ, играющих важную роль в медицине и физиологии человека.
            </p>
          </div>
          <Alert className="border-warning bg-warning/10">
            <Icon name="AlertTriangle" className="h-4 w-4 text-warning" />
            <AlertTitle>Важно знать</AlertTitle>
            <AlertDescription>
              Данная презентация носит исключительно информационный характер. Консультируйтесь с врачом перед применением.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      id: 'types',
      title: 'Типы стероидов',
      subtitle: 'Классификация и основные группы',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-teal">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-teal">
                <Icon name="Heart" size={20} />
                Кортикостероиды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Гормоны коры надпочечников</p>
              <div className="space-y-2">
                <Badge variant="outline">Преднизолон</Badge>
                <Badge variant="outline">Гидрокортизон</Badge>
                <Badge variant="outline">Дексаметазон</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-coral">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-coral">
                <Icon name="Zap" size={20} />
                Анаболические стероиды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Синтетические производные тестостерона</p>
              <div className="space-y-2">
                <Badge variant="outline">Тестостерон</Badge>
                <Badge variant="outline">Станозолол</Badge>
                <Badge variant="outline">Оксандролон</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-darkBlue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-darkBlue">
                <Icon name="Users" size={20} />
                Половые стероиды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Регулируют репродуктивные функции</p>
              <div className="space-y-2">
                <Badge variant="outline">Эстроген</Badge>
                <Badge variant="outline">Прогестерон</Badge>
                <Badge variant="outline">Андрогены</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-warning">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <Icon name="Droplet" size={20} />
                Минералокортикоиды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Регулируют водно-солевой баланс</p>
              <div className="space-y-2">
                <Badge variant="outline">Альдостерон</Badge>
                <Badge variant="outline">Флудрокортизон</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'medical',
      title: 'Медицинское применение',
      subtitle: 'Терапевтические показания и дозировки',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Icon name="Stethoscope" size={16} />
                  Воспалительные заболевания
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1 text-gray-600">
                  <li>• Артрит</li>
                  <li>• Астма</li>
                  <li>• Аллергии</li>
                  <li>• Экзема</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Icon name="Brain" size={16} />
                  Аутоиммунные состояния
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1 text-gray-600">
                  <li>• Рассеянный склероз</li>
                  <li>• Системная красная волчанка</li>
                  <li>• Болезнь Крона</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Трансплантология
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-1 text-gray-600">
                  <li>• Подавление иммунитета</li>
                  <li>• Профилактика отторжения</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-darkBlue bg-darkBlue/10">
            <Icon name="Info" className="h-4 w-4 text-darkBlue" />
            <AlertTitle>Принципы терапии</AlertTitle>
            <AlertDescription>
              Стероидная терапия должна проводиться под строгим врачебным контролем с регулярным мониторингом состояния пациента.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      id: 'sideeffects',
      title: 'Побочные эффекты',
      subtitle: 'Риски и осложнения при применении',
      content: (
        <div className="space-y-6">
          <Alert className="border-danger bg-danger/10">
            <Icon name="AlertCircle" className="h-4 w-4 text-danger" />
            <AlertTitle className="text-danger">Критическое предупреждение</AlertTitle>
            <AlertDescription>
              Неконтролируемое применение стероидов может привести к серьезным осложнениям и необратимым изменениям в организме.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-danger">
              <CardHeader>
                <CardTitle className="text-danger flex items-center gap-2">
                  <Icon name="Heart" size={20} />
                  Сердечно-сосудистые
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="ArrowUp" size={12} className="text-danger" />
                    Повышение артериального давления
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Heart" size={12} className="text-danger" />
                    Увеличение риска инфаркта
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Activity" size={12} className="text-danger" />
                    Нарушения ритма сердца
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-warning">
              <CardHeader>
                <CardTitle className="text-warning flex items-center gap-2">
                  <Icon name="User" size={20} />
                  Психические нарушения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Brain" size={12} className="text-warning" />
                    Агрессивность и раздражительность
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="TrendingDown" size={12} className="text-warning" />
                    Депрессия и тревожность
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Zap" size={12} className="text-warning" />
                    Мания и психоз
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-coral">
              <CardHeader>
                <CardTitle className="text-coral flex items-center gap-2">
                  <Icon name="Shuffle" size={20} />
                  Гормональные сбои
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="X" size={12} className="text-coral" />
                    Подавление выработки тестостерона
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="AlertTriangle" size={12} className="text-coral" />
                    Нарушение менструального цикла
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={12} className="text-coral" />
                    Снижение либидо
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal">
              <CardHeader>
                <CardTitle className="text-teal flex items-center gap-2">
                  <Icon name="Bone" size={20} />
                  Физические изменения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="TrendingDown" size={12} className="text-teal" />
                    Остеопороз и хрупкость костей
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Eye" size={12} className="text-teal" />
                    Акне и проблемы с кожей
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="ArrowDown" size={12} className="text-teal" />
                    Задержка роста у подростков
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-danger bg-danger/10">
            <Icon name="Skull" className="h-4 w-4 text-danger" />
            <AlertTitle className="text-danger">Особая опасность</AlertTitle>
            <AlertDescription>
              Длительное применение анаболических стероидов может привести к необратимому повреждению печени, почек и сердца.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Заключение',
      subtitle: 'Выводы и рекомендации',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal to-darkBlue rounded-full flex items-center justify-center mb-4">
              <Icon name="CheckCircle" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Ключевые выводы</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-teal">
              <CardHeader>
                <CardTitle className="text-teal flex items-center gap-2">
                  <Icon name="ThumbsUp" size={20} />
                  Медицинская польза
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">Стероиды играют важную роль в лечении серьезных заболеваний</p>
                <p className="text-sm">При правильном применении под медицинским контролем - эффективны и безопасны</p>
                <p className="text-sm">Спасают жизни при критических состояниях</p>
              </CardContent>
            </Card>

            <Card className="border-danger">
              <CardHeader>
                <CardTitle className="text-danger flex items-center gap-2">
                  <Icon name="AlertTriangle" size={20} />
                  Риски злоупотребления
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">Самолечение крайне опасно</p>
                <p className="text-sm">Спортивное применение несет серьезные риски</p>
                <p className="text-sm">Многие побочные эффекты необратимы</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-coral/10 to-teal/10 p-6 rounded-lg border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" size={20} className="text-coral" />
              Финальные рекомендации
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-teal flex-shrink-0" />
                Всегда консультируйтесь с квалифицированным врачом
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-teal flex-shrink-0" />
                Строго соблюдайте назначенные дозировки и схемы
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-teal flex-shrink-0" />
                Регулярно проходите медицинские обследования
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-teal flex-shrink-0" />
                Изучайте достоверные медицинские источники
              </li>
            </ul>
          </div>

          <Alert className="border-darkBlue bg-darkBlue/10">
            <Icon name="BookOpen" className="h-4 w-4 text-darkBlue" />
            <AlertTitle>Дополнительная информация</AlertTitle>
            <AlertDescription>
              Для получения персональных рекомендаций обратитесь к эндокринологу, спортивному врачу или терапевту.
            </AlertDescription>
          </Alert>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Стероиды</h1>
                <p className="text-sm text-gray-500">Медицинская презентация</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {currentSlide + 1} из {slides.length}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 py-3 overflow-x-auto">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  currentSlide === index
                    ? 'bg-coral text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div key={currentSlide} className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg text-gray-600">
              {slides[currentSlide].subtitle}
            </p>
            <Separator className="mx-auto mt-4 w-24" />
          </div>

          <div className="mb-8">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12">
          <Button 
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-coral w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-coral hover:bg-coral/90"
          >
            Далее
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>Данная презентация носит информационный характер. Консультируйтесь с врачом.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;