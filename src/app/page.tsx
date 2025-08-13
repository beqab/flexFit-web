import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MobileNav } from '@/components/ui/mobile-nav'
import { 
  Activity, 
  CreditCard, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Infinity,
  FileX2,
  Smartphone,
  QrCode,
  Trophy
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold text-gray-900">FlexFit</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">მთავარი</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">აქტივობები</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">ფასები</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">ჩვენს შესახებ</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">კონტაქტი</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                შესვლა
              </Button>
              <Button size="sm">
                რეგისტრაცია
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ერთი აპლიკაცია.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              უსაზღვრო აქტივობები.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">მიიღეთ წვდომა ყველა სახის ფიტენს და გამაჯანსაღებელ აქტივობაზე</span> და ისარგებლე <span className="font-semibold text-yellow-200">30% ამდე ფასდაკლებით</span>. გამოიყენეთ თქვენი კრედიტები ნებისმიერ ადგილზე, ნებისმიერ დროს.
            <span className="block mt-2 font-bold text-2xl text-orange-300">130+ ლოკაცია • 78+ აქტივობა და მეტი</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              დაიწყეთ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              გაიგეთ მეტი
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              რატომ აირჩიეთ FlexFit?
            </h2>
          
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Infinity className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">ლიმიტების გარეშე გამოყენება</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  დახარჯეთ თქვენი წევრობის კრედიტები ნებისმიერ პარტნიორ ობიექტზე. სპორტდარბაზებიდან 
                  აუზებამდე, იოგის სტუდიებიდან მასაჟის და თავის მოვლის პროცედურებით დამთვრებული - თქვენი კრედიტები მუშაობს ყველგან.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">ფართო არჩევანი და ფასდაკლება</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  იარგებლე 130  ზე მეტი პარტნიორ ობიექტიდან. სხვადასხვა აქტივობები განსხვავებული ღირებულებით, ისარგებლე 30% ამდე ფასდაკლებით.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileX2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">შენ საჭიროებაზე მორგებული</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                შეიძინეთ თვენთვის სასურველი კრედიტების რაოდენობა და ისარგებლე პარტნიორ ობიექტებზე, გამოიყენე როცა მოისურვებ. დაიმატე კრედიტები ნებისმიერ დროს.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              როგორ მუშაობს Flexfit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             ერთი აპლიკაცია ულიმიტო აქტივობა.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">1</div>
                <CardTitle className="text-xl text-blue-600">დარეგისტრირდი და შეიძინე წევრობა</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  შექმენი პროფილი Flexfit აპში და აირჩიე შენთვის შესაფერისი წევრობის პაკეტი. თითოეული პაკეტი მოიცავს კრედიტებს, რომლითაც ისარგებლებ სხვადასხვა აქტივობებზე.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">2</div>
                <CardTitle className="text-xl text-blue-600">აირჩიე აქტივობა და ადგილი</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  აპში იხილავ პარტნიორ სპორტულ დარბაზებს, საცურაო აუზებს, ფიტნეს სტუდიებს და სხვა აქტივობებს.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">3</div>
                <CardTitle className="text-xl text-blue-600">მიიღე წვდომა QR კოდით</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ადგილზე მისვლისას დაასკაკნერეთ QR კოდი ან გადაიხადეთ აპლიკაციიდან  და მიიღე წვდომა აქტივობაზე. კრედიტები ავტომატურად ჩამოგეჭრება.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">4</div>
                <CardTitle className="text-xl text-blue-600">ისიამოვნე მრავალფეროვნებით</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ერთი წევრობით შეგიძლია გაერთიანდე სხვადასხვა სპორტულ გამაჯანსაღებელ და თავის მოვლის სივრცეებში, მრავალი აბონემენტის ყიდვის გარეშე და  ფასდაკლებებიც კი მიიღო.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              აირჩიეთ თქვენი პაკეტი
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              დაიწყეთ პაკეტით, რომელიც შეესაბამება თქვენს ფიტნეს მიზნებს და დაიმატეთ კრედიტები ნებისმიერ დროს.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">დამწყები</CardTitle>
                <div className="text-4xl font-bold text-gray-900">65 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">120 კრედიტი </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 150+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                   76+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30% მდე ფასდაკლება
                  </div>
                </div>
                <Button className="w-full mt-6">აირჩიეთ პლანი</Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="relative border-2 border-blue-500 shadow-xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 whitespace-nowrap text-white px-4 py-1 rounded-full text-sm font-medium">
                  ყველაზე პოპულარული
                </span>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">სტანდარტული</CardTitle>
                <div className="text-4xl font-bold text-gray-900">85ლ<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">200 კრედიტი</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 150+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                   76+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30% მდე ფასდაკლება
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">აირჩიეთ პლანი</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">პრემიუმ</CardTitle>
                <div className="text-4xl font-bold text-gray-900">135 ლ<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">430 კრედიტი</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 150+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                   76+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30% მდე ფასდაკლება
                  </div>
                </div>
                <Button className="w-full mt-6">აირჩიეთ პლანი</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              რას ამბობენ ჩვენი წევრები
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              შემოუერთდით ათასობით კმაყოფილ წევრს, ვინც შეცვალა თავისი ფიტნეს მოგზაურობა.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  FlexFit-მა მთლიანად შეცვალა ჩემი ფიტნესისადმი მიდგომა. შემიძლია დილით 
                  საცურაო აუზში მივიდე, ხოლო საღამოს იოგის კლასზე ამრავალი წევრობის გარეშე.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">სარა ჯონსონი</div>
                    <div className="text-sm text-gray-500">წევრი 2023 წლიდან</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  კრედიტების სისტემა ბრწყინვალეა! შემიძლია მეტი დავხარჯო ძვირ აქტივობებზე, 
                  როგორიცაა ქვის ცურვა და ნაკლები ძირითად სპორტდარბაზის სესიებზე. სრული მოქნილობა.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">მაიკ ჩენი</div>
                    <div className="text-sm text-gray-500">წევრი 2022 წლიდან</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  მიყვარს როდესაც ვხედავ, როდის რეგისტრდებიან ჩემი მეგობრები! ეს მამოტივირებს 
                  აქტიური ვიყო და ახალი ადგილები ვცადო. სოციალური ასპექტი ფიტნესს მხიარულსა და მიმზიდველს ხდის.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">ემა დეივისი</div>
                    <div className="text-sm text-gray-500">წევრი 2024 წლიდან</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
                <span className="text-xl font-bold">FlexFit</span>
              </div>
              <p className="text-gray-400 text-sm">
                ერთი წევრობა უსაზღვრო ფიტნეს შესაძლებლობებისთვის. შემოუერთდით მოძრაობას დღესვე.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">სწრაფი ლინკები</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">მთავარი</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">აქტივობები</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ფასები</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ჩვენს შესახებ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">კონტაქტი</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">მხარდაჭერა</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">დახმარების ცენტრი</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ხშირად დასმული კითხვები</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">მხარდაჭერის კონტაქტი</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">მომსახურების პირობები</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">კონფიდენციალურობის პოლიტიკა</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">კონტაქტი</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@flexfit.com
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 FlexFit. ყველა უფლება დაცულია.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
