import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Target, 
  Heart, 
  Shield, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ჩვენს შესახებ
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">FlexFit</span> არის ინოვაციური პლატფორმა, რომელიც ცვლის ფიტნესის სამყაროს
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ჩვენი ისტორია
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              2023 წელს დაიბადა FlexFit - ფიტნესის სამყაროში რევოლუციის იდეა. ჩვენი მიზანი იყო შეგვექმნა პლატფორმა, 
              რომელიც გაამარტივებდა ფიტნესის ცენტრებში წვდომას და საშუალებას მისცემდა ადამიანებს 
              ექციათ ჯანსაღი ცხოვრების წესი უფრო მარტივად და ეფექტურად.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                როგორ დაიწყო ყველაფერი
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                ჩვენი გუნდი შედგებოდა ფიტნესის ენთუზიასტებისგან, რომლებიც თავად აწყდნენ ფიტნესის ცენტრების 
                ფასებისა და წვდომის პრობლემებს. ჩვენ გვინდოდა შეგვექმნა გადაწყვეტა, რომელიც 
                გაამარტივებდა ფიტნესის ცენტრებში წვდომას და საშუალებას მისცემდა ადამიანებს 
                ექციათ ჯანსაღი ცხოვრების წესი უფრო მარტივად.
              </p>
              <p className="text-gray-600 leading-relaxed">
                დღეს FlexFit არის საქართველოს წამყვანი ფიტნესის პლატფორმა, რომელიც აერთიანებს 
                130+ ლოკაციას და 78+ აქტივობას ერთი აბონემენტით.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">130+</div>
                    <div className="text-sm text-gray-600">ლოკაცია</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">78+</div>
                    <div className="text-sm text-gray-600">აქტივობა</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">მომხმარებელი</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">კმაყოფილება</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">ჩვენი მისია</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  ჩვენი მისიაა გავხადოთ ფიტნესი და ჯანსაღი ცხოვრების წესი ყველასთვის ხელმისაწვდომი. 
                  ჩვენ ვქმნით პლატფორმას, რომელიც აერთიანებს საუკეთესო ფიტნესის ცენტრებს 
                  და საშუალებას აძლევს ხალხს იპოვონ და გამოიყენონ სპორტული აქტივობები, 
                  რომლებიც მათ უკეთ მოერგებათ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">ჩვენი ხედვა</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  ჩვენ ვხედავთ მომავალს, სადაც ყველა ადამიანს ექნება მარტივი წვდომა ფიტნესის 
                  და ჯანსაღი ცხოვრების წესის ყველა ასპექტზე. ჩვენ ვქმნით საზოგადოებას, 
                  სადაც ფიტნესი არის ცხოვრების ნაწილი, არა უბრალოდ აქტივობა.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ჩვენი ღირებულებები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ჩვენი ღირებულებები განსაზღვრავს ყველაფერს, რასაც ვაკეთებთ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>გულწრფელობა</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ჩვენ ვმუშაობთ გულწრფელად და გამჭვირვალედ ყველა ჩვენს მომხმარებელთან
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>სანდოობა</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ჩვენ ვაძლევთ ჩვენს მომხმარებლებს სანდო და უსაფრთხო სერვისს
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>ინოვაცია</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ჩვენ მუდმივად ვცდილობთ გავაუმჯობესოთ ჩვენი სერვისი და ტექნოლოგია
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ჩვენი გუნდი
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FlexFit-ის უკან დგას გამოცდილი და ენთუზიასტული გუნდი
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4"></div>
                <CardTitle>გიორგი მაისურაძე</CardTitle>
                <CardDescription>CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ფიტნესის ინდუსტრიაში 10+ წლის გამოცდილება. მისი ხედვა განსაზღვრავს FlexFit-ის მომავალს.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-4"></div>
                <CardTitle>ანა ბერიძე</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ტექნოლოგიების ექსპერტი, რომელიც ქმნის FlexFit-ის ინოვაციურ პლატფორმას.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4"></div>
                <CardTitle>ლევან ნაკაშიძე</CardTitle>
                <CardDescription>Head of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ოპერაციების სპეციალისტი, რომელიც უზრუნველყოფს FlexFit-ის ყოველდღიურ ფუნქციონირებას.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              დაგვიკავშირდით
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              გაქვთ კითხვები? ჩვენ ვზღუდავთ თქვენს შეტყობინებას
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">კონტაქტის ინფორმაცია</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">თბილისი, საქართველო</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">+995 555 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">info@flexfit.ge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">ორშაბათი - პარასკევი: 9:00 - 18:00</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">გამოგვყევით</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>გაგვიგზავნეთ შეტყობინება</CardTitle>
                  <CardDescription>
                    შეავსეთ ფორმა და ჩვენ მალე გიპასუხილვებთ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">სახელი</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="თქვენი სახელი"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ელ-ფოსტა</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="თქვენი ელ-ფოსტა"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">შეტყობინება</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="თქვენი შეტყობინება"
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    გაგზავნა
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
