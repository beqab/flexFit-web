
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    ArrowRight,
    CreditCard,
    Infinity,
    Percent,
    QrCode,
    Settings,
    Smartphone,
    Trophy
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32" style={{
        backgroundImage: "url('/images/mapImage.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 opacity-80"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
         მალე
           
          </h1> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ერთი აპლიკაცია.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              უსაზღვრო აქტივობები.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#fff] mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">მიიღეთ წვდომა ყველა სახის ფიტნეს და გამაჯანსაღებელ აქტივობაზე</span> და ისარგებლეთ <span className="font-semibold text-yellow-200"> ფასდაკლებით</span>. 
            {/* გამოიყენეთ თქვენი კრედიტები ნებისმიერ ადგილზე, ნებისმიერ დროს. */}
            <span className="block mt-2 font-bold text-2xl text-orange-300">134+ ლოკაცია • 48+ აქტივობა </span>
          </p>
          <p className="text-xl sm:text-2xl text-[#fff] mb-8 max-w-3xl mx-auto">
          <span className="text-yellow-300  text-2xl">   უფასო საწევროს მიიღებს მხოლოდ პირველი 500 მომხმარებელი </span> — შეუერთდი ახლა და არ გაუშვა შანსი!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <Link 
              href="https://tally.so/r/n9kQdK"
              target="_blank"
              className="bg-gradient-to-r whitespace-nowrap flex items-center justify-center rounded-full from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              მიიღე ერთვიანი უფასო საწევრო 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              გაიგეთ მეტი
            </Button>  */}
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              თანამედროვე ფიტნეს პლატფორმა, რომელიც გთავაზობთ მოქნილობას და ეკონომიას
            </p>
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
                  აუზებამდე, იოგის სტუდიებიდან მასაჟის და თავის მოვლის პროცედურებამდე - თქვენი კრედიტები მუშაობს ყველგან.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Percent className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">ფართო არჩევანი და ფასდაკლება</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  ისარგებლეთ 130-ზე მეტი პარტნიორი ობიექტით და 48-ზე მეტი აქტივობით. და მიიღეთ 30%-მდე ფასდაკლება.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">თქვენს საჭიროებაზე მორგებული</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  შეიძინეთ თქვენთვის სასურველი კრედიტების რაოდენობა და ისარგებლეთ პარტნიორ ობიექტებზე, გამოიყენეთ როცა მოისურვებთ. დაიმატეთ კრედიტები ნებისმიერ დროს.
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
              როგორ მუშაობს FlexFit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ერთი აპლიკაცია, ულიმიტო აქტივობა.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">1</div>
                <CardTitle className="text-xl text-blue-600">დარეგისტრირდით და შეიძინეთ წევრობა</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  შექმენით პროფილი FlexFit აპში და აირჩიეთ თქვენთვის შესაფერისი წევრობის პაკეტი. თითოეული პაკეტი მოიცავს კრედიტებს, რომლითაც ისარგებლებთ სხვადასხვა აქტივობებზე.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">2</div>
                <CardTitle className="text-xl text-blue-600">აირჩიეთ აქტივობა და ადგილი</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  აპში იხილავთ პარტნიორ სპორტულ დარბაზებს, საცურაო აუზებს, ფიტნეს სტუდიებს და სხვა აქტივობებს.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">3</div>
                <CardTitle className="text-xl text-blue-600">მიიღეთ წვდომა QR კოდით</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ადგილზე მისვლისას დაასკანერეთ QR კოდი ან გადაიხადეთ აპლიკაციიდან და მიიღეთ წვდომა აქტივობაზე. კრედიტები ავტომატურად ჩამოგეჭრებათ.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">4</div>
                <CardTitle className="text-xl text-blue-600">ისიამოვნეთ მრავალფეროვნებით</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  ერთი წევრობით შეგიძლიათ გაერთიანდეთ სხვადასხვა სპორტულ, გამაჯანსაღებელ და თავის მოვლის სივრცეებში, მრავალი აბონემენტის ყიდვის გარეშე და ფასდაკლებებიც კი მიიღოთ.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 bg-gray-50">
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
        
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">დამწყები</CardTitle>
                <div className="text-4xl font-bold text-gray-900">65 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">120 კრედიტი</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                </div>
              
              </CardContent>
            </Card>

          
            <Card className="relative border-2 border-blue-500 shadow-xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 whitespace-nowrap text-white px-4 py-1 rounded-full text-sm font-medium">
                  ყველაზე პოპულარული
                </span>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">სტანდარტული</CardTitle>
                <div className="text-4xl font-bold text-gray-900">85 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">200 კრედიტი</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                </div>
               
              </CardContent>
            </Card>

            
            <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">პრემიუმ</CardTitle>
                <div className="text-4xl font-bold text-gray-900">135 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">430 კრედიტი</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                </div>
               
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
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
                  საცურაო აუზში მივიდე, ხოლო საღამოს იოგის კლასზე, მრავალი წევრობის გარეშე.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">სალომე გოგიაშვილი</div>
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
                  როგორიცაა კლაიმბინგი და ნაკლები ძირითად სპორტდარბაზის სესიებზე. სრული მოქნილობა.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">გიორგი ახვლედიანი</div>
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
                    <div className="font-semibold text-gray-900">ნინო ქართველიშვილი</div>
                    <div className="text-sm text-gray-500">წევრი 2025 წლიდან</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
           როდის შევძლებ FlexFit-ის გამოყენებას?
            <br />
          </h2>
          <p className="text-xl text-white mb-2 max-w-2xl mx-auto">
           ჩვენი ინოვაციური პლატფორმა გზაშია 🚀 სულ მალე შეძლებთ მის გამოყენბას. <br /> მანამდე კი, გაქვთ შესაძლებლობა,
           შემოუერთდეთ აქციას და
           <span className="text-yellow-300  text-2xl">  სრულიად უფასოდ მიიღოთ ერთთვიანი ვიზიტები </span> პარტნიორ დაწესებულებებში.
         
          </p>

          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
           <span>

           <span className="text-yellow-300  text-2xl">   უფასო საწევროს მიიღებს მხოლოდ პირველი 500 მომხმარებელი </span> — შეუერთდი ახლა და არ გაუშვა შანსი!
           </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://tally.so/r/n9kQdK"
                  target="_blank"
              className="bg-gradient-to-r whitespace-nowrap flex items-center justify-center rounded-full from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              შეუერთდით აქციას
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          
          </div>
        </div>
      </section>

    </div>
  )
}
