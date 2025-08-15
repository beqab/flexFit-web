import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Activity,
  ArrowRight,
  Check,
  CreditCard,
  MapPin,
  Star,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ფასები
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">აირჩიეთ თქვენთვის შესაფერისი გეგმა</span> და დაიწყეთ ჯანსაღი ცხოვრების მოგზაურობა
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              აირჩიეთ თქვენი გეგმა
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ყველა გეგმა მოიცავს მაქსიმალურ მოქნილობას, ფასდაკლებებებს და პრემიუმ მხარდაჭერას
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">დამწყები</CardTitle>
                <div className="text-4xl font-bold text-gray-900">65 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">120 კრედიტი</CardDescription>
                <div className="text-sm text-gray-500">ყოველთვიურად</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    უფასო აპლიკაცია
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                     მხარდაჭერა
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  აირჩიეთ გეგმა
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan - Featured */}
            <Card className="relative border-2 border-blue-500 shadow-xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 whitespace-nowrap text-white px-4 py-1 rounded-full text-sm font-medium">
                  ყველაზე პოპულარული
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-blue-600">სტანდარტული</CardTitle>
                <div className="text-4xl font-bold text-gray-900">85 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">200 კრედიტი</CardDescription>
                <div className="text-sm text-gray-500">ყოველთვიურად</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    უფასო აპლიკაცია
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                     მხარდაჭერა
                  </div>
                  {/* <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    პრემიუმ მხარდაჭერა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    პრიორიტეტული რეზერვაცია
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    უფასო კონსულტაცია
                  </div> */}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  აირჩიეთ გეგმა
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-purple-600">პრემიუმ</CardTitle>
                <div className="text-4xl font-bold text-gray-900">135 ლარი<span className="text-lg text-gray-500">/თვე</span></div>
                <CardDescription className="text-gray-600">430 კრედიტი</CardDescription>
                <div className="text-sm text-gray-500">ყოველთვიურად</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    წვდომა 130+ ლოკაციაზე
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    78+ აქტივობა
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    30%-მდე ფასდაკლება
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                    უფასო აპლიკაცია
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 mr-3 text-green-500" />
                     მხარდაჭერა
                  </div>
                 
                </div>
                <Button className="w-full mt-6" variant="outline">
                  აირჩიეთ გეგმა
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    

      {/* How Credits Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              როგორ მუშაობს კრედიტების სისტემა?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              გაიგეთ როგორ იყენებთ თქვენს კრედიტებს სხვადასხვა აქტივობებზე
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>კრედიტების შეძენა</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  აირჩიეთ თქვენთვის შესაფერისი გეგმა და მიიღეთ კრედიტები ყოველთვიურად. 
                  კრედიტები ავტომატურად ივსება ყოველ თვეს.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>აქტივობების არჩევა</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  აირჩიეთ ნებისმიერი აქტივობა ჩვენი პარტნიორებისგან. 
                  თითოეული აქტივობა ღირს გარკვეული რაოდენობის კრედიტი.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>კრედიტების გამოყენება</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  მოინახულეთ არჩეული აქტივობა და კრედიტები ავტომატურად 
                  ჩამოგეჭრებათ. გამოიყენეთ როცა მოისურვებთ!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credit Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              კრედიტების მაგალითები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              იხილეთ რამდენი კრედიტი ღირს სხვადასხვა აქტივობები
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ფიტნეს ცენტრი</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">5-8 კრედიტი</div>
                <p className="text-sm text-gray-600">ერთი სესია</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">საცურაო აუზი</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">3-5 კრედიტი</div>
                <p className="text-sm text-gray-600">ერთი სესია</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">იოგა კლასი</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">4-6 კრედიტი</div>
                <p className="text-sm text-gray-600">ერთი კლასი</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">პრემიუმ აქტივობები</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">8-15 კრედიტი</div>
                <p className="text-sm text-gray-600">ერთი სესია</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ხშირად დასმული კითხვები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              იპოვეთ პასუხები ფასებისა და გეგმების შესახებ
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">რა მოხდება თუ კრედიტები ამოიწურა?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  თუ თვის განმავლობაში კრედიტები ამოიწურა, შეგიძლიათ შეიძინოთ დამატებითი კრედიტები 
                  ან დაელოდოთ მომდევნო თვის ავტომატურ შევსებას.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">შეგიძლიათ გეგმის შეცვლა?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  კი, შეგიძლიათ შეცვალოთ თქვენი გეგმა ნებისმიერ დროს. ცვლილება ძალაში შევა 
                  მომდევნო გადახის თარიღიდან.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">კრედიტები გადაიტანა მომდევნო თვეს?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  დიახ, კრედიტები შეგინარჩუნდებათ მომდევნო თვეს. დარჩენილი კრედიტები შეგინარჩუნდებათ მომდევნო თვეს ასერომ გამოუყნებელი კრედიტები არ დაგეკარგებათ თუ შემდეგ თვეშიც დაიმატებთ ნებისმიერი რაოდენობის კრედიტებს .
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">არის თუ არა ხელშეკრულება?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  არა, არ არის გრძელვადიანი ხელშეკრულება. შეგიძლიათ გააუქმოთ თქვენი გეგმა 
                  ნებისმიერ დროს ჯარიმის გარეშე.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            მზად ხართ დასაწყებად?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            შემოუერთდით FlexFit-ს დღესვე და დაიწყეთ თქვენი ჯანსაღი ცხოვრების მოგზაურობა
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              დაიწყეთ უფასო ცდა
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <Link href="/contact">დაგვიკავშირდით</Link>
            </Button>
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
           ჩვენი ინოვაციური პლატფორმა გზაშია სულ მალე შეძლებთ მის გამოყენბას მანამდე კი გაქვთ შესაძლებლობა
           შემოუერთდეთ აქციას და
           <span className="text-yellow-300  text-2xl">  სრულიად უფასოდ მიიღოთ ერთთვიანი ვიზიტები პარტნიორ დაწესებულებებში</span>
         
          </p>

          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
           <span>
           {" "}  უფასო საწევროს მიიღებს <span className="text-yellow-300  text-2xl"> პირველი 500 მომხმარებელი </span> ასე რომ იჩქარეთ!
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
